// @ts-nocheck
import React, { useRef , useEffect} from 'react'
import checkBaseURL from '../../../utils/CheckBaseUrl'


const UploadsRender = ({ file, onImageClick, isEnlarged }) => {
  const baseurl = checkBaseURL()

  const videoRef = useRef(null)

  useEffect(() => {

    if (videoRef.current) {
      if (isEnlarged) {
        console.log("Pausing main video...");
        videoRef.current.pause();
      }
    }

  }, [isEnlarged]);

  return (
    <div>
      {
        file.fileType === "image" ? (
          <div
            key={file._id}
            className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 h-[120px]"
            onClick={() => onImageClick(file)}
          >
            <img
              src={file.fileUrl}
              alt={file.title}
              className="w-full h-[120px] object-fill"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs">
              {file.title}
            </div>
          </div>
        ) : (

          <div className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 h-[120px]">
            <video
              ref={videoRef}
              src={file.fileUrl.startsWith("uploads/")
                ? `${baseurl}/${file.fileUrl}`
                : file.fileUrl}
              className="relative z-10 w-full h-full object-cover cursor-pointer "

              controls={!isEnlarged}
              onClick={() => onImageClick(file)}
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs">
              {file.title}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UploadsRender