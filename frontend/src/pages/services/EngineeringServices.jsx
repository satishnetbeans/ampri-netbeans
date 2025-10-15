// @ts-nocheck
import React, { useState, useEffect } from "react"
import { fetchEngineeringServices } from "../../api/axios"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"


function EngineeringServices({ isAdmin }) {
  const [EngineeringServices, setEngineeringServices] = useState(null)
      useEffect(() => {
          const getAbout = async () => {
              try {
                  const res = await fetchEngineeringServices()
                  if (res.data) {
                      const data =res.data
                      data.pageContent.content.sort((a, b) => a.order - b.order)
                      setEngineeringServices(data)
                      console.log("aboutAmpri : " , data)
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
      {EngineeringServices && <ContentRenderer contentData={EngineeringServices} isAdmin={isAdmin} />}
        
      </div>

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default EngineeringServices