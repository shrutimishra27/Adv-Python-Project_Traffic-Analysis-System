import cv2
import os

# Function to convert a video into images
def video_to_images(video_path, output_dir, num_frames):
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Open the video file
    cap = cv2.VideoCapture(video_path)

    # Get video properties
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_interval = total_frames // num_frames

    frame_count = 0
    image_count = 0

    while True:
        ret, frame = cap.read()

        if not ret:
            break

        # Save the frame as an image
        if frame_count % frame_interval == 0:
            image_count += 1
            image_filename = os.path.join(output_dir, f'image_{image_count:04d}.jpg')
            cv2.imwrite(image_filename, frame)

        frame_count += 1

    # Release the video capture object
    cap.release()

    print(f"Total frames in video: {total_frames}")
    print(f"Extracted {image_count} frames as images.")

if __name__ == "__main__":
    video_path = "./video/vid-1.mp4"  # Path of your video
    output_directory = "./images"  # Output directory
    num_frames = 50  # Number of frames you want to extract

    video_to_images(video_path, output_directory, num_frames)
