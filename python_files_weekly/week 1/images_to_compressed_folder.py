import os
import zipfile
import requests
from google.colab import drive
drive.mount('/content/drive')

# Get the folder name where the images are stored
folder_name = input("Enter the folder name: ")

# Get a list of all the image files in the folder
image_files = [f for f in os.listdir(folder_name) if f.endswith(".jpg") or f.endswith(".png")]

# Compress the image files
compressed_folder = zipfile.ZipFile("compressed_images.zip", "w")
for image_file in image_files:
  compressed_folder.write(os.path.join(folder_name, image_file))
compressed_folder.close()

# Upload the compressed folder to drive
drive_file_name = input("Enter the file name for the compressed folder in drive: ")
drive_file_id = requests.post(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=media",
    data=open("compressed_images.zip", "rb"),
    headers={"Authorization": "Bearer YOUR_DRIVE_API_TOKEN"},
)

from google.colab import files
uploaded = files.upload()
print("The compressed folder has been uploaded to drive with file ID:", drive_file_id)
