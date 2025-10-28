// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import DataTable from "../../../components/ui/DataTableRender"

const requestData = [
    { title: "Total Request Received", value: 190 },
    { title: "Total Request Disposed of", value: 186 },
    { title: "Total Request Pending", value: 4 },
    { title: "Total Request Pending with CPIO", value: 4 },
    { title: "Total Request Pending with Me", value: 0 },
    { title: "Total Request Pending for Initial Action", value: 0 },
    { title: "Total Request Pending for Further Action", value: 0 },
];

const appealData = [
    { title: "Total Appeal Received", value: 8 },
    { title: "Total Appeal Disposed of", value: 8 },
    { title: "Total Appeal Pending", value: 0 },
    { title: "Total Appeal Pending with FAA", value: 0 },
    { title: "Total Appeal Pending with Me (for Initial Action)", value: 0 },
    { title: "Total Request/Appeal Pending Due to Document", value: 0 },
];


function ReceiptnDisposal({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="my-6 ">
                <h1 className="text-3xl font-bold mb-8 text-[#004080] text-center">RECEIPT & DISPOSAL OF RTI APPLICATIONS & APPEALS</h1>

                <div className="max-w-[65vw] mx-auto my-6 bg-white  rounded-2xl p-6 border border-gray-200 ">
                    <h2 className="text-xl font-bold mb-8 text-gray-700 text-center">RTI Request & Appeal Management Information System (RTI-MIS)</h2>
                    <p className="text-center text-gray-600 mb-4">
                        As on <span className="font-semibold">30 January 2020</span>
                    </p>

                    {/* Request Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-gray-300 rounded-lg mb-6">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-2 border-b border-gray-300">Request Statistics</th>
                                    <th className="text-right p-2 border-b border-gray-300">Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requestData.map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-2 border-b border-gray-200">{item.title}</td>
                                        <td className="p-2 border-b border-gray-200 text-right font-semibold text-indigo-600">
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Appeal Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-gray-300 rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-2 border-b border-gray-300">Appeal Statistics</th>
                                    <th className="text-right p-2 border-b border-gray-300">Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appealData.map((item, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td
                                            className={`p-2 border-b border-gray-200 ${i === appealData.length - 1 ? "text-red-600 font-semibold text-center" : ""
                                                }`}
                                        >
                                            {item.title}
                                        </td>
                                        <td
                                            className={`p-2 border-b border-gray-200 text-right font-semibold ${i === appealData.length - 1 ? "text-red-600" : "text-blue-800"
                                                }`}
                                        >
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default ReceiptnDisposal