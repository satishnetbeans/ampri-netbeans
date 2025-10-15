// @ts-nocheck
import { useNavigate } from "react-router-dom";

const MediaGalleryButtons = ({ isAdmin ,userRole}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-8 w-full h-[80%]">
      <button
        onClick={() =>
          userRole ? navigate(`${userRole && `/${userRole}/gallery`}`) : navigate("/gallery")
        }
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300 cursor-pointer"
      >
        📸 Photo Gallery
      </button>

      <button
        onClick={() =>
          userRole ? navigate(`${userRole && `/${userRole}/video-gallery`}`) : navigate("/video-gallery")
        }

        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300 flex items-center gap-2 cursor-pointer"
      >
        📽️ Video Gallery
      </button>
    </div>
  );
};

export default MediaGalleryButtons;

