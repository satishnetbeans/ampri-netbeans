import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Rajbhasha Cell",
  pageContent: {
    content: [
      { type: "subHeading", para: "AMPRI Rajbhasha Activities" },
      {
        type: "paragraph",
        para: "The Raajbhasha Cell of the Institute takes up the responsibility of the implementation of the Official Language Policy of Govt. of India. Under this activity, monitoring of the implementation through quarterly meetings of Official Language Implementation Committee of the Institute, organizing one workshop in every quarter, organizing Hindi Day/Hindi Saptah, purchase of Hindi books in the library, cash prizes to the staff for doing their official work In Hindi, publication of Sopan – the Rajbhasha magazine of he institute and organizing  popular lectures in Hindi are being carried out. As we are a R&D institute, technical workshops in Hindi are being organized at regular intervals."
      },
      {
        type: "paragraph",
        para: "Apart from this, we are fulfilling the tasks of bringing out all the publications in bilingual form, compliance of section 3(3) of Official Language Act and Rule 11 of Official Language Act 1976 of Govt. of India and making our Website in bilingual form. These activities will certainly help us fulfilling the task of Implementation of Official Language Policy of Govt. of India in the Institute."
      }
    ]
  }
}

function RajbhashaCell({ isAdmin }) {
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

export default RajbhashaCell