// @ts-nocheck
import React, { useState, useEffect } from "react"
import { fetchWorkshop } from "../../api/axios"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"


function Workshop({ isAdmin }) {
    const [Workshop, setWorkshop] = useState(null)
    useEffect(() => {
        const getAbout = async () => {
            try {
                const res = await fetchWorkshop()
                if (res.data) {
                    const data = res.data
                    data.pageContent.content.sort((a, b) => a.order - b.order)
                    setWorkshop(data)
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
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <div className="flex-grow">
            {Workshop && <ContentRenderer contentData={Workshop} isAdmin={isAdmin} />}

            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default Workshop