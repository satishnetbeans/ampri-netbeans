// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import { fetchSCMD } from "../../api/axios"



function SustainableConstructionMaterials({ isAdmin }) {
    const [SCMD, setSCMD] = useState(null)
    useEffect(() => {
        const getSCMD = async () => {
            try {
                const res = await fetchSCMD()
                if (res.data) {
                    const data = res.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setSCMD(data)
                    console.log("SCMD : ", data)
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getSCMD()
    }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable Con
            tentRenderer component */}
            {SCMD && <ContentRenderer contentData={SCMD} isAdmin={isAdmin} />}
            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default SustainableConstructionMaterials