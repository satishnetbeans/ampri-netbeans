// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "NORMS FOR DISCHARGE OF FUNCTIONS",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "The Formulation/Implementation of Policies of CSIR-AMPRI, Bhopal",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "The Governing Body of Council of Scientific & Industrial Research, keeping in view Five Year Plans, National priorities and opportunity area, formulates the policies. The procedure for such formulation / implementation of policies are provided in the Rules & Regulation and bye-laws of Council of Scientific & Industrial Research.-CSIR-AMPRI is guided in all its activities by the controlling authority i.e. Council of Scientific & Industrial Research, and based on the directives the internal policies & road maps are drawn at the lab level by the Head of the Laboratory i.e. Director. The Head of the Laboratory is assisted by a Research Council comprising of external experts in the area of the Research & Development of the Laboratory to advice in the formulation of R & D Programmes and future directions of the activities to be pursued by the Laboratory.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "paragraph",
                "para": "The Director, CSIR-AMPRI is also assisted by the Management Council of the Laboratory for managing the affairs of the Laboratory within the framework of rules & regulations, the directions and guidelines which are issued by the Society, Governing Body, and Director General.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "paragraph",
                "para": "The formulation of policies are done at the Governmental level and the laboratory implements its decision. The National priorities are drawn by the Council of Scientific & Industrial Research for implementation/execution by the respective labs. In order to achieve the goals, the Research Council advises on the formulation of the strategic plans of the laboratory and Management Council assists in the management of the affairs of the laboratory in implementation goals set by the laboratory. The interest of the public at large is duly considered by the experts nominated from industry and academics on the Research Council. In view of the strategic plans to be drawn in achieving the goals, the public participation in the meetings for such councils is limited to the extent of the members nominated on such councils.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            }
        ],
        "tabs": []
    },

}

function NormsDischargeFunctions({ isAdmin }) {

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

export default NormsDischargeFunctions