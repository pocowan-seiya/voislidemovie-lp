import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv(dotenv_path="engine/.env")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

def upload_file(path):
    """Uploads a file to Gemini."""
    print(f"Uploading file: {path}...")
    media_file = genai.upload_file(path=path)
    print(f"Completed upload: {media_file.uri}")
    return media_file

class GeminiClient:
    def __init__(self):
        self.model = genai.GenerativeModel('gemini-2.0-flash')

    def upload_media(self, file_path):
        """Uploads media file to Gemini."""
        print(f"Uploading {file_path} to Gemini...")
        return genai.upload_file(path=file_path)

    def generate_text(self, prompt, media_file=None):
        """Generates text from prompt and optional media file."""
        contents = [prompt]
        if media_file:
            contents.append(media_file)
        
        # Use a retry loop for Quota Exceeded errors
        import time
        max_retries = 3
        for i in range(max_retries):
            try:
                response = self.model.generate_content(contents)
                return response.text
            except Exception as e:
                if "429" in str(e) and i < max_retries - 1:
                    wait_time = 60
                    print(f"Quota exceeded. Retrying in {wait_time} seconds... (Attempt {i+1}/{max_retries})")
                    time.sleep(wait_time)
                else:
                    raise e
