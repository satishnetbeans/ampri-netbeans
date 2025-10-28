// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar";
import Topbar from "../../../components/ui/Topbar";
import Footer from "../../../components/ui/Footer";
import ContentRenderer from "../../../components/ui/ContentRenderer";



function AnnualPropertyReturn({ isAdmin , role}) {

    const list = [
    {
        year: "2015",
        members: { name: "check-out" }
    },
    {
        year: "2016",
        members: { name: "check-out" }
    },
    {
        year: "2017",
        members: { name: "check-out" }
    },
    {
        year: "2018",
        members: { name: "check-out" }
    },
    {
        year: "2019",
        members: { name: "check-out" }
    },
    {
        year: "2020",
        members: { name: "check-out" }
    },
    {
        year: "2021",
        members: { name: "check-out" }
    },
    {
        year: "2022",
        members: { name: "check-out" }
    },
    {
        year: "2023",
        members: { name: "check-out", link: `${role ?`/${role}/APR2023` :"/APR2023"}` }
    },
];

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="w-full flex flex-col items-center py-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Annual Immovable Property Return
                </h2>

                <div className="overflow-x-auto w-full max-w-5xl">
                    <table className="w-full border border-gray-300 text-sm text-center">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 py-2 px-3 w-[20%]">Year</th>
                                <th className="border border-gray-300 py-2 px-3 w-[26%]">Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-orange-50 transition`}
                                >
                                    <td className="border border-gray-300 py-2 font-medium">
                                        Year {item.year}
                                    </td>

                                    <td className="border border-gray-300 py-2 px-2">
                                        {item.members.link ? (
                                            <a
                                                href={item.members.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                {item.members.name}
                                            </a>
                                        ) : (
                                            item.members.name || "-"
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default AnnualPropertyReturn
