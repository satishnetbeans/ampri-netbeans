// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "CATEGORIES OF DOCUMENTS",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "Documents Held Under the Control of CSIR-Advanced Materials and Processes Research Institute",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "The official documents are available under the control of the respective Heads, such as Controller of Administration for administrative documents, Finance & Accounts Officer for documents relating to payments and Purchase documents with the Controller of Stores & Purchase etc.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            }

        ],
        "tabs": []
    },

}

function CategoriesOfDocuments({ isAdmin }) {

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <div className="flex-grow">
                {data && <ContentRenderer contentData={data} isAdmin={false} />}

            </div>


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default CategoriesOfDocuments