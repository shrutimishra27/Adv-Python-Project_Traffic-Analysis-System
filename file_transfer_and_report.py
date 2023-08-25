import os
import shutil
from datetime import datetime
from compressor import compress_folder

# Paths
dataset_folder = "Dataset Folder"
metadata_folder = "Metadata"
images_stored_folder = os.path.join(metadata_folder, "images_stored")

# Create Metadata folder if it doesn't exist
if not os.path.exists(metadata_folder):
    os.makedirs(metadata_folder)

# Create images_stored folder inside Metadata folder if it doesn't exist
if not os.path.exists(images_stored_folder):
    os.makedirs(images_stored_folder)

# Initialize counters and sizes
jpg_count = 0
txt_count = 0
jpg_total_size = 0
txt_total_size = 0

# Iterate through files in the dataset folder
for file_name in os.listdir(dataset_folder):
    file_path = os.path.join(dataset_folder, file_name)
    
    if os.path.isfile(file_path):
        file_extension = file_name.split('.')[-1]
        file_size = os.path.getsize(file_path)
        
        if file_extension == "jpg":
            jpg_count += 1
            jpg_total_size += file_size
            
            # Copy .jpg files to images_stored folder
            shutil.copy(file_path, os.path.join(images_stored_folder, file_name))
            
        elif file_extension == "txt":
            txt_count += 1
            txt_total_size += file_size

current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Create and write summary report
summary_report = f"Summary Report ({current_datetime}):\n" \
                 f"Number of .jpg files: {jpg_count}\n" \
                 f"Number of .txt files: {txt_count}\n" \
                 f"Total size of images: {jpg_total_size} bytes\n" \
                 f"Total size of txt files: {txt_total_size} bytes"

summary_report_path = os.path.join(metadata_folder, "summary_report.txt")
with open(summary_report_path, "w") as report_file:
    report_file.write(summary_report)

compress_folder(metadata_folder, "compressed_metadata")

print("Summary report and image copies created successfully!")
