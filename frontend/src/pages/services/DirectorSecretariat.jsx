// @ts-nocheck
import React, { useState, useEffect } from "react"
import { fetchDirectorsecretariat } from "../../api/axios"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"


function DirectorSecretariat({ isAdmin }) {
  const [Directorsecretariat, setDirectorsecretariat] = useState(null)
  useEffect(() => {
    const getAbout = async () => {
      try {
        const res = await fetchDirectorsecretariat()
        if (res.data) {
          const data = res.data
          data.pageContent.content.sort((a, b) => a.order - b.order)
          setDirectorsecretariat(data)
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
        {Directorsecretariat && <ContentRenderer contentData={Directorsecretariat} isAdmin={isAdmin} />}

      </div>

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default DirectorSecretariat