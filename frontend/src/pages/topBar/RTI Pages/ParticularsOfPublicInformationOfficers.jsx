// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Names, designations and other particulars of the Public Information Officers",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "Appellate Authority",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "subHeading",
                "para": "Dr. Mohd. Akram Khan",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "paragraph",
                "para": "Senior Principal Scientist",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "paragraph",
                "para": "Advanced Materials and Processes Research Institute, (AMPRI)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },
            {
                "type": "paragraph",
                "para": "Hoshangabad  Road, Near Habibganj Naka, Bhopal-462064 (M.P.)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },
            {
                "type": "paragraph",
                "para": "Phone No. : 0755-2485078 (M)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            },
            {
                "type": "paragraph",
                "para": "Fax No.:0755-2457042",
                "src": "",
                "alt": "",
                "items": [],
                "order": 7
            },
            {
                "type": "paragraph",
                "para": "Email : akram.ampri@csir.res.in",
                "src": "",
                "alt": "",
                "items": [],
                "order": 8
            },


            {
                "type": "heading",
                "para": "Transparency Officer",
                "src": "",
                "alt": "",
                "items": [],
                "order": 9
            },
            {
                "type": "subHeading",
                "para": "Shri Somnath Mazumder",
                "src": "",
                "alt": "",
                "items": [],
                "order": 10
            },
            {
                "type": "paragraph",
                "para": "Controller of Administration",
                "src": "",
                "alt": "",
                "items": [],
                "order":11
            },
            {
                "type": "paragraph",
                "para": "Advanced Materials and Processes Research Institute, (AMPRI)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 12
            },
            {
                "type": "paragraph",
                "para": "Hoshangabad  Road, Near Habibganj Naka, Bhopal-462064 (M.P.)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 13
            },
            {
                "type": "paragraph",
                "para": "Phone No. : 0755-2485600 (O) : 0755-2488975 (R)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 14
            },
            {
                "type": "paragraph",
                "para": "Fax No.:0755-2488985, 2488323",
                "src": "",
                "alt": "",
                "items": [],
                "order": 15
            },
            {
                "type": "paragraph",
                "para": "Email :  cao.ampri@csir.res.in",
                "src": "",
                "alt": "",
                "items": [],
                "order": 16
            },


            {
                "type": "heading",
                "para": "Public Information Officer",
                "src": "",
                "alt": "",
                "items": [],
                "order": 17
            },
            {
                "type": "subHeading",
                "para": "Mr. Vivek Khare, (PIO)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 18
            },
            {
                "type": "paragraph",
                "para": "Section Officer",
                "src": "",
                "alt": "",
                "items": [],
                "order":19
            },
            {
                "type": "paragraph",
                "para": "Advanced Materials and Processes Research Institute, (AMPRI)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 20
            },
            {
                "type": "paragraph",
                "para": "Hoshangabad  Road, Near Habibganj Naka, Bhopal-462064 (M.P.)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 21
            },
            {
                "type": "paragraph",
                "para": "Phone No. : 0755-2478629",
                "src": "",
                "alt": "",
                "items": [],
                "order": 22
            },
            {
                "type": "paragraph",
                "para": "Fax No.:0755-2488985, 2488323",
                "src": "",
                "alt": "",
                "items": [],
                "order": 23
            },
            {
                "type": "paragraph",
                "para": "Email : vivek.khare@csir.res.in",
                "src": "",
                "alt": "",
                "items": [],
                "order": 24
            },


            {
                "type": "heading",
                "para": "Nodal Officer",
                "src": "",
                "alt": "",
                "items": [],
                "order": 25
            },
            {
                "type": "subHeading",
                "para": "Mr.  Narendra Singh",
                "src": "",
                "alt": "",
                "items": [],
                "order": 26
            },
            {
                "type": "paragraph",
                "para": "Senior Scientist & Nodal Officer",
                "src": "",
                "alt": "",
                "items": [],
                "order":27
            },
            {
                "type": "paragraph",
                "para": "Advanced Materials and Processes Research Institute, (AMPRI)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 28
            },
            {
                "type": "paragraph",
                "para": "Hoshangabad  Road, Near Habibganj Naka, Bhopal-462064 (M.P.)",
                "src": "",
                "alt": "",
                "items": [],
                "order": 29
            },
            {
                "type": "paragraph",
                "para": "Phone : 0755 2457244",
                "src": "",
                "alt": "",
                "items": [],
                "order": 30
            },
            {
                "type": "paragraph",
                "para": "Fax No.:",
                "src": "",
                "alt": "",
                "items": [],
                "order": 31
            },
            {
                "type": "paragraph",
                "para": "Email: nsingh.ampri@csir.res.in",
                "src": "",
                "alt": "",
                "items": [],
                "order": 32
            },
        	
        ],
        "tabs": []
    },

}

function ParticularsOfPublicInformationOfficers({ isAdmin }) {

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

export default ParticularsOfPublicInformationOfficers