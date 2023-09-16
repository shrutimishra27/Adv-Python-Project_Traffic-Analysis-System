import cv2
import os

# Function to convert a video into images and organize them into subfolders
def videos_to_images(input_dir, output_dir, num_frames_per_video):
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Iterate through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith((".mp4")):
            video_path = os.path.join(input_dir, filename)

            # Create a subfolder with the video's name (without extension)
            video_name = os.path.splitext(filename)[0]
            video_output_dir = os.path.join(output_dir, video_name)
            os.makedirs(video_output_dir, exist_ok=True)

            # Open the video file
            cap = cv2.VideoCapture(video_path)

            # Get video properties
            total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            frame_interval = total_frames // num_frames_per_video

            frame_count = 0
            image_count = 0

            while True:
                ret, frame = cap.read()

                if not ret:
                    break

                # Save the frame as an image
                if frame_count % frame_interval == 0:
                    image_count += 1
                    image_filename = os.path.join(video_output_dir, f'image_{image_count:04d}.jpg')
                    cv2.imwrite(image_filename, frame)

                frame_count += 1

            # Release the video capture object
            cap.release()

            print(f"Total frames in '{video_name}': {total_frames}")
            print(f"Extracted {image_count} frames as images in '{video_output_dir}'.")

if __name__ == "__main__":
    input_directory = "input_videos"  # Directory containing your video files
    output_directory = "output_images"  # Output directory
    num_frames_per_video = 50  # Number of frames you want to extract per video

    videos_to_images(input_directory, output_directory, num_frames_per_video)
