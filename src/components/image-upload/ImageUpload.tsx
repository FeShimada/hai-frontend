import React, { useState } from "react";
import { Button } from "@mui/material";

interface ImageUploadProps {
  onChange: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <Button component="span" variant="outlined" color="primary">
          Choose Image
        </Button>
      </label>

      {previewURL && (
        <div style={{ marginTop: 20 }}>
          <img
            src={previewURL}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: 200 }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
