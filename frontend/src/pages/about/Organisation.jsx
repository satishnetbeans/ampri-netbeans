import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"


function Organisation({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            <div className="w-[95%] mx-auto my-9 bg-white px-8 py-5 rounded-3xl ">
                <h1 className="text-4xl font-bold mb-8 text-[#004080] text-center">
                    Organizational Structure
                </h1>

                <div>
                    <img src="https://ampri.res.in/en/wp-content/uploads/2018/06/organization.png" alt="Organisation" />
                </div>

            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default Organisation
