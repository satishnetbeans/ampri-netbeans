// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Significant Contributions",
    "pageContent": {
        "content": [
            {
                "type": "subHeading",
                "para": "Significant Contributions",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "R & D programs of AMPRI in Metallurgy & Material emerged through integration of existing capabilities and linkages in the areas like Metal Matrix Composites FRP Components, Surface Engineering, performance improvement of mine and agriculture implements. Specialized technical services for failure investigation of component, structure for thermal power stations attracted considerable attention.  The Institute  carried out projects  on improved materials for mining implements, farm implements, surface engineering, innovative coal preparation and beneficiation techniques, fly ash utilization in land development for agriculture, environmental studies and water resource management.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "paragraph",
                "para": "In the area of building materials, AMPRI continued work on wood substitutes, fly ash bricks, mineral wool panels and integrated components designed using various software packages.  Construction of 16 apartments using innovative techniques like, pre cast roof and new materials like wood substitutes, clay fly ash bricks and red mud cementitious binder was completed.  This was done under the assistance of National Building organization.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "paragraph",
                "para": "AMPRI  undertook major assignment sponsored by the state Directorate of Sericulture on irrigation management in sericulture farms. The works involved water management in irrigation potential in Rajgarh, Bilaspur and Sarguja district of MP.  A watershed development project in Raisen Dist. under the Rajiv Gandhi Mission of Watershed Development launched by the State Govt. was also implemented by AMPRI.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },

            {
                "type": "paragraph",
                "para": "In the area of mineral processing, the activities centered around laboratory and plant level trails on innovative coal/mineral preparation equipment. These included Vorsyl separator, water only cyclone, Dyna Whirpool, air sparged  hydro cyclone , multi gravity separator and tri flow separator .",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },


            {
                "type": "paragraph",
                "para": "AMPRI  undertook  assignments on environmental impact assessment, risk assessment, environmental and safety auditing, effluent treatment and industrial Reliance Petrochemical, TMS Shipping Corpn. , HEG Ltd., Bhopal, Rashtriya Chemical and Ferilizers, Sri Ishar group, Indore.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            },
            {
                "type": "paragraph",
                "para": "A major  project of setting up Technology Development Resources Centre (TDC) network under UNDP-DST Govt. of India project on technology management  was entrusted to the laboratory.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 7
            },
            {
                "type": "list",
                "para": "For some of these actvities highlight see below :",
                "src": "",
                "alt": "",
                "items": [
                    "Machinery Components",

                    "Materials Development",

                    "Environmental Studies",

                    "Water Resource Management",

                    "Health Assessment of Structures",

                    "Instant House",

                    "Hydro Fracturing of Clogged Bore Wells",

                    "Mineral Processing",

                    "Polymeric Materials",

                    "Computer Simulation and Process Modeling",

                    "Archaeometallurgy",

                    "Clay Fly Ash Bricks",

                    "Fly Ash Paints and Composites",

                    "Flyash Applications in agriculture",
                    "Support to Rural Technology Development "
                ],
                "order": 8
            }
        ],
        "tabs": []
    },

}

function SignificantContributions({ isAdmin }) {

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

export default SignificantContributions