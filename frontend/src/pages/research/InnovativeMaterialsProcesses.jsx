// @ts-nocheck
import React, { useState, useEffect } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

import { fetchIMPD } from "../../api/axios"



function InnovativeMaterialsProcesses({ isAdmin }) {
    const [IMPD, setIMPD] = useState(null)
    useEffect(() => {
        const getIMPD = async () => {
            try {
                const res = await fetchIMPD()
                if (res.data) {
                    const data = res.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setIMPD(data)
                    console.log("IMDD : ", data)
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getIMPD()
    }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            {IMPD && <ContentRenderer contentData={IMPD} isAdmin={isAdmin} />}
            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default InnovativeMaterialsProcesses