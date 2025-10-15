// @ts-nocheck
import React from 'react'
import checkBaseURL from '../../../utils/CheckBaseUrl'

const EnlargedImageModel = ({ file, onClose }) => {
    const baseurl = checkBaseURL()
    console.log("file in enlarged model : ", file)
    if (!file) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-4 max-w-3xl w-auto"
                onClick={(e) => e.stopPropagation()}
            >

                {
                    file.fileType === "image" ? (
                        <div
                            key={file._id}
                            className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 "

                        >
                            <img
                                src={file.fileUrl}
                                alt={file.title}
                                className="w-full max-h-[80vh] object-contain"
                            />
                            <h2 className="mt-2 text-center font-semibold text-lg text-gray-800">
                                {file.title}
                            </h2>
                        </div>
                    ) : (

                        <div className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 max-h-[83vh]">
                            <video
                                src={file.fileUrl.startsWith("uploads/")
                                    ? `${baseurl}/${file.fileUrl}`
                                    : file.fileUrl}
                                className="w-full max-h-[80vh] object-cover  cursor-pointer "
                                controls
                                
                            />
                            <div className=" w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs">
                                {file.title}
                            </div>
                        </div>
                    )
                }
                <button
                    onClick={onClose}
                    className="mt-4 block mx-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default EnlargedImageModel

