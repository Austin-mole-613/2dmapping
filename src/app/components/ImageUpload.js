// components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    onUpload(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUpload;
