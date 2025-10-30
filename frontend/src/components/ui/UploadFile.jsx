// @ts-nocheck
import React, { useState } from "react";
import { fileUpload } from "../../api/axios";
import { Copy } from "lucide-react";
import checkBaseURL from "../../utils/CheckBaseUrl";

const UploadFile = ({ label = "Upload File", onUpload }) => {
    const baseUrl = checkBaseURL();

    const [fileUrl, setFileUrl] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setIsUploading(true);
            setProgress(0);

            const formData = new FormData();
            formData.append("file", file);

            // detect file type
            const type = file.type.split("/")[0]; // "image", "video", "application" etc.
            setFileType(type);

            const response = await fileUpload(formData, {
                onUploadProgress: (event) => {
                    if (event.total) {
                        const percent = Math.round((event.loaded * 100) / event.total);
                        setProgress(percent);
                    }
                },
            });

            const result = response.data;
            const filePath = result.path || result.filePath;
            const fullUrl = baseUrl ? `${baseUrl}/${filePath}` : filePath;

            setFileUrl(fullUrl);
            onUpload?.(filePath);

        } catch (error) {
            console.error("Upload error:", error);
            alert("File upload failed");
        } finally {
            setIsUploading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(fileUrl);
        alert("File URL copied!");
    };

    return (
        <div className="w-full max-w-md my-2.5 p-4 border border-gray-200 rounded-2xl shadow-sm bg-white flex flex-col gap-4">
            <div>
                <label className="block text-lg font-semibold text-gray-700">{label}</label>
                <span className="text-[12px] text-green-600">you will get Link/Url of uploaded file to use .</span>
            </div>

            {/* Upload Input */}
            <input
                type="file"
                accept="*/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 
                   file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                   file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
            />

            {/* Progress bar */}
            {isUploading && (
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-blue-500 h-2 transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {/* File Preview */}
            {fileUrl && (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-sm break-all hover:underline"
                        >
                            {fileUrl}
                        </a>
                        <button
                            onClick={handleCopy}
                            className="p-2 rounded-lg hover:bg-gray-100"
                            title="Copy URL"
                        >
                            <Copy className="w-4 h-4 text-gray-600 cursor-pointer" />
                        </button>
                    </div>

                    {/* Image or Video preview */}
                    {fileType === "image" && (
                        <div className="w-52 h-40 overflow-hidden mx-auto">
                            <img
                                src={fileUrl}
                                alt="Uploaded file"
                                className="w-full h-full object-cover rounded-xl border border-gray-200"
                            />
                        </div>
                    )}

                    {fileType === "video" && (
                        <div className="w-52 h-40 overflow-hidden mx-auto">
                            <video
                                controls
                                className="w-full h-full object-cover rounded-xl border border-gray-200"
                            >
                                <source src={fileUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UploadFile;

