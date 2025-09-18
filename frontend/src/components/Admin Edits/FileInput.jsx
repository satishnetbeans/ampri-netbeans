// @ts-nocheck

// // src/components/admin/FileInput.jsx
import React, { useEffect, useState } from 'react';

/**
 * FileInput
 * - value: existing URL (string)
 * - onFileSelected(file) => passes the File or null
 * - accept: file accept string
 */

export default function FileInput({ value, onFileSelected, accept = 'image/*' }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(value || null);

  useEffect(() => {
    setPreview(value || null);
  }, [value]);

  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
    // cleanup object URL if used
    return () => {};
  }, [file]);

  const handleChange = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    onFileSelected && onFileSelected(f);
  };

  return (
    <div>
      {preview && (
        <div className="mb-2">
          {preview.startsWith('data:') || /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(preview) ? (
            <img src={preview} alt="preview" className="max-w-xs max-h-40 object-cover" />
          ) : (
            <video src={preview} controls className="max-w-xs max-h-40 object-cover" />
          )}
        </div>
      )}
      <input type="file" accept={accept} onChange={handleChange} />
    </div>
  );
}

