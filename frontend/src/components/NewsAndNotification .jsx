import React from "react";
import { useNavigate } from "react-router-dom";

const NewsAndNotification = ({ news, notifications, isAdmin }) => {
  const navigate = useNavigate()
  return (
    <div className="w-[100%] h-[100%]  px-5   mx-auto max-[600px]:w-[100%] max-[600px]:my-2 max-[600px]:px-0 max-[600px]:h-auto">

      <div className="rounded-md grid grid-cols-2 gap-4 h-full pt-1  ">
        {/* news */}
        <div className="border border-gray-300 p-3 rounded h-[50vh]  flex flex-col ">
          <div className="flex items-center justify-between text-[#004080] font-bold  rounded-t-lg ">
            <span className="mx-auto text-2xl font-bold mb-2">WHAT'S NEW</span>
            {isAdmin && <button onClick={() => navigate("/admin/editnews")} className=' border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit</button>}
          </div>

          <div className="overflow-y-auto ultra-thin-scrollbar  max-[500px]:max-h-[25vh] px-2 max-h-[90%] ">
            {news.length > 0 ? (
              news.map((note, i) => (
                <a
                  href={note.link || "#"}
                  key={i}
                  className="px-4 py-3    transition-all border-b-4 border-gray-200 last:border-none cursor-pointer hover:bg-blue-50 no-underline flex justify-between items-baseline"
                >
                  <div className="flex">
                    <span className='text-blue-950 text-2xl mr-1.5'>◆</span> <div className="text-black font-[400] text-[16px]">{note.title}</div>
                  </div>
                  <span
                    className="px-1 py-0.5 text-xs font-bold text-white  bg-red-600 animate-pulse rounded-xl"
                    title="New/Flash"
                  >
                    NEW
                  </span>

                </a>
              ))
            ) : (
              <div className="p-4 text-sm text-gray-600 text-center">
                No news available
              </div>
            )}
          </div>
        </div>

        {/* Notification List */}
        <div className="border border-gray-300 p-3 rounded h-[50vh]">
          <div className="flex items-center justify-between text-[#004080] font-bold  rounded-t-lg ">
            <span className="mx-auto text-2xl font-bold mb-2">Notifications</span>
            {isAdmin && <button onClick={() => navigate("/admin/editnotification")} className=' border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit</button>}
          </div>

          <div className="overflow-auto ultra-thin-scrollbar max-[500px]:max-h-[25vh] max-h-[90%] px-2">
            {notifications.length > 0 ? (
              notifications.map((note, i) => (
                <a
                  href={note.link || "#"}
                  key={i}
                  className="px-4 py-3 text-sm text-gray-800  transition-all border-b-4 border-gray-200 last:border-none cursor-pointer hover:bg-blue-50 no-underline flex justify-between items-baseline"
                >
                  <div className="flex">
                    <span className='text-blue-950 text-2xl mr-1.5'>◆</span> <div className="text-black font-[400] text-[16px]">{note.title}</div>
                  </div>
                  <span
                    className="px-1 py-0.5 text-xs font-bold text-white  bg-red-600 animate-pulse rounded-xl"
                    title="New/Flash"
                  >
                    NEW
                  </span>

                </a>
              ))
            ) : (
              <div className="p-4 text-sm text-gray-600 text-center">
                No new notifications
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsAndNotification;

