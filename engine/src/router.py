import os
import logging
from src.pipelines.audio_pipeline import process_audio
from src.pipelines.video_pipeline import process_video

AUDIO_EXTENSIONS = {'.m4a', '.mp3', '.wav'}
VIDEO_EXTENSIONS = {'.mp4', '.mov'}

def route_file(file_path):
    _, ext = os.path.splitext(file_path)
    ext = ext.lower()

    if ext in AUDIO_EXTENSIONS:
        logging.info(f"Detected Audio file: {file_path}")
        process_audio(file_path)
    elif ext in VIDEO_EXTENSIONS:
        logging.info(f"Detected Video file: {file_path}")
        process_video(file_path)
    else:
        logging.info(f"Ignored file type: {ext} for {file_path}")
