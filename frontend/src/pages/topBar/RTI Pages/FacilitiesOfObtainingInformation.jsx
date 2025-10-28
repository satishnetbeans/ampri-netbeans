// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Particulars of facilities available to citizens for obtaining information",
    "pageContent": {
        "content": [

            {
                "type": "paragraph",
                "para": "The particulars of facilities available to citizens for obtaining information, including the working hours of a library or reading room, if maintained for public use;",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "Request for seeking information under the Act may preferably be submitted in the following form which may be downloaded. These forms are also available with Public Information Officer/ Asstt. Public Information Officers. Hard copies are also available at the GATE of the Lab.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
        ],
        "tabs": []
    },

}

function FacilitiesOfObtainingInformation({ isAdmin }) {

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <div className="flex-grow">
                {data && <ContentRenderer contentData={data} isAdmin={false} />}

                <a href="https://ampri.res.in/en/RIA_Form.pdf" className="text-red-700 font-bold ml-[4.5vw] cursor-pointer">Download Form</a>
            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default FacilitiesOfObtainingInformation