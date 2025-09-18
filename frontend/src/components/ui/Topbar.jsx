import React from "react";
import SocialIcons from "../media components/SocialIcons";
import handleTranslate from "../../utils/changeLanguage";

const Topbar = ({ isAdmin }) => {

    return (

        <nav className="w-full bg-[#e6f7ff] border-b-[1px] border-gray-300 text-gray-900  flex justify-between items-center px-20 max-[600px]:flex-col max-[600px]:items-center max-[600px]:px-4 max-[600px]:gap-2">

            <div className={`flex flex-wrap max-[600px]:grid  max-[600px]:grid-cols-2 max-[600px]:w-full text-[12px] font-semibold`}>
                <a href="/events" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">Events</a>
                <a href="/career" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">Career@AMPRI</a>
                <a href="/RTI" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">RTI</a>
                <a href="https://email.gov.in/" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">WebMail</a>
                <a href="/officeMemorandum" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">Office Memorandum</a>
                <a href="/SRA" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">Screen Reader Access</a>
            </div>

            <div className='notranslate'>

                <button onClick={() => handleTranslate("hi")} className="cursor-pointer  rounded-md text-blue-700 hover:underline font-semibold px-4 py-1 ">
                    हिन्दी
                </button>

                <button onClick={() => handleTranslate("en")} className="cursor-pointer  rounded-md text-blue-700 hover:underline font-semibold px-4 py-1 ">
                    English
                </button>

            </div>

            <SocialIcons isAdmin={isAdmin} />

        </nav>

    );

};

export default Topbar;
