import React, { useState } from "react";

import EditExternalLinks from "./Admin Edits/links edit/EditExternalLinks";
import checkBaseURL from "../utils/CheckBaseUrl";

export default function ExternalLinks({ isAdmin, externalLinks, userRole }) {

  const baseUrl = checkBaseURL();

  const [isTogggleOpen, setisTogggleOpen] = useState(false);

  return (
    <section className="w-[98%] h-[28%] flex items-center overflow-hidden border border-gray-300 max-[500px]:flex-col max-[500px]:h-auto max-[500px]:mt-4 px-2 rounded-md relative">

      {isAdmin && <button
        onClick={() => setisTogggleOpen(true)}

        className='absolute top-10 left-[20%] z-20 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-lg hover:bg-blue-600'>Edit</button>}

      <h2 className="flex justify-center items-center  py-3 h-[70%] md:w-[19%] max-[1024]: text-white max-[500px]:w-full max-[500px]:text-base max-[500px]:py-2 max-[500px]:mt-2 bg-[#004080] text-2xl font-bold whitespace-nowrap px-2 rounded-md">
        External Links
      </h2>

      <div className="relative w-full h-[70%] overflow-hidden scroll-container max-[500px]:h-[100px]">
        <div className="animate-scroll flex gap-10 h-full pointer-events-auto px-2 max-[500px]:gap-4 max-[500px]:pt-5">
          {externalLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              className="inline-block pointer-events-auto min-w-0 shrink-0"
            >
              <img
                src={item.img.startsWith("uploads/") ? `${baseUrl}/${item.img}` : item.img}
                alt={item.alt}
                className="rounded-lg w-[120px] h-[80px] max-[500px]:w-[100px] max-[500px]:h-[60px] hover:scale-105 transition shadow-xl cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>

      {isTogggleOpen && <EditExternalLinks AllLinks={externalLinks} setisTogggleOpen={setisTogggleOpen} />}
    </section>
  );
}

