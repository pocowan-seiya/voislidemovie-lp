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
    video_file = genai.upload_file(path=path)
    print(f"Completed upload: {video_file.uri}")
    return video_file

def generate_content(prompt, file_uri=None, mime_type=None):
    """Generates content using Gemini 1.5 Pro."""
    model = genai.GenerativeModel('gemini-1.5-pro')

    content = [prompt]
    if file_uri:
        # We need to retrieve the file object or pass the file data.
        # For simplicity in this wrapper, we assume file_uri is the file object from upload_file
        # But genai.upload_file returns a File object which can be passed directly.
        # Let's adjust the signature to accept the file object.
        pass
    
    # Re-implementation for clarity:
    # If we have a file object (from upload_file), we pass it.
    pass

class GeminiClient:
    def __init__(self):
        self.model = genai.GenerativeModel('gemini-2.0-flash-lite')

    def upload_media(self, file_path):
        """Uploads media file to Gemini."""
        print(f"Uploading {file_path} to Gemini...")
        return genai.upload_file(path=file_path)

    def generate_text(self, prompt, media_file=None):
        """Generates text from prompt and optional media file."""
        contents = [prompt]
        if media_file:
            contents.append(media_file)
        
        response = self.model.generate_content(contents)
        return response.text
