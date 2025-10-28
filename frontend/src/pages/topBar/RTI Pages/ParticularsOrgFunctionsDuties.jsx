// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Particulars of organisation, functions and duties",
    "pageContent": {
        "content": [
            {
                "type": "subHeading",
                "para": "VISION",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "AMPRI is committed to develop Innovative, Cutting edge, Internationally competetive, Energy efficient and Environmental friendly technologies/products in the area of Advanced Materials for societal benefits and to assist the Nation`s economy",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "subHeading",
                "para": "Basic Details of Organization",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "paragraph",
                "para": "name : ADVANCED MATERIALS AND PROCESSES RESEARCH INSTITUTE(COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },
           
            {
                "type": "paragraph",
                "para": "address : HOSANGABAD ROAD , NEAR HABEEBGANJ NAKA, BHOPAL – 462026",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },
            
           
            {
                "type": "paragraph",
                "para": "PHONE NO : +91 – 755 – 2457244, 2455339    ,    FAX NO : +91 – 755 – 2457042 ",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            }
        ],
        "tabs": []
    },

}

function ParticularsOrgFunctionsDuties({ isAdmin }) {
   
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

export default ParticularsOrgFunctionsDuties