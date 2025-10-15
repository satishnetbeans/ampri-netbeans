// @ts-nocheck
import React, { useState, useEffect } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

import { fetchIMDD } from "../../api/axios"


function IntelligentMaterialsDevices({ isAdmin }) {
    const [IMDD, setIMDD] = useState(null)
    useEffect(() => {
        const getIMDD = async () => {
            try {
                const res = await fetchIMDD()
                if (res.data) {
                    const data = res.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setIMDD(data)
                    console.log("IMDD : ", data)
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getIMDD()
    }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRender component */}
            {IMDD && <ContentRenderer contentData={IMDD} isAdmin={isAdmin} />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default IntelligentMaterialsDevices