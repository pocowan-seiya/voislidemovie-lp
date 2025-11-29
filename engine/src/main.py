import os
import sys
import logging
from dotenv import load_dotenv

# Add the 'engine' directory to sys.path so 'src' module can be found
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.watcher import Watcher

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("engine/logs/engine.log"),
        logging.StreamHandler(sys.stdout)
    ]
)

def main():
    # Load environment variables
    load_dotenv(dotenv_path="engine/.env")
    
    # Define input directory
    input_dir = os.path.abspath("engine/input")
    
    if not os.path.exists(input_dir):
        os.makedirs(input_dir)
        logging.info(f"Created input directory: {input_dir}")

    logging.info("Antigravity Engine Starting...")
    
    # Process existing files
    logging.info("Checking for existing files...")
    from src.router import route_file
    for filename in os.listdir(input_dir):
        file_path = os.path.join(input_dir, filename)
        if os.path.isfile(file_path) and not filename.startswith('.'):
            logging.info(f"Found existing file: {filename}")
            route_file(file_path)
    
    watcher = Watcher(input_dir)
    watcher.run()

if __name__ == "__main__":
    main()
