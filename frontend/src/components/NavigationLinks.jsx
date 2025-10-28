// @ts-nocheck
import ExternalLinks from "./ExternalLinks";

import React, { useState, useEffect } from "react";

import EditNavigationLinks from "./Admin Edits/links edit/EditNavigationLinks";

import { fetchNavigationLink, fetchExternalLink } from "../api/axios";

const NavigationLinks = ({ isAdmin, userRole }) => {

  const [linkData, setNavigationLinks] = useState([]);
  const [externalLinks, setexternalLinks] = useState([]);

  const [isTogggleOpen, setisTogggleOpen] = useState(false);

  useEffect(() => {


    const fetchNavigation = async () => {
      try {
        const response = await fetchNavigationLink();
        console.log("Navigation Links fetched:", response);
        if (response.data) {
          setNavigationLinks(response.data);
        }
      } catch (error) {
        console.error("Error fetching important links:", error);
      }
    }

    const fetchExternal = async () => {
      try {
        const response = await fetchExternalLink();
        console.log("External Links fetched:", response);
        if (response.data) {
          setexternalLinks(response.data);
        }
      } catch (error) {
        console.error("Error fetching important links:", error);
      }
    }

    fetchNavigation();
    fetchExternal();
  }, [])

  return (
    <div className=" w-[70%] h-full max-[600px]:px-3 max-[600px]:py-3 max-[600px]:w-full flex flex-col justify-between">
      <div className="border border-gray-300 p-2 rounded-md flex flex-col w-[98%] h-[70%]">
        <h2 className="text-center mb-4 max-[600px]:text-lg max-[600px]:mb-4 relative text-[#004080] text-2xl font-bold">
          Navigation Links

          {isAdmin && <button onClick={() => setisTogggleOpen(true)} className='absolute top-0 right-[15%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit</button>}

        </h2>
        <div className="flex flex-nowrap overflow-x-auto overflow-y-auto gap-7 text-sm text-gray-800 ultra-thin-scrollbar px-2  h-full">

          {linkData.map((section) => (
            <div key={section.title}>
              <h4
                className="text-lg font-semibold text-[#004080] mb-2 
               max-[600px]:text-base max-[600px]:mb-1 
               whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar"
              >
                {section.title}
              </h4>


              <ul className="space-y-1 text-red-400 ">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    <a target="_blank" href={`${link.url.startsWith("https:")?link.url : userRole?`/${userRole}${link.url}` : link.url }`} className="whitespace-nowrap">{link.name}</a>

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {isTogggleOpen && <EditNavigationLinks AllLinks={linkData} setisTogggleOpen={setisTogggleOpen} />}

      <ExternalLinks isAdmin={isAdmin} externalLinks={externalLinks} userRole={userRole} />
    </div>
  );

}

export default NavigationLinks;
