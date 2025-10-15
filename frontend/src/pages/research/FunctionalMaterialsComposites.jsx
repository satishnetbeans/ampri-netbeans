// @ts-nocheck
import React ,{ useState, useEffect } from "react"
import { fetchFMCD } from "../../api/axios"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"



function FunctionalMaterialsComposites({ isAdmin }) {
    const [FMCD, setFMCD] = useState(null)
        useEffect(() => {
            const getFMCD = async () => {
                try {
                    const res = await fetchFMCD()
                    if (res.data) {
                        const data =res.data
                        data.pageContent.content.sort((a, b) => a.order - b.order)
                        setFMCD(data)
                        console.log("LWMD : " , data)
                    } else {
                        console.log(res.error)
                    }
                } catch (error) {
                    console.log(error)
    
                }
            }
            getFMCD()
        }, [])
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            {FMCD && <ContentRenderer contentData={FMCD} isAdmin={isAdmin}/>}
            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default FunctionalMaterialsComposites