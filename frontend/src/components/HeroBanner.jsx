// @ts-nocheck

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({ banners, isAdmin }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const bannerVideoRef = useRef(null);
  const enlargedVideoRef = useRef(null);

  // Auto slide (pause on hover/touch)
  useEffect(() => {
    if (!isHovered && banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [banners, isHovered]);

  const handleImageClick = (item) => {
    // Pause banner video when enlarging
    if (bannerVideoRef.current) {
      bannerVideoRef.current.pause();
    }
    setEnlarged(item);
  };

  const closeEnlarged = () => {
    // Stop enlarged video when closing
    if (enlargedVideoRef.current) {
      enlargedVideoRef.current.pause();
    }
    setEnlarged(null);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    // ensure banner video stops if user switches slide
    if (bannerVideoRef.current) {
      bannerVideoRef.current.pause();
    }
  };

  const handleBannerPlay = () => {
    if (enlargedVideoRef.current) {
      enlargedVideoRef.current.pause();
    }
  };


  return (
    <div
      className="w-[100%] h-[51vh]  relative max-[600px]:basis-full max-[600px]:h-[30vh] max-[500px]:mt-2 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Banner Wrapper */}
      <div className="w-full h-[100%] flex items-center  justify-center rounded-xl overflow-hidden">

        {/* Foreground Banner */}
        {banners.length > 0 ? (
          banners[currentIndex].fileType === "image" ? (
            <div className="w-[100%]  h-full flex flex-col">
              <div className=" bg-gray-200 tracking-[0.024em] text-[#004080] text-center text-sm font-bold py-3">
                {banners[currentIndex].title}
                {/* edit option for admim */}
                {isAdmin && (
                  <button
                    onClick={() => navigate("/admin/edituploads/banner")}
                    className="absolute right-2 top-[5px] z-20 bg-blue-800 py-1 px-2 rounded-md cursor-pointer text-white font-semibold text-[16px]  border border-white hover:bg-blue-600"
                  >
                    Edit Banners
                  </button>
                )}
              </div>
              <div className="relative z-10 w-[100%] h-full">
                <img
                  src={banners[currentIndex].fileUrl}
                  alt="Banner"
                  className="relative z-10 w-full h-full object-fill cursor-pointer"
                  onClick={() => handleImageClick(banners[currentIndex])}
                />
              </div>

            </div>
          ) : (
            <div className="w-[100%]  h-full flex flex-col">
              <div className=" bg-gray-200 tracking-[0.024em] text-[#004080] text-center text-sm font-bold py-3 letter-spacing-6 relative ">
                {banners[currentIndex].title}
                {/* edit option for admim */}
                {isAdmin && (
                  <button
                    onClick={() => navigate("/admin/edituploads/banner")}
                    className="absolute right-2 top-[5px] z-20 bg-blue-800 py-1 px-2 rounded-md cursor-pointer text-white font-semibold text-[16px]  border border-white hover:bg-blue-600"
                  >
                    Edit Banners
                  </button>
                )}
              </div>
              <div className="h-full w-full pb-8">
                <video
                  ref={bannerVideoRef}
                  src={banners[currentIndex].fileUrl}
                  className="relative z-10 w-full h-full object-cover cursor-pointer "
                  controls={!enlarged}   // ✅ only show controls when not enlarged
                  onPlay={handleBannerPlay}
                  onClick={() => handleImageClick(banners[currentIndex])}
                />
              </div>
            </div>
          )
        ) : (
          <p className="relative z-10 text-white text-3xl">
            Loading banners...
          </p>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-3 mb-2 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
              ? "bg-blue-600 scale-125"
              : "bg-gray-400 hover:bg-blue-300"
              }`}
          />
        ))}
      </div>

      {/* Enlarged Modal */}
      {enlarged && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-5xl max-h-[90vh]">
            <button
              onClick={closeEnlarged}
              className="absolute -top-5 -right-5 bg-white text-black p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition"
            >
              <X size={24} />
            </button>
            {enlarged.fileType === "image" ? (
              <img
                src={enlarged.fileUrl}
                alt={enlarged.title}
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                ref={enlargedVideoRef}
                src={enlarged.fileUrl}
                controls
                autoPlay
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
