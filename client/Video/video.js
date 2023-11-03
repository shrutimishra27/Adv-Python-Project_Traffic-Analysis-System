document.addEventListener("DOMContentLoaded", function () {
    const uploadingMessage = document.getElementById("uploadingMessage");
    const fileInput = document.getElementById("fileInput");
    const popup = document.getElementById("popup");
    const videoSource = document.getElementById("videoSource");
    const closeButton = document.getElementById("closeButton");
    const downloadButton = document.getElementById("downloadButton");

    let uploading = false;
    let showPopup = false;

    const handleUpload = () => {
        setUploading(true);

        setTimeout(() => {
            setShowPopup(true);
        }, 15000);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const downloadVideo = () => {
        // Replace 'video-url.mp4' with the actual URL or path of your MP4 video
        const videoUrl = "video-url.mp4";

        fetch(videoUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "video.mp4"; // You can change the filename here
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error downloading the video:", error);
            });
    };

    fileInput.addEventListener("change", handleUpload);
    closeButton.addEventListener("click", closePopup);
    downloadButton.addEventListener("click", downloadVideo);

    function setUploading(value) {
        uploading = value;
        uploadingMessage.style.display = value ? "block" : "none";
        document.querySelector(".video-uploader").style.display = value ? "none" : "block";
    }

    function setShowPopup(value) {
        showPopup = value;
        popup.style.display = value ? "block" : "none";
    }
});
