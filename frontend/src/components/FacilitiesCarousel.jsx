// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacilitiesCarousel = ({ facilities, isAdmin }) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  return (
    <section className="w-[60%] h-full max-[600px]:w-full max-[600px]:h-auto flex items-center justify-center">
      <div className="border border-gray-300 h-[94%] w-[96%] p-2 mt-3 rounded-md">
        <div className="h-full w-full flex flex-col items-center relative">
          {isAdmin && (
            <button
              onClick={() => navigate("/admin/edituploads/facility")}
              className="absolute top-2 right-[15%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600"
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
            {facilities.map((f, i) => (
              <div key={i} className="relative w-full h-[18vh]  shadow-md rounded-xl group max-[600px]:h-[200px] ">
                <div

                  className="relative w-full h-full shadow-md rounded-xl overflow-hidden group cursor-pointer max-[600px]:h-[200px]"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalItem(f);
                  }}
                >
                  <img
                    src={f.fileUrl}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-5 bg-black bg-opacity-70 text-white text-sm px-3 py-1 w-full text-center font-medium max-[600px]:text-xs rounded-b-xl">
                  {f.title}
                </div>
              </div>

            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && modalItem && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-2">
            <div className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto  ultra-thin-scrollbar max-[600px]:p-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setModalItem(null);
                }}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 text-xl flex items-center justify-center hover:bg-red-700 transition max-[600px]:w-7 max-[600px]:h-7 max-[600px]:text-base"
              >
                &times;
              </button>
              <img
                src={modalItem.fileUrl}
                alt={modalItem.title}
                className="w-full max-h-[80vh] object-contain rounded max-[600px]:max-h-[60vh]"
              />
              <p className="text-center mt-2 font-semibold text-lg text-gray-800 max-[600px]:text-base">
                {modalItem.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesCarousel;
