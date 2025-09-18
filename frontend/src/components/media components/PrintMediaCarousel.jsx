import { useEffect, useState } from "react";

const PrintMediaCarousel = ({ printMedia }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    if (!enlarged) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % printMedia.length
        );
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [printMedia.length, enlarged]);

  if (!printMedia || printMedia.length === 0) return null;
  const current = printMedia[currentIndex];

  return (
    <div className="max-w-[320px] mx-auto relative  group">
      <img
        key={current.fileUrl}
        src={current.fileUrl}
        alt={current.title}
        className="rounded-xl shadow-lg w-full max-h-[200px] object-fill cursor-pointer transition-transform duration-500 group-hover:scale-105"
        onClick={() => setEnlarged(true)}
      />
      <p className="text-sm mt-2 text-gray-900 font-semibold text-center">
        {current.title.replace(/-/g, " ")}
      </p>
      <div className="flex justify-center mt-2 space-x-1">
        {printMedia.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {enlarged && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative">
            <img
              src={current.fileUrl}
              alt={current.title}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setEnlarged(false)}
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
export default PrintMediaCarousel;


