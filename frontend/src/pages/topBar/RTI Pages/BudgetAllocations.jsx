// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import DataTable from "../../../components/ui/DataTableRender"


const data = [
    {
        order: 1,
        "Total Budget Salaries": 337.500,
        "Total Chem. & Cos.": 20.000,
        "Total Lab. Assets": 77.315,
        "Total Budget (National Lab.)": 434.815,
        "Total Central Admn .": 33.000,
        "Total Central Admn.": 33.000
     
    },

];

const columns = ["Total Budget Salaries", "Total Chem. & Cos." ,"Total Lab. Assets" ,"Total Budget (National Lab.)" ,"Total Central Admn .","Total Central Admn."];


function BudgetAllocations({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            {data && <DataTable
                columns={columns}
                data={data}
                entriesPerPageOptions={[10, 25, 50]}
                title="Budget allocations (all plans, proposed expenditures and reports on disbursements)"
                from="BudgetAllocations"

                isAdmin={false}
            />}

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default BudgetAllocations