// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar";
import Topbar from "../../../components/ui/Topbar";
import Footer from "../../../components/ui/Footer";
import ContentRenderer from "../../../components/ui/ContentRenderer";

const data = {
    "title": "Disclaimer",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "Disclaimer",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "list",
                "para": " Contents published on this website have no legal sanctity and are for general reference only. Visitors to this website are required to refer to the official documents published by COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH (CSIR) to ascertain the facts.",
               
                "items": [
                    "While all efforts have been made to ensure that the information given on this website is correct, Advanced Materials and Processes Research Institute, Bhopal, Government of India does not warrant or makes any claim as to the quality, content, accuracy, or completeness of the information, text graphics, links and other items contained on this site / server or any other site / server. Such materials have been compiled from a variety of sources, and are subject to change without notice by Advanced Materials and Processes Research Institute, Bhopal. Commercial use of the materials available in the site is prohibited.",

                    "Communications made through this sites e-mail and messaging system shall in no way be deemed to constitute as a legal notice to   Advanced Materials and Processes Research Institute, Bhopal or any of its constituent units, agencies, officers, employees, agents, or representatives, with respect to any existing or potential claim or cause of action against the Centre and Department or any of its divisions, Sections, Units, agencies, officers, employees, agents, or representatives. Advanced Materials and Processes Research Institute,  Council of Scientific and Industrial Research (CSIR) Bhopal, India",
                
                ],
                "order": 2
            },

        ],
        "tabs": []
    },

}

function Disclaimer({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            {data && <ContentRenderer contentData={data} isAdmin={false} />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default Disclaimer