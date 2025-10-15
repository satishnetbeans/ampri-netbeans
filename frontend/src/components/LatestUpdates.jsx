// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadsRender from "./ui/uploads/UploadsRender";
import EnlargedImageModel from "./ui/uploads/EnlargedImageModel";


const ImageGrid = ({ items, title, onImageClick ,enlargedItem }) => {
  const isEnlarged = Boolean(enlargedItem);
  console.log("isEnlarged : ", isEnlarged)
  return (
    <div className="flex flex-col items-center w-full h-full max-[500px]:h-auto border border-gray-300 p-2 rounded ">
      <h3 className="text-[#004080] font-semibold text-center text-[18px] mb-4 max-[500px]:text-base">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-3 w-[95%] h-[286px] overflow-y-auto ultra-thin-scrollbar p-2 rounded-lg max-[600px]:w-[95%]  max-[600px]:grid-cols-1 max-[600px]:h-[200px]">
        {items.map((item) => (
          <UploadsRender key={item._id} isEnlarged={isEnlarged} file={item} onImageClick={onImageClick} />
        ))}
      </div>
    </div>
  );
};

const LatestUpdates = ({ recentDevelopments, foundationDay, isAdmin, userRole }) => {
  const navigate = useNavigate();
  const [enlargedItem, setEnlargedItem] = useState(null);

  const handleImageClick = (item) => setEnlargedItem(item);
  const handleCloseModal = () => setEnlargedItem(null);

  console.log("enlargedItem : ", enlargedItem)

  return (
    <section className="w-[100%] h-full flex items-center justify-center  max-[600px]:w-full max-[600px]:h-auto max-[600px]:mt-2">
      <div className=" h-full w-[97.5%] rounded-md relative">
        {isAdmin && (
          <button
            onClick={() => navigate(`${userRole && `/${userRole}/edituploads/Recent Developments`}`)}
            className="absolute top-[10%] left-[19%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600 max-[600px]:top-[8.5%]"
          >
            Edit Recent Developments
          </button>
        )}

        {isAdmin && (
          <button
            onClick={() => navigate(`${userRole && `/${userRole}/edituploads/foundation day`}`)}
            className="absolute top-[10%] right-[17%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600 max-[600px]:top-[98.5%]"
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
              enlargedItem={enlargedItem}
              items={recentDevelopments}
              title="Recent Developments"
              onImageClick={handleImageClick}
            />
          )}
          {foundationDay?.length > 0 && (
            <ImageGrid
              enlargedItem={enlargedItem}
              items={foundationDay}
              title="National Technology and Foundation Day"
              onImageClick={handleImageClick}
            />
          )}
        </div>

        <EnlargedImageModel file={enlargedItem} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default LatestUpdates;




