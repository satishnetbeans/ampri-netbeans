// @ts-nocheck
import React, { useState, useEffect } from "react"
import { fetchHRdevelopment } from "../../api/axios"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"


function HumanResourcePage({ isAdmin }) {
  const [HumanResourcePage, setHumanResourcePage] = useState(null)
  useEffect(() => {
    const getAbout = async () => {
      try {
        const res = await fetchHRdevelopment()
        if (res.data) {
          const data = res.data
          data.pageContent.content.sort((a, b) => a.order - b.order)
          setHumanResourcePage(data)
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
      <div>
        <Topbar isAdmin={isAdmin} />
        <Navbar isAdmin={isAdmin} />
      </div>

      {/* Reusable ContentRenderer */}
      <div className="flex-grow">
        {HumanResourcePage && <ContentRenderer contentData={HumanResourcePage} isAdmin={isAdmin} />}
      </div>


      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default HumanResourcePage
