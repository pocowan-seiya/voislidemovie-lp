import logging
import json
import os
from src.utils.gemini_client import GeminiClient
from src.utils.prompts import VIDEO_PIPELINE_PROMPT
from src.utils.video_editor import remove_silence, create_short

def process_video(file_path):
    logging.info(f"Processing Source B (Video): {file_path}")
    
    client = GeminiClient()
    base_name = os.path.splitext(os.path.basename(file_path))[0]
    output_dir = "engine/output"
    
    # 1. Video Processing (Silence Removal)
    # Note: In a real flow, we might do this BEFORE upload if we want to save bandwidth,
    # or AFTER if we want Gemini to see the raw footage. 
    # For this "Source B" logic, we want "No Edit" style but just silence removal.
    # Let's do silence removal first to create the "Main" video.
    
    main_video_path = os.path.join(output_dir, f"{base_name}_main.mp4")
    processed_video_path = remove_silence(file_path, main_video_path)
    
    if not processed_video_path:
        logging.warning("Silence removal failed, using original file for upload.")
        processed_video_path = file_path

    # 2. Upload to Gemini
    try:
        # We upload the PROCESSED video so Gemini sees the final product? 
        # Or raw? Let's upload the raw one for better context if silence removal is choppy,
        # but usually uploading the one we want to publish is better for chaptering.
        # Let's upload the processed one if available.
        upload_path = processed_video_path if processed_video_path else file_path
        media_file = client.upload_media(upload_path)
        logging.info(f"Uploaded video to Gemini: {media_file.uri}")
    except Exception as e:
        logging.error(f"Failed to upload video: {e}")
        return

    # 3. Generate Content
    try:
        logging.info("Generating content...")
        response_text = client.generate_text(VIDEO_PIPELINE_PROMPT, media_file)
        
        cleaned_text = response_text.replace("```json", "").replace("```", "").strip()
        content_data = json.loads(cleaned_text)
        
        logging.info("Content generated successfully.")
        logging.info(f"YouTube Title Ideas: {content_data.get('youtube_title_ideas')}")
        
        # 4. Create Shorts
        shorts_data = content_data.get('shorts_segment')
        if shorts_data:
            start_str = shorts_data.get('start_time')
            end_str = shorts_data.get('end_time')
            # Convert timestamp string to seconds (simple helper needed or assume moviepy handles strings? Moviepy handles "MM:SS")
            # But Gemini might output "HH:MM:SS". Moviepy handles that.
            
            shorts_path = os.path.join(output_dir, f"{base_name}_shorts.mp4")
            create_short(processed_video_path, shorts_path, start_str, end_str)
            
        # 5. Output (Stubs)
        save_outputs(file_path, content_data)
        
    except Exception as e:
        logging.error(f"Failed to generate content or process shorts: {e}")

def save_outputs(original_file_path, data):
    """Saves generated content to local files for verification."""
    base_name = os.path.splitext(os.path.basename(original_file_path))[0]
    output_dir = "engine/output"
    
    # Save JSON
    json_path = os.path.join(output_dir, f"{base_name}_content.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    logging.info(f"Saved content to {json_path}")

