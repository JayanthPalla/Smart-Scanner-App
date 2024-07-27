// CameraView.js
import React, { useRef, useEffect } from 'react';

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch(error => {
          console.error('Error accessing camera:', error);
        });
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} width="100%" height="100%" autoPlay></video>
    </div>
  );
}

export default CameraView;
