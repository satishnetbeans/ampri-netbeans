// @ts-nocheck
import React, { useState, useEffect } from "react"
import { fetchCSR } from "../api/axios"
import Navbar from "../components/ui/Navbar"
import Topbar from "../components/ui/Topbar"
import Footer from "../components/ui/Footer"
import ContentRenderer from "../components/ui/ContentRenderer"





function CSR({ isAdmin }) {
  const [CSR, setCSR] = useState(null)
      useEffect(() => {
          const getAbout = async () => {
              try {
                  const res = await fetchCSR()
                  if (res.data ) {
                      const data = res.data
                      data.pageContent.content.sort((a, b) => a.order - b.order)
                      setCSR(data)
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

      {/* Reusable ContentRenderer */}
      {CSR && <ContentRenderer contentData={CSR} isAdmin={isAdmin} />}


      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default CSR
