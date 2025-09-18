import ExternalLinks from "./ExternalLinks";

const linkData = [
  {
    title: "Intranet",
    links: ["AMPRI Intranet", "Holidays 2025", "Web mail", "CSIR Directory", "CSIR Labs and Units"],
  },
  {
    title: "KRC",
    links: ["Institutional Repository", "Online Journals"],
  },
  {
    title: "Performance",
    links: ["Significant Contributions", "Ongoing Projects", "R&D Output", "Human resource"],
  },
  {
    title: "Publications",
    links: ["News Letter", "Annual Reports", "CSIR-AMPRI PUBLICATIONS"],
  },
  {
    title: "R&D Facilities",
    links: ["Testing Facility Available", "Simulation and Modeling", "Characterization"],
  },
  {
    title: "Professional Societies",
    links: ["MRSI Bhopal Chapter", "IIM Bhopal Chapter", "TSI Bhopal Chapter"],
  },
];

const NavigationLinks = ({ isAdmin }) => (
  <div className=" w-[70%] h-full max-[600px]:px-3 max-[600px]:py-3 max-[600px]:w-full flex flex-col justify-between">
    <div className="border border-gray-300 p-2 rounded-md flex flex-col w-[98%] h-[70%]">
      <h2 className="text-center mb-2 max-[600px]:text-lg max-[600px]:mb-4 relative text-[#004080] text-2xl font-bold">
        Navigation Links
        {/* {isAdmin && <button className='absolute top-0 right-[15%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit navigation links</button>} */}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 sm:overflow-auto md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-800  ">
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
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <ExternalLinks isAdmin={isAdmin} />
  </div>
);

export default NavigationLinks;
