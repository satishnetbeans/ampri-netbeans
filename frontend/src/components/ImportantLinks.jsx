// @ts-nocheck
import React, { useState, useEffect } from "react";

import { fetchImportantLink } from "../api/axios";


import EditImportantLinks from "./Admin Edits/links edit/EditImportantLinks";

const ImportantLinks = ({ isAdmin, userRole }) => {


  const [links, setImportantLinks] = useState([]);

  const [isTogggleOpen, setisTogggleOpen] = useState(false);

  useEffect(() => {
    const fetchImportantLinks = async () => {
      try {
        const response = await fetchImportantLink();
        console.log("Important Links fetched:", response);
        if (response.data) {
          setImportantLinks(response.data);
        }
      } catch (error) {
        console.error("Error fetching important links:", error);
      }
    }

    fetchImportantLinks();
  }, [])


  return (
    <section className="w-[30%] h-full  max-[600px]:w-full max-[600px]:border-none max-[600px]:mt-6 flex items-center justify-center ">
      <div className="border border-gray-300 w-[95%] h-full pb-2 ml-2 max-[600px]:ml-0 rounded-md relative ">
        {isAdmin && <button onClick={() => setisTogggleOpen(true)}

          className='absolute top-2 right-5 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit</button>}
        <h2 className="text-center font-semibold text-xl py-3">
          <span className="inline-block bg-white px-4 text-[#004080] text-2xl font-bold mb-2">Important Links</span>
        </h2>

        <div className="overflow-y-auto ultra-thin-scrollbar h-[70%] w-full flex flex-col items-center gap-2 max-[600px]:h-auto max-[600px]:px-4 max-[600px]:flex-row">
          {links.map((link, i) => (
            <a
              key={i}
              target="_blank"
              href={`${(link.url.startsWith("https:") || link.url.startsWith("http:")) ? link.url : userRole ? `/${userRole}${link.url}` : link.url}`}
              className="bg-[#004080] hover:bg-[#004c98] text-white px-6 py-1 rounded-lg shadow-md flex items-center justify-center w-[70%] max-[600px]:w-full"
            >
              <div className="overflow-x-auto  whitespace-nowrap max-w-full scrollbar-hide">

                {/* <span className="text-white mr-1.5 shrink-0">{link.icon}</span> */}

                {link.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      {isTogggleOpen && <EditImportantLinks AllLinks={links} setisTogggleOpen={setisTogggleOpen} />}
    </section>
  );
};

export default ImportantLinks;

