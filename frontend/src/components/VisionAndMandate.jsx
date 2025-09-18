import React from 'react';
import { useNavigate } from 'react-router-dom';

const VisionAndMandate = ({ visionMandate, isAdmin }) => {
    const navigate = useNavigate()

    const data = visionMandate && visionMandate.length > 0 ? visionMandate[0] : null;

    return (
        <div className="w-[45%] h-[100%] pl-3 flex flex-col max-[600px]:w-full max-[600px]:pl-0 max-[600px]:h-auto relative">

            {isAdmin && data && (
                <button
                    onClick={() => navigate("/admin/editvision")}
                    className="absolute top-2 right-2 border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-bold text-xl hover:bg-blue-600"
                >
                    Edit
                </button>
            )}

            <div className=' border border-gray-300 rounded-md h-full flex flex-col'>
                <div className=" text-[#004080] p-6 md:w-full max-[600px]:w-full max-h-[45%]   flex flex-col">
                    <h2 className="text-2xl text-center font-bold mb-2">VISION</h2>
                    <p className=' text-black overflow-y-auto ultra-thin-scrollbar flex-1'>
                        {data?.vision || "Vision statement not available."}
                    </p>
                </div>

                <div className="text-[#004080] p-6 pt-4 md:w-full max-[600px]:w-full border-t-1 border-gray-300  flex flex-col">
                    <h2 className="text-2xl text-center font-bold mb-2">MANDATE</h2>


                    <ul className="list-none  space-y-1 text-black overflow-y-auto ultra-thin-scrollbar flex-1">
                        {data?.mandate
                            ? data.mandate.split(",").map((item, idx) => (
                                <div key={idx} className='flex gap-2'>
                                    <span className='text-blue-950 text-2xl '>◆</span>
                                    <li className='w-full'> {item.trim()}</li>
                                </div>
                            ))
                            : <li>Mandate details not available.</li>}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default VisionAndMandate;
