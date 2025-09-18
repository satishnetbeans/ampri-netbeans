// @ts-nocheck
import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  {
    label: "HOME",
    href: "/",
  },

  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "About CSIR-AMPRI", href: "/about" },
      { label: "Organization", href: "/about/Organization" },
      { label: "Research Council", href: "/about/research-council" },
      { label: "Management Council", href: "/about/management-council" },
      { label: "Staff Information", href: "/about/staff-page" },
      { label: "Former Directors", href: "/about/former-directors" },
    ],
  },

  {
    label: "RESEARCH",
    href: "/",
    children: [
      { label: "Light Weight Materials Division (LWMD)", href: "/research/LWMD" },
      { label: "Sustainable Construction Materials Division (SCMD)", href: "/research/SCMD" },
      { label: "Functional Materials and Composites Division (FMCD)", href: "/research/FMCD" },
      { label: "Energy and Environmental Solutions Division (EESD)", href: "/research/EESD" },
      { label: "Intelligent Materials and Devices Division (IMDD)", href: "/research/IMDD" },
      { label: "Innovative Materials and Processes Division (IMPD)", href: "/research/IMPD" },
    ],
  },

  {
    label: "R&D MANAGEMENT",
    href: "/r&d-Management",
    children: [
      { label: "Technology/Knowhow", href: "/r&d-Management/Technology-Knowhow" },
      { label: "Memorandum of Understanding", href: "/r&d-Management/MOU" },
    ],
  },

  {
    label: "TENDER'S",
    href: "/tender",
  },

  {
    label: "DIRECTORY",
    href: "/directory",
    children: [
      { label: "CSIR – Directory", href: "https://www.csir.res.in/council-scientific-and-industrial-research-anusandhan-bhawan" },
    ],
  },

  {
    label: "GALLERY",
    href: "/gallery",
  },

  {
    label: "SERVICES",
    href: "/",
    children: [
      { label: "Human Resource Development", href: "/services/HR" },
      { label: "ISTAG", href: "/services/ISTAG" },
      { label: "Dispensary", href: "/services/Dispensary" },
      { label: "Guest house", href: "/services/guest-house" },
      { label: "Rajbhasha Cell", href: "/services/rajbhasha-cell" },
      { label: "Administration", href: "/services/administration" },
      { label: "Director’s Secretariat", href: "/services/director-secretariat" },
      { label: "Workshop", href: "/services/Workshop" },
      { label: "Engineering Services", href: "/services/engineering-services" },
    ],
  },

  {
    label: "CSR",
    href: "/csr",
  },
];

const Navbar = ({ isAdmin }) => {
  const currentPath = useLocation().pathname;
  console.log("Current Path:", currentPath);

  const [hovered, setHovered] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 0 });
  const handleEnter = (name, e) => {
    const rect = e.target.getBoundingClientRect();
    setDropdownPos({ left: rect.left + rect.width / 2 });
    setHovered(name);
  };

  const handleLeave = () => setHovered(null);

  return (
    <nav className="w-full bg-[#fff] shadow-md">
      {/* Top Section */}

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
            src="https://ampri.res.in/wp-content/uploads/2018/04/imageedit_1_6030074067.png"
            alt="CSIR-AMPRI"
            className="h-14 sm:h-20 mx-auto sm:mx-0"
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
