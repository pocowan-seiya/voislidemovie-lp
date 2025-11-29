import logging
import json
import os
from src.utils.gemini_client import GeminiClient
from src.utils.prompts import AUDIO_PIPELINE_PROMPT

def process_audio(file_path):
    logging.info(f"Processing Source A (Audio): {file_path}")
    
    client = GeminiClient()
    
    # 1. Upload
    try:
        media_file = client.upload_media(file_path)
        logging.info(f"Uploaded audio to Gemini: {media_file.uri}")
    except Exception as e:
        logging.error(f"Failed to upload audio: {e}")
        return

    # 2. Generate Content
    try:
        logging.info("Generating content...")
        response_text = client.generate_text(AUDIO_PIPELINE_PROMPT, media_file)
        
        # Clean up response to ensure valid JSON (remove markdown code blocks if present)
        cleaned_text = response_text.replace("```json", "").replace("```", "").strip()
        content_data = json.loads(cleaned_text)
        
        logging.info("Content generated successfully.")
        logging.info(f"Note Title: {content_data.get('note_title')}")
        
        # 3. Output (Stubs)
        save_outputs(file_path, content_data)
        
    except Exception as e:
        logging.error(f"Failed to generate content: {e}")

def save_outputs(original_file_path, data):
    """Saves generated content to local files for verification."""
    base_name = os.path.splitext(os.path.basename(original_file_path))[0]
    output_dir = "engine/output"
    
    # Save JSON
    json_path = os.path.join(output_dir, f"{base_name}_content.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    logging.info(f"Saved content to {json_path}")

