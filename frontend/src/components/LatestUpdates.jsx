import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 max-w-3xl w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.fileUrl}
          alt={item.title}
          className="w-full max-h-[80vh] object-contain"
        />
        <h2 className="mt-2 text-center font-semibold text-lg text-gray-800">
          {item.title}
        </h2>
        <button
          onClick={onClose}
          className="mt-4 block mx-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ImageGrid = ({ items, title, onImageClick }) => {
  return (
    <div className="flex flex-col items-center w-full h-full max-[500px]:h-auto border border-gray-300 p-2 rounded ">
      <h3 className="text-[#004080] font-semibold text-center text-[18px] mb-4 max-[500px]:text-base">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-3 w-[95%] h-[280px] overflow-y-auto p-2 rounded-lg max-[500px]:w-[95%] max-[500px]:grid-cols-1 max-[500px]:h-[200px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => onImageClick(item)}
          >
            <img
              src={item.fileUrl}
              alt={item.title}
              className="w-full h-[120px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-1 text-center max-[500px]:text-xs">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LatestUpdates = ({ recentDevelopments, foundationDay, isAdmin }) => {
  const navigate = useNavigate();
  const [enlargedItem, setEnlargedItem] = useState(null);

  const handleImageClick = (item) => setEnlargedItem(item);
  const handleCloseModal = () => setEnlargedItem(null);

  return (
    <section className="w-[100%] h-full flex items-center justify-center  max-[500px]:w-full max-[500px]:h-auto max-[500px]:mt-2">
      <div className=" h-full w-[97.5%] rounded-md relative">
        {isAdmin && (
          <button
            onClick={() => navigate("/admin/edituploads/Recent Developments")}
            className="absolute top-[10%] left-[19%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600"
          >
            Edit Recent Developments
          </button>
        )}

        {isAdmin && (
          <button
            onClick={() => navigate("/admin/edituploads/foundation day")}
            className="absolute top-[10%] right-[17%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600"
          >
            Edit Technology & foundation day
          </button>
        )}

        <h2 className="text-center font-semibold text-xl mb-5 py-3 max-[500px]:text-lg max-[500px]:mb-3">
          <span className="inline-block bg-white px-4 text-[#004080] text-2xl font-bold">
            Latest Updates / News
          </span>
        </h2>

        <div className="w-full h-[80%] grid grid-cols-2 gap-4 max-[500px]:grid-cols-1 max-[500px]:gap-3 max-[500px]:h-auto px-4">
          {recentDevelopments?.length > 0 && (
            <ImageGrid
              items={recentDevelopments}
              title="Recent Developments"
              onImageClick={handleImageClick}
            />
          )}
          {foundationDay?.length > 0 && (
            <ImageGrid
              items={foundationDay}
              title="National Technology and Foundation Day"
              onImageClick={handleImageClick}
            />
          )}
        </div>

        <ImageModal item={enlargedItem} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default LatestUpdates;




