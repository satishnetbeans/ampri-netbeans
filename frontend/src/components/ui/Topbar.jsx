// @ts-nocheck
import React , {useEffect , useState} from "react";
import SocialIcons from "../media components/SocialIcons";
import handleTranslate from "../../utils/changeLanguage";
import { useNavigate } from "react-router-dom";

import { handleLogout } from "../../api/axiosAPIs";
import { Ruler } from "lucide-react";

import { useUserData } from "../../context/UserDataContext";
import StructureRoleRoute from "../../utils/StructureRoleRoute";


const Topbar = ({ isAdmin, setIsAdmin }) => {
    const navigate = useNavigate();

    const { UserData } = useUserData();

    const [role, setrole] = useState(null)

    const handleLogOut = async () => {
        try {
            const result = await handleLogout(); // calls backend logout
            if (result.success) {
                alert("Logged out successfully");
                navigate("/"); // Redirect to homepage or login page
                window.location.reload(); // Force reload to reset state
                console.log("Logout result : ", result);
                setIsAdmin(false); // ✅ remove admin status
            } else {
                console.error("Logout failed:", result.message);
            }
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    useEffect(() => {
    
        if (UserData) {
          const rl =StructureRoleRoute(UserData)
          rl && setrole(rl)
        } 
      }, [UserData]);

    return (
        <nav className="w-full bg-[#e6f7ff] border-b-[1px] border-gray-300 text-gray-900 flex justify-between items-center px-20 max-[600px]:flex-col max-[600px]:items-center max-[600px]:px-4 max-[600px]:gap-2">
            <div className="flex flex-wrap max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:w-full text-[12px] font-semibold">
                <a href={role ? `/${role}/events`:`/events`} className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    Events
                </a>
                <a href={role ? `/${role}/career`:`/career`} className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    Career@AMPRI
                </a>
                <a href={role ? `/${role}/RTI`:`/RTI`} className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    RTI
                </a>
                <a href="https://email.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    WebMail
                </a>
                <a href={role ? `/${role}/officeMemorandum` :`/officeMemorandum`} className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    Office Memorandum
                </a>
                <a href={role ? `/${role}/SRA` :`/SRA`} className="hover:text-gray-600 pr-5 pl-3 cursor-pointer max-[600px]:p-1">
                    Screen Reader Access
                </a>
            </div>

            <div className="notranslate">
                <button
                    onClick={() => handleTranslate("hi")}
                    className="cursor-pointer rounded-md text-blue-700 hover:underline font-semibold px-4 py-1"
                >
                    हिन्दी
                </button>

                <button
                    onClick={() => handleTranslate("en")}
                    className="cursor-pointer rounded-md text-blue-700 hover:underline font-semibold px-4 py-1"
                >
                    English
                </button>

                {isAdmin && <button
                    onClick={handleLogOut}
                    className="cursor-pointer rounded-md text-blue-700 hover:underline font-semibold px-4 py-1"
                >
                    LogOut
                </button>}


            </div>

            <SocialIcons isAdmin={isAdmin} />
        </nav>
    );
};

export default Topbar;

