// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import checkBaseURL from "../../utils/CheckBaseUrl";

const baseurl = checkBaseURL();

const PrintMediaCarousel = ({ printMedia }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef(null)
 

  useEffect(() => {

    if (!enlarged && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % printMedia.length);
      }, 1500);
      return () => clearInterval(interval);
    }

    if (videoRef.current) {
      if (enlarged) {
        console.log("Pausing main video...");
        videoRef.current.pause();
      } 
    }

  }, [printMedia.length, enlarged, isHovered]);

  if (!printMedia || printMedia.length === 0) return null;
  const current = printMedia[currentIndex];

  return (
    <div
      className="max-w-[320px] mx-auto relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {current?.fileType === "image" ?
        <div><img
          key={current.fileUrl}
          src={current.fileUrl}
          alt={current.title}
          className="rounded-xl shadow-lg w-full max-h-[200px] object-fill cursor-pointer transition-transform duration-500 group-hover:scale-105"
          onClick={() => setEnlarged(true)}
        />
          <p className="text-sm mt-2 text-gray-900 font-semibold text-center">
            {current.title.replace(/-/g, " ")}
          </p></div>
        :
        <div>
          <video
            ref={videoRef}
            src={current.fileUrl.startsWith("uploads/")
              ? `${baseurl}/${current.fileUrl}`
              : current.fileUrl}
            className="relative z-10 w-full h-full object-cover cursor-pointer "
            controls
            onClick={() => setEnlarged(true)}

          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs mb-3">
            {current.title}
          </div>
        </div>}

      <div className="flex justify-center mt-2 space-x-1">
        {printMedia.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
          />
        ))}
      </div>

      {enlarged && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center pt-8">
          {console.log(current.fileUrl)}
          {current?.fileType === "image" ?
            <img
              src={current.fileUrl}
              alt={current.title}
              className="w-[80vw] max-h-[90vh] rounded-lg shadow-2xl"
            /> :
            <div>
              <video
                src={current.fileUrl.startsWith("uploads/")
                  ? `${baseurl}/${current.fileUrl}`
                  : current.fileUrl}
                className="relative z-10 w-[80vw] max-h-[90vh] object-cover cursor-pointer "
                controls

              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs mb-3">
                {current.title}
              </div>
            </div>
          }

          <div className="relative">

            <button
              onClick={() => {
                setEnlarged(false) 
                setIsHovered(false);}}
              className="absolute -top-4 -right-4 z-20 bg-white text-black p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-300"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintMediaCarousel;
