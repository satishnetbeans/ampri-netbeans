

import React, { useEffect, useState } from "react";
import { useUserDevice } from "../../context/UserDeviceContext";
import { useSiteData } from "../../context/siteDataContext";

import { useUserData } from "../../context/UserDataContext";
import StructureRoleRoute from "../../utils/StructureRoleRoute";

import SocialIcons from "../media components/SocialIcons";

export default function Footer({ isAdmin }) {
  const { userDevice } = useUserDevice();
  const { SiteData } = useSiteData();

  const { UserData } = useUserData();

  const [role, setrole] = useState(null);


  useEffect(() => {
    if (UserData) {
      const rl = StructureRoleRoute(UserData);
      rl && setrole(rl);
    }

  }, [UserData]);
  return (
    <footer className="bg-white border-t-2 border-[#004080] text-[#004080]   py-3 text-sm  w-full">
      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className=" mb-2 font-[700] text-[17px]">AMPRI in Media</h3>
          <ul className="space-y-1 text-black text-[14px]">
            <li className="cursor-pointer hover:underline">
              <a href={`${role ? `/${role}/Daily-News-Papers` : `/Daily-News-Papers`}`}>CSIR-AMPRI in Daily News Papers</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a target="_main" href={`https://ampri.res.in/en/wp-content/uploads/2018/08/CSIR-Ampri-In-news.pdf`}>CSIR-AMPRI in News: A Newsletter</a>

            </li>
            <li className="cursor-pointer hover:underline">
              <a target="_main" href={`https://ampri.res.in/en/wp-content/uploads/2018/09/Spoan-2018.pdf`}>Hindi Magazine: Sopan</a>

            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-[700] text-[17px]">Others</h3>
          <ul className="space-y-1 text-black text-[14px]">
            <li className="cursor-pointer hover:underline"
            >
              <a href={`${role ? `/${role}/Website-Policy` : `/Website-Policy`}`}>Website Policy</a>

            </li>
            <li className="cursor-pointer hover:underline">
              <a href={`${role ? `/${role}/Disclaimer` : `/Disclaimer`}`}>Disclaimer</a>

            </li>
            <li className="cursor-pointer hover:underline">
              <a href={`${role ? `/${role}/Web-Policy-Manager` : `/Web-Policy-Manager`}`}>Web Policy Manager</a>

            </li>
            <li className="cursor-pointer hover:underline">
              <a href={`${role ? `/${role}/Annual-Property-Return` : `/Annual-Property-Return`}`}>Annual Property Return</a>

            </li>
            <li className="cursor-pointer hover:underline">
              <a href={`${role ? `/${role}/Sitemap` : `/Sitemap`}`}>Sitemap</a>

            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-[700] text-[17px]">You are Visitor No.</h3>
          <p className="text-green-400 font-mono text-lg bg-black inline-block px-2 py-1 rounded">{SiteData && SiteData.totalUsers}</p>
          <p className="mt-2 text-gray-600"><span className=" text-black font-semibold">Your IP :</span> {userDevice && userDevice.ip}</p>
          <p className="text-red-500 text-[12px]">Will Be Monitored For Security Purpose</p>

          <p className="mt-2 text-blue-700 font-bold "><span className=" text-gray-900 font-semibold">Last Modified : </span>{SiteData && SiteData.lastModified}</p>
        </div>
        <div className="text-center mt-6 pt-4 flex items-baseline">
          <div className=" w-auto flex items-center shadow py-2 px-3 gap-1.5 rounded-lg">
            <span className="text-[#004080] font-bold text-xl whitespace-nowrap">Be Social : </span>
            <SocialIcons isAdmin={isAdmin} />

          </div>

        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-[#004080]">CSIR-AMPRI 2018, Rights Reserved, Design & Developed By: CSIR-AMPRI Bhopal</div>
    </footer>
  );
}
