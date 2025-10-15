// @ts-nocheck
import React, { useState, useEffect } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import { fetchEESD } from "../../api/axios"


function EnergyEnvironmentalSolutions({ isAdmin }) {
    const [aboutAmpri, setaboutAmpri] = useState(null)
    useEffect(() => {
        const getAbout = async () => {
            try {
                const res = await fetchEESD()
                if (res.data) {
                    const data = res.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setaboutAmpri(data)
                    console.log("aboutAmpri : ", data)
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getAbout()
    }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            {aboutAmpri &&<ContentRenderer from="EESD" contentData={aboutAmpri} isAdmin={isAdmin} /> }
            

            <br />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default EnergyEnvironmentalSolutions
