// @ts-nocheck
import ExternalLinks from "./ExternalLinks";

const linkData = [
  {
    title: "Intranet",
    links: [{name:"AMPRI Intranet" ,url :"#"},{name:"Holidays 2025" ,url :"https://ampri.res.in/en/wp-content/uploads/2025/06/HolidayList2025.pdf"} , {name:"Web mail" ,url :"https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F"}, {name:"CSIR Directory" ,url :"https://www.csir.res.in/hi/csir-directory"}, {name:"CSIR Labs and Units" ,url :"https://www.csir.res.in/hi/csir-labs-and-units"}],
  },
  {
    title: "KRC",
    links: [{name:"Institutional Repository" ,url :"https://ampri.csircentral.net/"}, {name:"Online Journals" ,url :"https://onos.gov.in/"}],
  },
  //
  {
    title: "Performance",
    links: [{name:"Significant Contributions" ,url :"#"}, {name:"Ongoing Projects" ,url :"#"}, {name:"R&D Output" ,url :"#"}, {name:"Human resource" ,url :"/services/HR"}],
  },
  {
    title: "Publications",
    links: [{name:"News Letter" ,url :"#"}, {name:"Annual Reports" ,url :"#"}, {name:"CSIR-AMPRI PUBLICATIONS" ,url :"https://ampri.irins.org/"}],
  },

  {
    title: "R&D Facilities",
    links: [{name:"Testing Facility Available" ,url :"#"}, {name:"Simulation and Modeling" ,url :"#"} , {name:"Characterization" ,url :"#"}],
  },

  {
    title: "Professional Societies",
    links: [{name:"MRSI Bhopal Chapter" ,url :"#"}, {name:"IIM Bhopal Chapter" ,url :"#"}, {name:"TSI Bhopal Chapter" ,url :"#"}],
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
                  <a target="_blank" href={link.url}>{link.name}</a>
                  
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
