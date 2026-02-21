import os
import glob
import random
import datetime
from pathlib import Path
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv(os.path.expanduser("~/.clawdbot/clawdbot.json")) 
API_KEY = os.getenv("GOOGLE_GENERATIVE_AI_API_KEY") or os.getenv("GEMINI_API_KEY")

if not API_KEY:
    # Fallback: Try to read from clawdbot.json directly
    import json
    try:
        with open(os.path.expanduser("~/.clawdbot/clawdbot.json"), 'r') as f:
            config = json.load(f)
            API_KEY = config.get("env", {}).get("vars", {}).get("GEMINI_API_KEY")
    except Exception as e:
        print(f"Error loading config: {e}")

if not API_KEY:
    print("Error: GEMINI_API_KEY not found.")
    exit(1)

genai.configure(api_key=API_KEY)

# Paths
OBSIDIAN_VAULT = "/Users/seiyaeto/Documents/Obsidian Vault"
# The reference image provided by user
REF_IMAGE_PATH = os.path.expanduser("~/.agent/assets/furufuru_buruburu_ref.jpg")
OUTPUT_DIR = os.path.join(OBSIDIAN_VAULT, "05_Output", "ReadyToPost")

def get_todays_topic():
    # 1. Check today's journal
    today = datetime.date.today().strftime("%Y-%m-%d")
    journal_path = os.path.join(OBSIDIAN_VAULT, "06_Daily", "Journal", f"{today}.md")
    
    content = ""
    topic = "Daily Insight"
    
    if os.path.exists(journal_path):
        with open(journal_path, 'r') as f:
            content = f.read()
            for line in content.split('\n'):
                if line.startswith('# '):
                    topic = line.replace('# ', '').strip()
                    break
    
    if not content:
        # Fallback to Core Method (main methodology document)
        core_method_path = os.path.join(OBSIDIAN_VAULT, "01_System", "Core_Wisdom", "Core_Method.md")
        if os.path.exists(core_method_path):
            with open(core_method_path, 'r') as f:
                content = f.read()
                # Pick a random section for variety
                sections = content.split('## ')
                if len(sections) > 1:
                    chosen = random.choice(sections[1:])  # Skip first (header)
                    topic = chosen.split('\n')[0].strip()
                    content = chosen
    
    if not content:
        # Fallback to Core Wisdom folder
        wisdom_files = glob.glob(os.path.join(OBSIDIAN_VAULT, "01_System", "Core_Wisdom", "*.md"))
        if wisdom_files:
            target_file = random.choice(wisdom_files)
            topic = os.path.basename(target_file).replace(".md", "")
            with open(target_file, 'r') as f:
                content = f.read()
    
    return topic, content

def generate_content_with_image(topic, context_text):
    # Use Gemini 1.5 Flash which supports multimodal input
    model = genai.GenerativeModel('gemini-1.5-flash')
    
    # We will upload the image file to the API (or pass it if client supports bytes)
    # For simplicity in this script, we'll assume we can pass the image object if using the right library version
    # Or we describe it in text if we can't upload. But user wants "use this image".
    # Since we are automating, we want to generate a NEW image based on this one.
    # Current Gemini API (generate_content) is text/multimodal -> text.
    # To generate IMAGES, we need a different call (e.g. Imagen).
    # IF we cannot strictly do "Image-to-Image" via simple API yet, we will:
    # 1. Generate the Text Post
    # 2. Generate a very detailed prompt DESCRIBING the ref image + new action
    
    prompt = f"""
    Context: {context_text[:1000]}
    Topic: {topic}
    
    Task:
    1. Write a short, cute social media post (X/Twitter) as "Furufuru" (a spirit character).
       - Ends sentences with "〜だよ", "〜ふるふる".
    2. Create an Image Generation Prompt to illustrate this post.
       - The image prompts MUST include this description to match the reference character:
       - "Two cute round spirit characters. Left: Purple and white with triangle patterns, wearing brown backpack and holding walking stick. Right: Yellow face with colorful patchwork body (green, blue, pink), wearing blue backpack. Walking in nature, Pixar/Ghibli style 3D render."
       - Add the specific action based on the topic.
    
    Output JSON:
    {{
        "post_text": "...",
        "image_prompt": "..."
    }}
    """
    
    response = model.generate_content(prompt)
    try:
        text = response.text.replace('```json', '').replace('```', '')
        return json.loads(text)
    except:
        return None

def main():
    topic, content = get_todays_topic()
    if not content: 
        print("No content found.")
        return

    result = generate_content_with_image(topic, content)
    if not result:
        print("Failed to generate.")
        return

    # Save Draft
    today = datetime.date.today().strftime("%Y-%m-%d")
    save_dir = os.path.join(OUTPUT_DIR, f"{today}_{topic.replace(' ', '_')}")
    os.makedirs(save_dir, exist_ok=True)
    
    draft_file = os.path.join(save_dir, "draft.md")
    with open(draft_file, 'w') as f:
        f.write(f"# {topic}\n\n")
        f.write(f"![Ref Image]({REF_IMAGE_PATH})\n\n")
        f.write(f"**Image Prompt**: {result['image_prompt']}\n\n")
        f.write("## 🌕 Furufuru Post\n")
        f.write(result['post_text'])

if __name__ == "__main__":
    import json
    main()
