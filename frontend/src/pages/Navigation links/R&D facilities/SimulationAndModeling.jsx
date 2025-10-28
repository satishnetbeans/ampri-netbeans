// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Simulation and Modeling",
    "pageContent": {
        "content": [
            {
                "type": "subHeading",
                "para": "Computer Simulation, Modelling & Design",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "AMPRI carried out work  in the areas of computer simulation of manufacturing processes, material modeling, material informatics, software development etc. The overall objective in this case has been to model, simulate and design material, process and components, including die design and CAE-CAD-CAM integration. Work has been carried out pertaining to modelling the process of material synthesis (casting) and deformation like forging, rolling, extrusion, sheet bending, deep drawing, spring back, hole flanging nozzle pull out, metal casting, structural optimization, fracture mechanics, impact & penetration mechanics, thin film growth, nanomaterials etc. Studying the role of various deformation and casting parameters like strain, strain rate, temperature, die design, pouring speed etc. on the characteristics of the end product constitutes a major activity.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },
            {
                "type": "paragraph",
                "para": "Works have been carried out for agencies like General motors, BHEL, NFTDC, TIFAC and others",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "subHeading",
                "para": "Analysis of Spring-Back in Sheet Metal Bending",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },

            {
                "type": "paragraph",
                "para": "Elastoplastic finite element simulation of sheet metal bending process has been carried out to predict springback. The springback is a phenomenon that occurs due to elastic recovery of materials. It is a major failure mode and plays a significant role in designing a die for any sheet metal forming process. In this work, the effects of geometrical, material and process parameters on springback have been studied. The role of load that can control or reduce the springback has also been studied. The FE simulation results of sheet metal bending process have also been validated through experimental observations. A very good agreement between the two has been noticed. The study is very useful in designing pressure vessels, nuclear reactor, LPG, petrol storage tanks etc.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },
            {
                "type": "subHeading",
                "para": "Simulation of Porthole Die Extrusion",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            },

            {
                "type": "paragraph",
                "para": "Finite element analysis of the extrusion process is based on the Lagrangian approach. Application of this approach poses a lot of computational problems while simulating extrusion process in a porthole die. This is in view of a high degree of shearing of material involved in this process that makes the mesh distortion so acute that no amount of rezoning can rectify the mesh. Accordingly, simulation of tube extrusion through porthole die has been performed using casting simulation software based on Eulerian approach. The viscosity of the billet has been adjusted to match with the mechanical properties of the solid billet. Simulation studies carried have also been validated through experimental observations wherein a good agreement has been observed between the two.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 6
            },
            {
                "type": "subHeading",
                "para": "Software Development, Mathematical Modelling and Computer Simulation",
                "src": "",
                "alt": "",
                "items": [],
                "order": 7
            },

            {
                "type": "paragraph",
                "para": "AMPRI has also been instrumental in developing a software namely FINEART. After successful testing, the FINEART software was successfully launched. M/s Crave Software International Ltd. Bangalore has been chosen as a strategic partner for its marketing.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 8
            },

        
        ],
        "tabs": []
    },

}

function SimulationAndModeling({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            {data && <ContentRenderer contentData={data} isAdmin={false} />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default SimulationAndModeling