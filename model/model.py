import torch
from pathlib import Path
from models.experimental import attempt_load
from utils.general import non_max_suppression
from utils.plots import plot_one_box
from utils.torch_utils import select_device

# Load YOLOv5 model
weights_path = Path("yolov5s.pt")  # Path to the downloaded model weights
device = select_device("")  # Use the default GPU if available, or CPU if not
model = attempt_load(weights_path, map_location=device)

# Set the model to evaluation mode
model.eval()

# Load an image for inference (replace 'image.jpg' with your image file)
img_path = 'image.jpg'
img = torch.from_numpy(img_path)

# Inference
if img.ndimension() == 3:
    img = img.unsqueeze(0)

# Inference
with torch.no_grad():
    detections = model(img)

# Apply non-maximum suppression
results = non_max_suppression(detections, conf_thres=0.5, iou_thres=0.45)

# Display the results
for img_i, det in enumerate(results):
    if det is not None and len(det):
        det[:, :4] = det[:, :4].clip(0, img.shape[2])  # Clip boxes to image bounds
        c = det[:, -1]  # Get class labels
        for *xyxy, conf, cls in det:
            label = f'{model.names[int(cls)]} {conf:.2f}'
            plot_one_box(xyxy, img[img_i], label=label, color=(0, 0, 255))

# Save or display the image with bounding boxes
img.show()
