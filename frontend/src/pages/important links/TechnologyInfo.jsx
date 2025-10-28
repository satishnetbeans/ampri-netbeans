// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"

import DataTable from "../../components/ui/DataTableRender"


const data = [
  {
    order: 1,
    title: "Shape Memory Alloy Actuated Unlatching/Unlocking Lid Device for Engineering Applications",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/07/AMPRI_leaflet_for-Lid_unlatch_actuator_pdf.pdf",
      },
    ],
  },
  {
    order: 2,
    title: "Lead Free X-ray Shielding Red Mud Tiles",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/04/2023-EOI-T-Smart-Material-Actuators-for-Automobile-Applications-.pdf",
      },
    ],
  },
  {
    order: 3,
    title: "Smart Material Actuators for Automobile Applications",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/04/2023-EOI-T-Smart-Material-Actuators-for-Automobile-Applications-.pdf",
      },
    ],
  },
  {
    order: 4,
    title: "Parali Hybrid Composite",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/07/2023-EOI-for-technology-Parali-Hybrid-Composite.pdf",
      },
    ],
  },
  {
    order: 5,
    title: "A novel Wall Cladding Panels/ Tiles developed using Zero Liquid Discharge Residue, Grasim Industries Limited, Nagda",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/08/Technology_WallCladdingPanelsTiles.pdf",
      },
    ],
  },
  {
    order: 6,
    title: "DEVELOPMENT OF BIO-BINDER FOR MAKING BIO-COMPOSITES FROM BAMBOO/OTHER NATURAL RESOURCES – A GREEN & SUSTAINABLE APPROACH",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/09/DEVELOPMENTofBIO-BINDER-Based_BIO-COMPOSITESTechnology.pdf",
      },
    ],
  },
  {
    order: 7,
    title: "Nano-adsorbent Based Filter for the Arsenic and Fluoride Free Drinking Water",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/10/EOI_for_CSIR-AMPRI_WaterTechnology.pdf",
      },
    ],
  },
  {
    order: 8,
    title: "Intelligent Sensors and alarms for smoke, heat and fire",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/01/EOI_IntelligentSensors.pdf",
      },
    ],
  },
  {
    order: 9,
    title: "RTP-CVD Graphene (Bi-layer to few layer) as flexible lightweight heat sink applications",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/01/EoI_RTP-CVD-Graphene.pdf",
      },
    ],
  },
  {
    order: 10,
    title: "Rapid Thermal Processing – Chemical Vapour Deposition (RTP-CVD) of Graphene",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/01/EOI_RTP-CVD.pdf",
      },
    ],
  },
  {
    order: 11,
    title: "Joint Free Gamma and Neutron Shielding Bricks for Building X-ray Diagnostic Centers till Nuclear Power Plants",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/02/EOI_Gamma_neutron_shield.pdf",
      },
    ],
  },
];

const columns = ["order", "title", "detail/download"];



function TechnologyInfo({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {data && <DataTable
                columns={columns}
                data={data}
                entriesPerPageOptions={[10, 25, 50]}
                title="Decision making process (including channels of supervision and accountability)"
                from="TechnologyInfo"
              
                

                isAdmin={false}
            />}

            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default TechnologyInfo