// @ts-nocheck
// src/components/admin/FileInput.jsx
import React, { useEffect, useState } from 'react';

export default function FileInput({ initial, value, onFileSelected, accept = 'image/*,video/*' , fileType , setFileType , setField }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(value || null);

  // Determine file type from initial value or existing file
  useEffect(() => {
    if (value) {
      const detectedType = detectFileType(value);
      setFileType(detectedType);
      setField('fileType', detectedType);
    } else if (initial?.fileUrl) {
      const detectedType = detectFileType(initial.fileUrl);
      setFileType(detectedType);
      setField('fileType', detectedType);

    }
  }, [value, initial, setFileType]);

  useEffect(() => {
    setPreview(value || null);
  }, [value]);

  useEffect(() => {
    if (!file) return;
    
    const detectedType = detectFileTypeFromFile(file);
    setFileType(detectedType);
    setField('fileType', detectedType);
    
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  }, [file , setFileType]);

  // Helper function to detect file type from URL/string
  const detectFileType = (url) => {
    if (!url) return '';
    
    if (typeof url === 'string') {
      if (url.startsWith('data:image/') || /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url)) {
        return 'image';
      } else if (url.startsWith('data:video/') || /\.(mp4|mov|avi|mkv|webm|wmv)$/i.test(url)) {
        return 'video';
      }
    }
    return '';
  };

  // Helper function to detect file type from File object
  const detectFileTypeFromFile = (file) => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    return '';
  };

  // Get accept string based on current file type
  const getAcceptString = () => {
    if (fileType === 'image') return 'image/*';
    if (fileType === 'video') return 'video/*';
    return accept; // default to both if no type detected
  };

  const handleChange = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    onFileSelected && onFileSelected(f);
    
    // Auto-detect and set file type when user selects a file
    if (f) {
      const detectedType = detectFileTypeFromFile(f);
      setFileType(detectedType);
    } else {
      setFileType('');
    }
  };
  
  const handleFileTypeChange = (type) => {
    console.log("changing file type to", type);
    setFileType(type);
    setField && setField('fileType', type);
    
    setFile(null);
    setPreview(null);
    onFileSelected && onFileSelected(null);
  };

  return (
    <div>
      {/* File Type Selector */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">File Type</label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleFileTypeChange('image')}
            className={`px-3 py-1 border rounded ${
              fileType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Image
          </button>
          <button
            type="button"
            onClick={() => handleFileTypeChange('video')}
            className={`px-3 py-1 border rounded ${
              fileType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            Video
          </button>
        </div>
      </div>

      {/* Preview */}
      {preview ? (
        <div className="mb-2">
          {fileType === 'image' ? (
            <img src={preview} alt="preview" className="max-w-xs max-h-40 object-cover" />
          ) : fileType === 'video' ? (
            <video src={preview} controls className="max-w-xs max-h-40 object-cover" />
          ) : null}
        </div>
      ) : initial?.fileUrl && fileType ? (
        <div className="mb-2">
          {fileType === 'image' ? (
            <img src={initial.fileUrl} alt="preview" className="max-w-xs max-h-40 object-cover" />
          ) : (
            <video src={initial.fileUrl} controls className="max-w-xs max-h-40 object-cover" />
          )}
        </div>
      ) : null}

      {/* File Input */}
      {fileType && (
        <div>
          <input 
            type="file" 
            accept={getAcceptString()} 
            onChange={handleChange}
            className="w-full cursor-pointer hover:bg-blue-100 p-2 border rounded"
          />
          <p className="text-sm text-gray-500 mt-1 ">
            {fileType === 'image' 
              ? 'Select an image file (JPEG, PNG, GIF, etc.)' 
              : 'Select a video file (MP4, MOV, AVI, etc.)'
            }
          </p>
        </div>
      )}

      {/* Prompt if no file type selected */}
      {!fileType && (
        <div className="text-gray-500 text-sm">
          Please select whether you want to upload an image or video first.
        </div>
      )}
    </div>
  );
}
