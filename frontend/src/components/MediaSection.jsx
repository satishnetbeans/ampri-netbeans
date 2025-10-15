// @ts-nocheck
import MediaGalleryButtons from "./media components/MediaGalleryButtons";
import PrintMediaCarousel from "./media components/PrintMediaCarousel";
import VideoHighlight from "./media components/VideoHighlight";

import { useNavigate } from "react-router-dom";


const MediaSection = ({ printMedia, updates, isAdmin ,userRole }) => {
  const navigate = useNavigate()
  return (
    <div className="w-[55%] h-full pt-3 px-4 max-[600px]:px-2 max-[600px]:w-full flex items-center justify-center">
      <div className="border border-gray-300 flex flex-col items-center h-[96%] w-[98%] rounded-md relative p-2">
        <h2 className="text-center mb-3 text-[#004080] text-2xl font-bold mt-3"> Media</h2>


        {isAdmin && <button onClick={() => navigate(`${userRole && `/${userRole}/edituploads/Print Media`}`)} className='absolute bottom-5 left-[4%] z-20 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600 max-[600px]:bottom-[73.3%] max-[600px]:left-[65%]'>Edit print media</button>}

        {isAdmin && <button onClick={() => navigate(`${userRole && `/${userRole}/edituploads/updates @`}`)} className='absolute bottom-5 right-[4%] z-20 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-md hover:bg-blue-600 max-[600px]:bottom-[31.5%] max-[600px]:right-0'>Edit updates @</button>}


        <div className="text-center max-[6
        00px]:order-1 mt-3 mb-2">
          <MediaGalleryButtons isAdmin={isAdmin} userRole={userRole} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mt-2 h-[85%] max-[500px]:h-auto max-[500px]:flex max-[500px]:flex-col ">

          {/* Center: Print Media */}
          <div className="text-center max-[600px]:order-2">
            <h3 className="text-[#004080] font-semibold underline mb-6 underline-offset-6">AMPRI in Print Media</h3>
            <PrintMediaCarousel printMedia={printMedia} />
          </div>

          {/* Right: Video Gallery */}
          <div className="text-center max-[600px]:order-3">
            <h3 className="text-[#004080] font-semibold underline mb-6 underline-offset-6">Updates @ Video Gallery @ CSIR-AMPRI</h3>
            <VideoHighlight updates={updates} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MediaSection;
