// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar";
import Topbar from "../../../components/ui/Topbar";
import Footer from "../../../components/ui/Footer";
import ContentRenderer from "../../../components/ui/ContentRenderer";

const data = {
    "title": "Web Policy Manager",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "Web Policy Manager",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "subHeading",
                "para": "Director",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "paragraph",
                "para": "CSIR-Advanced Materials and Processes Research Institute (AMPRI)(Formerly Regional Reserach Laboratory)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
           
            {
                "type": "paragraph",
                "para": "Council of Scientific & Industrial Research (CSIR), India",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },
            {
                "type": "paragraph",
                "para": "Near Habibganj Naka, Hoshangabad Road , Bhopal 462026, INDIA",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },
            
           
            {
                "type": "paragraph",
                "para": "PHONE NO : +91 – 755 – 2457105     ,    FAX NO : +91 – 755 – 2457042 ",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            },
            {
                "type": "paragraph",
                "para": "email: helpdesk@ampri.res.in",
                "src": "",
                "alt": "",
                "items": [],
                "order": 7
            }
        ],
        "tabs": []
    },

}

function WebPolicyManager({ isAdmin }) {
   
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

export default WebPolicyManager