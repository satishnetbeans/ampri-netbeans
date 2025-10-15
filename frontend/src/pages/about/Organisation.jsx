// @ts-nocheck
import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import checkBaseURL from "../../utils/CheckBaseUrl";
import { fetchOrganisation, UpdateOrganisation } from "../../api/axios";
import { Upload } from "lucide-react"; // upload icon

function Organisation({ isAdmin }) {
    const baseurl = checkBaseURL();
    const [organisation, setOrganisation] = useState(null);

    console.log("organisation data:", organisation);


    useEffect(() => {
        const getOrganisation = async () => {
            try {
                const response = await fetchOrganisation();
                if (response.data) setOrganisation(response.data);
            } catch (error) {
                console.error("Error fetching organisation data:", error);
            }
        };
        getOrganisation();
    }, [])


    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || !organisation?.length) return;

        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", organisation[0].alt || "");

        try {
            const response = await UpdateOrganisation(organisation[0]._id, formData);
            if (response.data) {
                setOrganisation([response.data]); // Update image in UI
            }
        } catch (error) {
            console.error("Error updating organisation image:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="w-[95%] mx-auto my-9 bg-white px-8 py-5 rounded-3xl flex-grow">
                <h1 className="text-4xl font-bold mb-8 text-[#004080] text-center">
                    Organizational Structure
                </h1>

                {isAdmin && (
                    <div className="flex justify-center items-center mb-4 gap-2   w-fit  mx-auto">
                        <label
                            htmlFor="organisationImage"
                            className="text-white flex items-center gap-2 cursor-pointer bg-blue-800 hover:bg-blue-600  p-2 rounded font-bold"
                        >
                            <Upload className="w-5 h-5 text-white" />
                            <span className="text-[16px] whitespace-nowrap">Update Image </span>
                        </label>
                        <input
                            id="organisationImage"
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </div>
                )}

                {organisation && (
                    <div className="flex justify-center">
                        <img
                            src={
                                organisation[0].imageLink.startsWith("uploads/") ? `${baseurl}/${organisation[0].imageLink}` : organisation[0].imageLink

                            }


                            alt={organisation[0].alt}
                            className="rounded-lg shadow-md max-w-full"
                        />
                    </div>
                )}
            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default Organisation;
