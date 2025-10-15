import { useUserDevice } from "../../context/UserDeviceContext";
import { useSiteData } from "../../context/siteDataContext";

export default function Footer({ isAdmin }) {
  const { userDevice } = useUserDevice();
  const { SiteData } = useSiteData();
  return (
    <footer className="bg-white border-t-2 border-[#004080] text-[#004080]   py-3 text-sm  w-full">
      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className=" mb-2 font-[700] text-[17px]">AMPRI in Media</h3>
          <ul className="space-y-1 text-black text-[14px]">
            <li className="cursor-pointer hover:underline">CSIR-AMPRI in Daily News Papers</li>
            <li className="cursor-pointer hover:underline">CSIR-AMPRI in News: A Newsletter</li>
            <li className="cursor-pointer hover:underline">Hindi Magazine: Sopan</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-[700] text-[17px]">Others</h3>
          <ul className="space-y-1 text-black text-[14px]">
            <li className="cursor-pointer hover:underline">Website Policy</li>
            <li className="cursor-pointer hover:underline">Disclaimer</li>
            <li className="cursor-pointer hover:underline">Web Policy Manager</li>
            <li className="cursor-pointer hover:underline">Annual Property Return</li>
            <li className="cursor-pointer hover:underline">Sitemap</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-[700] text-[17px]">You are Visitor No.</h3>
          <p className="text-green-400 font-mono text-lg bg-black inline-block px-2 py-1 rounded">{SiteData && SiteData.totalUsers}</p>
          <p className="mt-2 text-gray-600"><span className=" text-black font-semibold">Your IP :</span> {userDevice && userDevice.ip}</p>
          <p className="text-red-500 text-[12px]">Will Be Monitored For Security Purpose</p>

          <p className="mt-2 text-blue-700 font-bold "><span className=" text-gray-900 font-semibold">Last Modified : </span>{SiteData && SiteData.lastModified}</p>
        </div>
        <div className="text-center mt-6 pt-4 flex items-baseline ">
          <span className="text-[#004080] font-bold text-xl">Be Social:</span>
          <span className="ml-2 text-gray-400 font-bold cursor-pointer flex items-center"><span className="text-3xl">📶</span>
            Feed</span>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-[#004080]">CSIR-AMPRI 2018, Rights Reserved, Design & Developed By: CSIR-AMPRI Bhopal</div>
    </footer>
  );
}
