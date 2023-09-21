import React, { useState } from 'react';
import "./Media.css";

function MediaManagement() {
  const [mediaList, setMediaList] = useState([]); // Array to store uploaded media
  const [selectedCover, setSelectedCover] = useState(null); // Store selected cover
  const [isPremiumPopupOpen, setIsPremiumPopupOpen] = useState(false);

  const handleMediaUpload = (files) => {
    // Implement logic to upload media files here
    // Check file type, size, and premium limit
    // Add valid media to the mediaList state
    // Display a premium popup if the limit is exceeded
  };

  const handleDeleteMedia = (mediaId) => {
    // Implement logic to delete media from the mediaList state
  };

  return (
    <div className="media-management-container">
      <div className="media-list-section">
        {/* Display already-added media with delete buttons */}
        {mediaList.map((media) => (
          <div key={media.id} className="media-item">
            {/* Display media */}
            <button onClick={() => handleDeleteMedia(media.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="upload-section">
        {/* Allow users to drag and drop media files */}
        <input
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={(e) => handleMediaUpload(e.target.files)}
        />
      </div>

      <div className="cover-page-selection">
        {/* Allow users to select a cover page */}
        <select
          value={selectedCover}
          onChange={(e) => setSelectedCover(e.target.value)}
        >
          <option value="">Select Cover Page</option>
          {mediaList.map((media) => (
            <option key={media.id} value={media.id}>
              {media.name}
            </option>
          ))}
        </select>
      </div>

      {isPremiumPopupOpen && (
        <div className="premium-popup">
          {/* Premium popup content */}
          <p>Upgrade to premium to add more media.</p>
          {/* Include premium upgrade button */}
        </div>
      )}
    </div>
  );
}

export default MediaManagement;
