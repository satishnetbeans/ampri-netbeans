import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
// { type: "paragraph", para: "" }
// Example document without tabs
export const aboutAmpri = {
    title: "Innovative Materials and Processes Division (IMPD)",
    pageContent: {
        content: [
        ]
    }
}

function InnovativeMaterialsProcesses({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            <ContentRenderer contentData={aboutAmpri} />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default InnovativeMaterialsProcesses