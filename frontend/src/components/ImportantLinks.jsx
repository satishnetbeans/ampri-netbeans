import React from "react";

const links = [
  { name: "Annual Procurement", icon: "🛒", url: "#" },
  { name: "Technology Info", icon: "🔧", url: "#" },
  { name: "Knowledge Base", icon: "📚", url: "#" },
  { name: "SAIF", icon: "🍽️", url: "#" },
  { name: "AcSIR", icon: "🎓", url: "#" },
  { name: "Skill Development Program @ CSIR-AMPRI", icon: "🔧", url: "#" },
];

const ImportantLinks = ({ isAdmin }) => {
  return (
    <section className="w-[30%] h-full  max-[600px]:w-full max-[600px]:border-none max-[600px]:mt-6 flex items-center justify-center">
      <div className="border border-gray-300 w-[95%] h-full pb-2 ml-2 max-[600px]:ml-0 rounded-md relative ">
        {/* {isAdmin && <button className='absolute top-2 right-5 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600'>Edit</button>} */}
        <h2 className="text-center font-semibold text-xl py-3">
          <span className="inline-block bg-white px-4 text-[#004080] text-2xl font-bold mb-2">Important Links</span>
        </h2>

        <div className="overflow-y-auto ultra-thin-scrollbar h-[70%] w-full flex flex-col items-center gap-2 max-[600px]:h-auto max-[600px]:px-4 max-[600px]:flex-row">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="bg-[#004080] hover:bg-[#004c98] text-white px-6 py-1 rounded-lg shadow-md flex items-center justify-center w-[70%] max-[600px]:w-full"
            >
              <div className="overflow-x-auto  whitespace-nowrap max-w-full scrollbar-hide">
                <span className="text-white mr-1.5 shrink-0">{link.icon}</span>{link.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;

