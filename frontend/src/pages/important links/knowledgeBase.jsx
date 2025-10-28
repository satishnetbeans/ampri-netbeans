// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"



function KnowledgeBase({ isAdmin, role }) {

    const links = [
        {
            title: "Technology / Knowhow",
            href: `${role ? `/${role}/r&d-Management/Technology-Knowhow`: "/r&d-Management/Technology-Knowhow"}`,
            tooltip: "Technology/Knowhow",
        },
        {
            title: "Memorandum of Understanding",
            href:`${role ? `/${role}/r&d-Management/MOU`: "/r&d-Management/MOU"}`,
            tooltip: "Memorandum of Understanding",
        },
        {
            title: "Tech. Ready for Commercialization",
            href: `${role ? `/${role}/Commercialization`: "/Commercialization"}`,
            tooltip: "tech ready for Commercialization",
        },
        {
            title: "Patents",
            href: `${role ? `/${role}/Patents`: "/Patents"}`,
            tooltip: "Patents" ,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="w-full py-6 flex-grow">
                {/* Orange Double Separator */}
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="text-3xl font-bold mt-4 mb-4 text-[#004080]"> Knowledge Base </h2>
                    <div className="flex w-full max-w-5xl items-center">
                        <span className="border-t-2 border-[#004080] flex-1"></span>
                        <span className="mx-1 border-t-2 border-[#004080] flex-1"></span>
                    </div>
                </div>

                {/* Buttons Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            title={link.tooltip}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-center rounded-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-indigo-500 
                       hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 
                       shadow-md hover:shadow-lg"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default KnowledgeBase