const externalLinks = [
  {
    img: "https://ampri.res.in/wp-content/uploads/2017/03/Vigilance-Awareness-22oct17-dis-150x90.jpg",
    alt: "PRABHASS",
    link: "#",
  },
  {
    img: "https://ampri.res.in/wp-content/uploads/2018/04/Vidya-Lakshmi-Karyakram-Portal-Scheme-Details-300x278-2-150x90.png",
    alt: "CSIR Against COVID-19",
    link: "#",
  },
  {
    img: "https://ampri.res.in/wp-content/uploads/2017/03/swachh-bharat-150x90.jpg",
    alt: "Make In India",
    link: "#",
  },
  {
    img: "https://ampri.res.in/wp-content/uploads/2025/06/IYC_logo-2-150x90.png",
    alt: "Digital India",
    link: "#",
  },
  {
    img: "https://ampri.res.in/wp-content/uploads/2017/03/Digital-India-150x90.jpg",
    alt: "MyGov",
    link: "#",
  },
  {
    img: "https://ampri.res.in/wp-content/uploads/2022/01/CSIR-JIGYASA-Portal-2-150x90.png",
    alt: "Jigyasa",
    link: "#",
  },
];


export default function ExternalLinks({ isAdmin }) {
  return (
    <section className="w-[98%] h-[28%] flex items-center overflow-hidden border border-gray-300 max-[500px]:flex-col max-[500px]:h-auto max-[500px]:mt-4 px-2 rounded-md relative">

      {/* {isAdmin && <button className='absolute top-2 left-12 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white  text-lg hover:bg-blue-600'>Edit</button>} */}

      <h2 className="flex justify-center items-center  py-3 h-[70%] md:w-[19%] max-[1024]: text-white max-[500px]:w-full max-[500px]:text-base max-[500px]:py-2 max-[500px]:mt-2 bg-[#004080] text-2xl font-bold whitespace-nowrap px-2 rounded-md">
        External Links
      </h2>

      <div className="relative w-full h-[70%] overflow-hidden scroll-container max-[500px]:h-[100px]">
        <div className="animate-scroll flex gap-10 h-full pointer-events-auto px-2 max-[500px]:gap-4 max-[500px]:pt-5">
          {externalLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="inline-block pointer-events-auto min-w-0 shrink-0"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="rounded-lg w-[120px] h-[80px] max-[500px]:w-[100px] max-[500px]:h-[60px] hover:scale-105 transition shadow-xl cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

