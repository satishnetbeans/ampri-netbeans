// @ts-nocheck
import React, { useState, useEffect } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import DataTable from "../../components/ui/DataTableRender"

import { fetchGuestHouse, fetchGuestHouseContact } from "../../api/axios"


function GuestHouse({ isAdmin }) {
    const [GuestHouse, setGuestHouse] = useState(null)
    const [houseContactData, sethouseContact] = useState(null)
    const [houseContactColumns, sethouseContactColumns] = useState(null)
    const [table, settable] = useState(null)
    useEffect(() => {
        const getGuestHouse = async () => {
            try {
                const [guestHouseRes, houseContactRes] = await Promise.all([
                    fetchGuestHouse(),
                    fetchGuestHouseContact()
                ]);
                console.log("GuestHouse Data:", guestHouseRes, houseContactRes);
                if (guestHouseRes.data) {
                    const data = guestHouseRes.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setGuestHouse(data)
                } else {
                    console.log(guestHouseRes.error)
                }
                if (houseContactRes.data) {
                    const Data = houseContactRes.data
                        .sort((a, b) => a.order - b.order).map(item => ({
                            _id: item._id,
                            order: item.order,
                            Address: item.Address,
                            Phone: item.Phone,
                            Fax: item.Fax,
                            Email: item.Email
                        }));
                    const Columns = houseContactRes.data[0].table.columns;
                    console.log("guest house  data : ", Data, Columns);
                    sethouseContact(Data);
                    sethouseContactColumns(Columns);
                    settable(houseContactRes.data[0].table);
                } else {
                    console.log(guestHouseRes.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getGuestHouse()
    }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            {GuestHouse && <ContentRenderer contentData={GuestHouse} isAdmin={isAdmin} />}

            {houseContactData && houseContactColumns && <DataTable
                from="GuestHouse"
                columns={houseContactColumns}
                data={houseContactData}
                entriesPerPageOptions={[10, 25, 50]}
                title="Contact Details - Guest House"
                isAdmin={isAdmin}
                table={table}
            />}



            <div className="w-[90%] mx-auto mb-9 text-center bg-white rounded-xl p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-600 mb-6 pb-2 border-b border-gray-200">Guest House Accommodation Request Form</h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-5 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        PDF Format :
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://ampri.res.in/hi/wp-content/uploads/2025/08/GH_OFFICIAL_V1.pdf" className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Official
                        </a>
                        <a href="https://ampri.res.in/hi/wp-content/uploads/2025/08/GH_PERSONAL_V1.pdf" className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Personal
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Word Format :
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#" className="px-4 py-2 bg-white text-gray-500 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm flex items-center opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Official
                        </a>
                        <a href="#" className="px-4 py-2 bg-white text-gray-500 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm flex items-center opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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