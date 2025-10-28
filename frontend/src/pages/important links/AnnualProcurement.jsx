// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"

import DataTable from "../../components/ui/DataTableRender"


const data = [
  {
    order: 1,
    title: "Procurement Plan 2025-26",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/08/2025-26-AnnualProcurementPlan07082025.pdf",
      },
    ],
  },
  {
    order: 2,
    title: "Procurement Plan 2025-26 (Centralized Software Requirement)",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/09/APP2025-26-SoftwareRelated.pdf",
      },
    ],
  },
  {
    order: 3,
    title: "Procurement Plan 2025-26 (IT Related Consumables)",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/07/2025-26-IT-Consumables.pdf",
      },
    ],
  },
  {
    order: 4,
    title: "Procurement Plan APP_GAP-131",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/08/APP_GAP-131.pdf",
      },
    ],
  },
  {
    order: 5,
    title: "Procurement Plan APP_GAP-144",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/08/APP_GAP-144.pdf",
      },
    ],
  },
  {
    order: 6,
    title: "Procurement Plan APP_GAP-155",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/08/APP_GAP-155.pdf",
      },
    ],
  },
  {
    order: 7,
    title:
      "Procurement Plan of CSIR-AMPRI Major Lab Project, “Centre of Excellence in Graphene and its Applications” & “Graphene reinforced metal matrix composites through powder bed additive manufacturing for aerospace and defense applications” Plan for the year 2024 and 2025",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/10/Procurementplan_24-25_-MLP0301andMLP0307.pdf",
      },
    ],
  },
  {
    order: 8,
    title: "Procurement Plan 2024-25",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2025/03/2024-25-ProcurementPlanV6-2024-2025.pdf",
      },
    ],
  },
  {
    order: 9,
    title:
      "Advanced Multi-functional AsbestosFree Thermal Insulating Material-A Gizmo for Energy Conservation",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2022/12/PPD-20221226-0_APP_GAP116.pdf",
      },
    ],
  },
  {
    order: 10,
    title:
      "Centre of Excellence in Graphene and its Applications” & “Graphene reinforced metal matrix composites through powder bed additive manufacturing for aerospace and defense applications",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/01/PPD-20230103-Procurement-plan-MLP0301-MLP0307.pdf",
      },
    ],
  },
  {
    order: 11,
    title:
      "Monitoring of Mixing Height Profile of atmosphere for Jamshedpur city using SODAR System",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/04/20230403-PPD-Procurement-Plan-SSP0064.pdf",
      },
    ],
  },
  {
    order: 12,
    title: "Procurement Plan Apparatus",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/05/2023-Procurement-Plan-Apparatus.pdf",
      },
    ],
  },
  {
    order: 13,
    title: "Procurement Plan Chemical Consumable",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/05/2023-Procurement-Plan-Chemical-and-Consumable.pdf",
      },
    ],
  },
  {
    order: 14,
    title:
      "P50 budget head: Annual procurement plan (apparatus equipment/IT equipment)",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/03/2023-24-Annual-procurement-plan-for-P50-equipment-V7.pdf",
      },
    ],
  },
  {
    order: 15,
    title: "P07 budget head: Annual procurement plan (Consumable Items)",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2024/01/2023-24-Annual-Procurement-Plan-for-P07-V1.pdf",
      },
    ],
  },
  {
    order: 16,
    title:
      "Annual Procurement Plan of HCP-54-WP4 Project, GAP0118 and P50",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/11/AAP-HCP-54-WP4ProjectGAP0118andP50.pdf",
      },
    ],
  },
  {
    order: 17,
    title: "Annual Procurement Plan of HCP-54 FBR1",
    "detail/download": [
      {
        name: "[Click Here]",
        url: "https://ampri.res.in/en/wp-content/uploads/2023/11/AAP-HCP-54-FBR1.pdf",
      },
    ],
  },
];

const columns = ["order", "title", "detail/download"];



function AnnualProcurement({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

           
            {data && <DataTable
                columns={columns}
                data={data}
                entriesPerPageOptions={[10, 25, 50]}
                title="Decision making process (including channels of supervision and accountability)"
                from="AnnualProcurement"
              
                

                isAdmin={false}
            />}

            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default AnnualProcurement

