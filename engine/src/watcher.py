import time
import logging
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from src.router import route_file

class NewFileHandler(FileSystemEventHandler):
    def on_created(self, event):
        if not event.is_directory:
            logging.info(f"New file detected: {event.src_path}")
            # Wait a bit to ensure file write is complete (simple heuristic)
            time.sleep(1) 
            route_file(event.src_path)

class Watcher:
    def __init__(self, directory_to_watch):
        self.DIRECTORY_TO_WATCH = directory_to_watch
        self.observer = Observer()

    def run(self):
        event_handler = NewFileHandler()
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=False)
        self.observer.start()
        logging.info(f"Watcher started on: {self.DIRECTORY_TO_WATCH}")
        try:
            while True:
                time.sleep(5)
        except KeyboardInterrupt:
            self.observer.stop()
            logging.info("Watcher stopped")
        self.observer.join()
