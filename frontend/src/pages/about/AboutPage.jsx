import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
// { type: "paragraph", para: "" }
// Example document without tabs
export const aboutAmpri = {
    title: "About CSIR-AMPRI",
    pageContent: {
        content: [

            { type: "paragraph", para: "Advanced Materials and Processes Research Institute (AMPRI), Bhopal was instituted in May 1981 as “Regional Research Laboratory” (RRL) and officially started functioning from CSIR, New Delhi.  The institute was then shifted to Bhopal and was located in the then Bhopal (now Barkatullah) University campus. It subsequently found a place in the present premises in December 1983; the premise which was originally built to accommodate a Cooperative Training College.  The laboratory initially had about 15 scientists, with 10 of them specializing in metallurgy/materials science. This was the core strength of the institute at that time." },
            { type: "paragraph", para: "The institute carried out projects on the synthesis and characterization of aluminum-graphite metal matrix composites and natural fibres. Gradually the scope of R&D broadened to include waste to wealth (building materials and wood substitute), mineral processing, environmental impact assessment, water resource modelling and problems related to agricultural, mining, sugar mill and thermal power plant machinery components. Health assessment, improvement and failure analysis of engineering components/systems and development of lightweight materials/components/products and processes for the automobile sector constituted other activities of significance. The work was extended with FEM simulation and modelling which became an integral part of the studies in many cases. Through its activities on water resource modelling, surface treated agricultural implements, bell metal artefacts, handicrafts using sisal fibre, use of fly ash for agricultural soil reclamation, etc., it became visible as a promising institute for rural technologies specific to problems related to the state of Madhya Pradesh." },
            { type: "paragraph", para: "The Governing Body of the Council of Scientific & Industrial Research renamed all its five Regional Research Laboratories (RRLs) to enable them to reflect a futuristic outlook. The changed profiles of the laboratories with respect to their direction of growth, orientation of expertise and accumulated excellence have all been weighed in while rechristening them. The name change from Regional Research Laboratory, Bhopal to Advanced Materials and Processes Research Institute (AMPRI) is effective from March 6, 2007. In consonance with the new identity, R&D programmes in lightweight materials such as Al and Mg alloys, metallic and polymer based composites, foams, and functional materials; nano-materials; new materials based on industrial wastes such as fly ash and red mud; and CSIR-800 projects of societal relevance have been undertaken. These programmes have a industry/user link from inception stage. A state of the art processing and characterization facility and simulation modelling capabilities are being set up to trigger new materials development, innovations and improvements." },
            { type: "subHeading", para: "Current Programmes and Future Perspectives" },
            { type: "paragraph", para: "The present manpower includes 43 scientists (against the sanctioned strength of 56) that are well trained in different disciplines of materials science and other related areas along with 86 supporting staff. The number of scientists is planned to increase to ~80 in the near future in view of the widened range of R&D activities. AMPRI is equipped with modern facilities for material synthesis, processing and property characterization such as SEM, pressure die casting machine, semisolid processing unit, rolling mill, Mg melting unit etc. FESEM, cryomilling unit and those related to nanoscale R&D are being established." },
            {
                type: "list", para: "The current activities of AMPRI are broadly categorised under:", items: [
                    "Lightweight Materials",
                    "Nanostructured Materials",
                    "Smart and Functional materials",
                    "Waste to Wealth",
                    "CSIR-800"
                ]
            },
            { type: "paragraph", para: "In the category of lightweight materials, important activities relate to Al metal matrix composites, polymer matrix composites, Al foam and Mg-based alloys. AMPRI has laid a major emhasis on lightweight materials development like Al foam, Mg-based alloys, in-situ MMCs and nanostructured materials. Also, activities on electromagnetic forming, smart and functional materials, steel and Ti foams, and materials modelling and design are in the offing." },
            { type: "paragraph", para: "In the area of Waste to Wealth, the institute largely worked on the utilization of flyash and Redmud. The institute has developed wood substitute technology using redmud, flyash and natural fibers and has potential applications for making doors, panels, partitions and furniture. AMPRI has developed Radiation Shielding Materials from Red Mud and holds a US Patent on the work. The potential applications of this technology will be for the shielding of gamma and neutron in nuclear power plants and for diagnostic X-ray shielding in X-ray and CT scan rooms." },
            { type: "paragraph", para: "AMPRI has worked on various rural development and dissemination activities which will have large implications for CSIR-800. During 11th Five Year Plan the institute has taken up a project under Rural Sector Projects – Sisal Fiber Technologies for Rural Employment Generation. Sisal plant produces the hardest vegetable fiber which will have applications in cordage and handicrafts. The yarn and textile made out of this fiber is used for making composites for applications in sectors like housing, automobile, geotextiles, etc." },
            { type: "paragraph", para: "The overall objective of AMPRI is to achieve a world-class status in the area of engineering materials, component and process development. Accordingly, the HR Profile and S&T infrastructure would address to the needs of fundamental and applied research, technology development and business development in the area of materials of the future. The present resource base being created would not only provide commercial tractability for the present but also provide a root for more lucrative, elite and innovative areas of the future. It is envisaged to make the institute a place of pilgrimage for top material scientists and the stakeholders." },

        ]
    }
}


function AboutPage({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            <ContentRenderer contentData={aboutAmpri} />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default AboutPage
