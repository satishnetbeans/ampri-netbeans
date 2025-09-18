import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import DataTable from "../../components/ui/DataTableRender"

// CSR page data
export const csrAmpri = {
    title: "Guest House",
    pageContent: {
        content: [
            { type: "subHeading", para: "AMPRI GuestHouse" },
            {
                type: "paragraph",
                para: "In order to take care of health needs of the employees of the institute and their families, AMPRI has set up a health care (Dispensary) unit within its premises. A resident medical officer looks after the health needs of the staff and their families. The centre is also looked after by a part time homeopathic doctor during 04:00 PM to 07:00 PM.  Medical services are  also provided  by a part time allopathic doctor from 08:00 AM to 12:00 AM and 04:00 PM to 07:00 PM in the absence of the resident medical officer. The allopathic doctor also makes necessary arrangements for first aid and specialized services by engaging suitable medical experts and service providers."
            }
        ]
    }
}

const ContactData = [

    {
        "Address": "Advanced Materials and Processes Research Institute Hoshangabad Road, Near Habibganj Naka , 	Bhopal – 462064 (MP) India",
        "Phone": "(0755) – 2485253, EXT – 1500",
        "Fax": "(0755) – 2488985, 2488323",
        "Email": "guesthouse.ampri@csir.res.in",
    },

];

const ContactColumns = [
    "Address",
    "Phone",
    "Fax",
    "Email",
];


function GuestHouse({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <ContentRenderer from="GuestHouse" contentData={csrAmpri} />

            <DataTable
                from="GuestHouse"
                columns={ContactColumns}
                data={ContactData}
                entriesPerPageOptions={[10, 25, 50]}
                title="Contact Details - Guest House"
            />

            <div class="w-[90%] mx-auto mb-9 text-center bg-white rounded-xl p-6 border border-gray-100">
                <h2 class="text-2xl font-semibold text-gray-600 mb-6 pb-2 border-b border-gray-200">Guest House Accommodation Request Form</h2>

                <div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-5 p-4 bg-blue-50 rounded-lg">
                    <h3 class="font-semibold text-lg text-gray-700 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        PDF Format :
                    </h3>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://ampri.res.in/hi/wp-content/uploads/2025/08/GH_OFFICIAL_V1.pdf" class="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Official
                        </a>
                        <a href="https://ampri.res.in/hi/wp-content/uploads/2025/08/GH_PERSONAL_V1.pdf" class="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Personal
                        </a>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 justify-center items-center p-4 bg-gray-50 rounded-lg">
                    <h3 class="font-semibold text-lg text-gray-700 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Word Format :
                    </h3>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#" class="px-4 py-2 bg-white text-gray-500 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm flex items-center opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Official
                        </a>
                        <a href="#" class="px-4 py-2 bg-white text-gray-500 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm flex items-center opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Personal
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default GuestHouse