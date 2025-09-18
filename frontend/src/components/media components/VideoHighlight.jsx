import { useEffect, useState } from "react";

const VideoHighlight = ({ updates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!updates || updates.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 3000); // 3s per item
    return () => clearInterval(interval);
  }, [updates]);

  if (!updates || updates.length === 0) return null;

  const current = updates[currentIndex];

  return (
    <div className="max-w-[320px] mx-auto relative group">
      {current.fileType === "video" ? (
        <video
          key={current.fileUrl}
          controls
          className="rounded-xl shadow-lg w-full max-h-[200px] object-fill"
          src={current.fileUrl}
        />
      ) : (
        <img
          key={current.fileUrl}
          src={current.fileUrl}
          alt={current.title}
          className="rounded-xl shadow-lg w-full max-h-[200px] object-fill"
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
    </div>
  );
};

export default VideoHighlight;
