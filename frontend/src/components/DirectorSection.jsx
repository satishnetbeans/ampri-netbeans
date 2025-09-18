import React from 'react';
import { useNavigate } from 'react-router-dom';

const DirectorSection = ({ director, isAdmin }) => {
    const navigate = useNavigate()
    return (
        <section className="w-[54%] h-full  max-[600px]:w-full max-[600px]:h-auto max-[600px]:border-none">
            <div className='h-full flex flex-col gap-1.5 relative w-full '>

                <div className="border border-gray-300  rounded h-[45%] w-[98%]">
                    <h4 className="text-2xl font-bold mb-1 text-center text-[#004080] h-[15%]">Our Patrons</h4>
                    <div className="flex justify-center max-[600px]:grid max-[600px]:grid-cols-3 gap-x-12 text-center h-[83%]">
                        <div className="flex flex-col items-center h-full ">
                            <img
                                src="https://www.neeri.res.in/img_homes/30756906_narednra-modi.webp"
                                className="object-contain rounded-full h-[60%] "
                                alt="Shri. Narendra Modi"

                            />
                            <div className="font-bold text-[15px]">Shri. Narendra Modi</div>
                            <div className='text-[14px]'>
                                Hon&apos;ble Prime Minister of India
                                <br /> President, CSIR
                            </div>
                        </div>

                        <div className="flex flex-col items-center h-full">
                            <img
                                src="https://www.neeri.res.in/img_homes/Jitendra%20Singh_1.webp"
                                className="object-contain rounded-full h-[60%] "
                                alt="Dr. Jitendra Singh"

                            />
                            <div className="font-bold text-[15px]">Dr. Jitendra Singh</div>
                            <div className='text-[14px]'>
                                Hon&apos;ble Minister of S&amp;T
                                <br /> Vice President, CSIR
                            </div>
                        </div>

                        <div className="flex flex-col items-center h-full">
                            <img
                                src="https://www.neeri.res.in/img_homes/Photo.webp"
                                className="object-contain  rounded-full h-[60%] "
                                alt="Dr. N. Kalaiselvi"

                            />
                            <div className="font-bold text-[15px]">Dr. N. Kalaiselvi</div>
                            <div className='text-[14px]'>
                                Secretary DSIR
                                <br /> Director General, CSIR
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex border border-gray-300 h-[55%] w-[98%] relative'>

                    {isAdmin && <button onClick={() => navigate('/admin/editdirector')} className='absolute left-[11%] top-2 bg-blue-800 py-1 px-2 rounded-md cursor-pointer text-white font-semibold text-xl  border border-white hover:bg-blue-600'>Edit Director</button>}

                    <div className='flex flex-col items-center gap-5 w-[40%] mt-14 max-[600px]:w-full max-[600px]:mt-20'>
                        <div className='bg-gray-100 max-[600px]:w-[70%] h-40 w-40 rounded-full overflow-hidden'>
                            <img src={director.image} alt="Director" className="rounded-full object-cover mb-4  w-full h-full " />
                        </div>
                        <p className='font-bold text-[18px] text-black text-center'>
                            <span>{director.name}</span>, Director
                        </p>
                    </div>
                    <div className="w-[55%] h-[85%]  text-lg text-gray-700 flex flex-col ml-4 max-[600px]:w-full max-[600px]:ml-0 max-[600px]:p-3 py-2">
                        <h2 className="text-2xl font-bold mb-4">Director's Message</h2>
                        <p className='overflow-y-auto  ultra-thin-scrollbar  max-[600px]:overflow-y-auto max-[600px]:h-[37vh]'>{director.message}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default DirectorSection;