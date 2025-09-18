import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
    title: "Workshop",
    pageContent: {
        content: [
            { type: "subHeading", para: "AMPRI Workshop" },
            {
                type: "paragraph",
                para: "The workshop is capable of providing technical support in terms of preparing test specimens and offering assistance needed to conduct experiments in general. It is equipped with various mechanical facilities to carry out drilling, milling and machining operations needed for the preparation of experimental specimens/jobs. It also helps in general maintenance  work from time to time."
            },
            {
                type: "list", para: " Facilities  available:", items: [
                    "CNC Turn Mill CTX 310 Graziano",
                    "Horizontal milling Machine, Botliboi Make",
                    "Lathe Machine LB17, HMT Make",
                    "Lathe Machine GNM-2.",
                    "Drilling Machine",
                    "Radial drilling Machine,HMT",
                    "Shaper Machine",
                    "Surface Grinding Machine",
                    "Pedstal Grinding Machine",
                    "Super Cut Saw (Band Saw) Machine",
                    "Power Saw Machine",
                    "TIG Welding Machine",
                    "Are Welding Machine (SMAW)",
                    "Gas Welding Brazing facility"
                ]
            },
        ]
    }
}

function Workshop({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <ContentRenderer contentData={csrAmpri} />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default Workshop