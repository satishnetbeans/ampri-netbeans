// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadsRender from "./ui/uploads/UploadsRender";
import EnlargedImageModel from "./ui/uploads/EnlargedImageModel";

const FacilitiesCarousel = ({ facilities, isAdmin ,userRole }) => {
  const navigate = useNavigate();

  const [modalItem, setModalItem] = useState(null);

  return (
    <section className="w-[60%] h-full max-[600px]:w-full max-[600px]:h-auto flex items-center justify-center">
      <div className="border border-gray-300 h-[94%] w-[96%] p-2 mt-3 rounded-md">
        <div className="h-full w-full flex flex-col items-center relative">
          {isAdmin && (
            <button
              onClick={() => navigate(`${userRole && `/${userRole}/edituploads/facility`}`)}
              className="absolute top-2 right-[15%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600 max-[600px]:right-[29%] max-[600px]:-top-6"
            >
              Edit facilities
            </button>
          )}

          <h2 className="text-center font-semibold text-xl mb-3 py-3 max-[600px]:text-base max-[600px]:mb-2 max-[600px]:py-2">
            <span className="inline-block px-4 text-[#004080] text-2xl font-bold max-[600px]:px-2">
              FACILITY AVAILABLE
            </span>
          </h2>

          {/* Grid (Scrollable if overflow) */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 w-full  overflow-auto ultra-thin-scrollbar px-2
                       max-[600px]:grid-cols-2 max-[600px]:w-full max-[600px]:h-auto max-[600px]:gap-3 "
          >
            {console.log("facilities : ", facilities)}
            {facilities.map((f) => (

              <UploadsRender key={f._id} isEnlarged={Boolean(modalItem)} file={f} onImageClick={() => setModalItem(f)} />

            ))}
          </div>
        </div>

        {/* Modal */}
        <EnlargedImageModel file={modalItem} onClose={() => setModalItem(null)} />

      </div>
    </section>
  );
};

export default FacilitiesCarousel;
