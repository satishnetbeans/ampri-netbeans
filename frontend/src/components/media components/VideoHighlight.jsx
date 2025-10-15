// @ts-nocheck
import { useEffect, useState, useRef } from "react";

const VideoHighlight = ({ updates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const smallVideoRef = useRef(null);
  const enlargedVideoRef = useRef(null);

  useEffect(() => {
    if (!updates || updates.length === 0) return;

    if (!enlarged && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [updates, enlarged, isHovered]);

  if (!updates || updates.length === 0) return null;

  const current = updates[currentIndex];

  const handleOpenEnlarged = () => {
    // pause small video if it exists
    if (smallVideoRef.current) {
      smallVideoRef.current.pause();
    }
    setEnlarged(true);
  };

  const handleCloseEnlarged = () => {
    // pause enlarged video if it exists
    if (enlargedVideoRef.current) {
      enlargedVideoRef.current.pause();
    }
    setEnlarged(false);
  };

  return (
    <div
      className="max-w-[320px] mx-auto relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {current.fileType === "video" ? (
        <video
          key={current.fileUrl}
          ref={smallVideoRef}
          controls={!enlarged} // only show controls when not enlarged
          className="rounded-xl shadow-lg w-full max-h-[200px] object-fill cursor-pointer transition-transform duration-500 group-hover:scale-105"
          src={current.fileUrl}
          onClick={handleOpenEnlarged}
        />
      ) : (
        <img
          key={current.fileUrl}
          src={current.fileUrl}
          alt={current.title}
          className="rounded-xl shadow-lg w-full max-h-[200px] object-fill cursor-pointer transition-transform duration-500 group-hover:scale-105"
          onClick={handleOpenEnlarged}
        />
      )}

      <p className="text-sm mt-2 text-gray-900 font-semibold text-center">
        {current.title?.replace(/-/g, " ")}
      </p>

      {/* Indicators */}
      <div className="flex justify-center mt-2 space-x-1">
        {updates.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Enlarged Overlay */}
      {enlarged && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative">
            {current.fileType === "video" ? (
              <video
                ref={enlargedVideoRef}
                src={current.fileUrl}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={current.fileUrl}
                alt={current.title}
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
              />
            )}
            <button
              onClick={handleCloseEnlarged}
              className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-300"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoHighlight;

