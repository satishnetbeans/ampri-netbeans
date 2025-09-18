import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Dispensary",
  pageContent: {
    content: [
      { type: "subHeading", para: "AMPRI Dispensary" },
      {
        type: "paragraph",
        para: "In order to take care of health needs of the employees of the institute and their families, AMPRI has set up a health care (Dispensary) unit within its premises. A resident medical officer looks after the health needs of the staff and their families. The centre is also looked after by a part time homeopathic doctor during 04:00 PM to 07:00 PM.  Medical services are  also provided  by a part time allopathic doctor from 08:00 AM to 12:00 AM and 04:00 PM to 07:00 PM in the absence of the resident medical officer. The allopathic doctor also makes necessary arrangements for first aid and specialized services by engaging suitable medical experts and service providers."
      }
    ]
  }
}

function Dispensary({ isAdmin }) {
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      {/* Reusable ContentRenderer */}
      <ContentRenderer contentData={csrAmpri} />

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default Dispensary
