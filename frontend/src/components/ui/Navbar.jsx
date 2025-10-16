// @ts-nocheck
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

import { useUserData } from "../../context/UserDataContext";
import StructureRoleRoute from "../../utils/StructureRoleRoute";





const Navbar = ({ isAdmin }) => {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname;

  const { UserData } = useUserData();

  const [role, setrole] = useState(null);

  useEffect(() => {
    if (UserData) {
      const rl = StructureRoleRoute(UserData);
      rl && setrole(rl);
    }
  }, [UserData]);

  const [hovered, setHovered] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 0 });
  const handleEnter = (name, e) => {
    const rect = e.target.getBoundingClientRect();
    setDropdownPos({ left: rect.left + rect.width / 2 });
    setHovered(name);
  };

  const handleLeave = () => setHovered(null);

  const navItems = [
    {
      label: "HOME",
      href: "/",
    },

    {
      label: "ABOUT",
      href: `${role ? `/${role}/about` : `/about`}`,
      children: [
        { label: "About CSIR-AMPRI", href: `${role ? `/${role}/about` : `/about`}` },
        { label: "Organization", href: `${role ? `/${role}/Organization` : `/Organization`}` },
        { label: "Research Council", href: `${role ? `/${role}/research-council` : `/research-council`}` },
        { label: "Management Council", href: `${role ? `/${role}/management-council` : `/management-council`}` },
        { label: "Staff Information", href: `${role ? `/${role}/staff-page` : `/staff-page`}` },
        { label: "Former Directors", href: `${role ? `/${role}/former-directors` : `/former-directors`}` },
      ],
    },

    {
      label: "RESEARCH",
      href: "/",
      children: [
        { label: "Light Weight Materials Division (LWMD)", href: `${role ? `/${role}/research/LWMD` : `/research/LWMD`}` },
        { label: "Sustainable Construction Materials Division (SCMD)", href: `${role ? `/${role}/research/SCMD` : `/research/SCMD`}` },
        { label: "Functional Materials and Composites Division (FMCD)", href: `${role ? `/${role}/research/FMCD` : `/research/FMCD`}` },
        { label: "Energy and Environmental Solutions Division (EESD)", href: `${role ? `/${role}/research/EESD` : `/research/EESD`}` },
        { label: "Intelligent Materials and Devices Division (IMDD)", href: `${role ? `/${role}/research/IMDD` : `/research/IMDD`}` },
        { label: "Innovative Materials and Processes Division (IMPD)", href: `${role ? `/${role}/research/IMPD` : `/research/IMPD`}` },
      ],
    },

    {
      label: "R&D MANAGEMENT",
      href: `${role ? `/${role}/r&d-Management` : `/r&d-Management`}`,
      children: [
        { label: "Technology/Knowhow", href: `${role ? `/${role}/r&d-Management/Technology-Knowhow` : `/r&d-Management/Technology-Knowhow`}` },
        { label: "Memorandum of Understanding", href: `${role ? `/${role}/r&d-Management/MOU` : `/r&d-Management/MOU`}` },
      ],
    },

    {
      label: "TENDER'S",
      href: `${role ? `/${role}/tender` : `/tender`}`,
    },

    {
      label: "DIRECTORY",
      href: `${role ? `/${role}/directory` : `/directory`}`,
      children: [
        { label: "AMPRI – Directory", href: `${role ? `/${role}/directory` : `/directory`}` },
        { label: "CSIR – Directory", href: "https://www.csir.res.in/council-scientific-and-industrial-research-anusandhan-bhawan" },
      ],
    },

    {
      label: "GALLERY",
      href: `${role ? `/${role}/gallery` : `/gallery`}`,
    },

    {
      label: "SERVICES",
      href: "/",
      children: [
        { label: "Human Resource Development", href: `${role ? `/${role}/services/HR` : `/services/HR`}` },
        { label: "ISTAG", href: `${role ? `/${role}/services/ISTAG` : `/services/ISTAG`}` },
        { label: "Dispensary", href: `${role ? `/${role}/services/Dispensary` : `/services/Dispensary`}` },
        { label: "Guest house", href: `${role ? `/${role}/services/guest-house` : `/services/guest-house`}` },
        { label: "Rajbhasha Cell", href: `${role ? `/${role}/services/rajbhasha-cell` : `/services/rajbhasha-cell`}` },
        { label: "Administration", href: `${role ? `/${role}/services/administration` : `/services/administration`}` },
        { label: "Director’s Secretariat", href: `${role ? `/${role}/services/director-secretariat` : `/services/director-secretariat`}` },
        { label: "Workshop", href: `${role ? `/${role}/services/Workshop` : `/services/Workshop`}` },
        { label: "Engineering Services", href: `${role ? `/${role}/services/engineering-services` : `/services/engineering-services`}` },
      ],
    },

    {
      label: "CSR",
      href: `${role ? `/${role}/csr` : `/csr`}`,
    },
  ];

  return (
    <nav className="w-full bg-[#fff] shadow-md relative">

      {isAdmin && (
        <button
          onClick={() => navigate(`${role && `/${role}/dashboard`}`)}
          className="flex items-center gap-2 absolute top-[22%] z-10 cursor-pointer left-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium pl-2 pr-3 py-2 rounded-full shadow-md hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 ease-in-out whitespace-nowrap"
        >
          <ArrowBigLeft className="w-5 h-4" />
          <span className="text-sm">Dashboard</span>
        </button>
      )}


      <div className="relative flex flex-col sm:flex-row items-center sm:items-center justify-evenly  px-4 sm:pl-12 py-3 w-full">

        {/* Logo */}
        <div>
          <img
            src="https://www.neeri.res.in/img/rsz_emblem_of_india.jpg"
            alt="CSIR-AMPRI"
            className="h-14 sm:h-20 mx-auto sm:mx-0"
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row items-center text-sm sm:text-base gap-3 sm:gap-8">
          <div className={`flex gap-3`}>
            <div className="notranslate">
              <div className="flex flex-col items-center  gap-0.5">
                <h1 className=" text-[#004080] text-2xl font-bold text-center">CSIR- Advanced Materials and Processes Research Institute</h1>
                <h1 className=" text-[#004080] text-2xl font-bold text-center">सीएसआईआर- प्रगत पदार्थ तथा प्रक्रम अनुसंधान संस्थान</h1>
                <h2 className="text-[#555] font-bold text-sm">Council of Scientific & Industrial Research (CSIR)</h2>
                <h2 className="text-[#555] font-bold text-sm">वैज्ञानिक तथा औ‌द्योगिक अनुसंधान परिषद्</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div>
          <img
            src="http://localhost:4001/uploads/4dffb4b65a1efcf498f6efe020ec1f04e77eeb44c995c7cc671b6ad23cd844b0.jpg"
            alt="CSIR-AMPRI"
            className="h-14 sm:h-24 sm:w-[6.6rem] mx-auto sm:mx-0"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className="flex flex-wrap justify-center items-center w-full  font-semibold text-[16px] sm:text-[16px] tracking-wide bg-[#004080] text-white shadow-inner relative"
        onMouseLeave={handleLeave}
      >

        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative py-4 px-3 "
            onMouseEnter={(e) => handleEnter(item.label, e)}
          >
            <a href={item.href} className={` 
            ${item.label === "SERVICES" || item.label === "RESEARCH" ? "pointer-events-none" : currentPath.startsWith(item.href) && item.href !== "/" ? "bg-[#0dcaf049] border border-[#0dcaf049]" : currentPath === "/" && item.href === "/" && "bg-[#0dcaf049] border border-[#0dcaf049]"} 
            ${(currentPath.startsWith("/services") && item.label === "SERVICES") || currentPath.startsWith("/research") && item.label === "RESEARCH" && "bg-[#0dcaf049] border border-[#0dcaf049]"}
            transition-colors font-bold text-[14px] hover:bg-[#0dcaf049] px-4 py-2.5 rounded-md`}>
              {item.label}
            </a>
          </div>
        ))}

        {/* Dropdown */}
        {hovered &&
          navItems.find((i) => i.label === hovered)?.children && (
            <div
              className="absolute bg-[#003366] border border-gray-300 shadow-lg px-5 py-4 top-[100%] min-w-[240px] z-50 rounded-md"
              style={{ left: dropdownPos.left, transform: "translateX(-50%)" }}
              onMouseEnter={() => setHovered(hovered)}
              onMouseLeave={handleLeave}
            >

              <ul className="list-none space-y-2 text-sm sm:text-base text-left">
                {navItems.find((i) => i.label === hovered)?.children.map((child, i) => (
                  <li
                    key={i}
                    className="hover:bg-[#0dcaf049] border-b-2 border-white hover:text-white px-2 py-1 rounded-md cursor-pointer"
                  >
                    <a
                      href={child.href}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
