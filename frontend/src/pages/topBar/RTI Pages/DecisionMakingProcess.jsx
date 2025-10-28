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
        "Nature of Powers": "Sanction EL/LTC/GPF withdrawal/ Advance",
        Delegation: "HOD",
    },
    {
        order: 2,
        "Nature of Powers": "Acceptance of resignation of Project Assistants, Project Associates, Interns, JRF’s, SRF’s, RA’s.",
        Delegation: "HOD",
    },
    {
        order: 3,
        "Nature of Powers": "Permitting S&T staff to make oral/ Poster presentation in conference/ Seminars also sanctioning the pertaining registration fee, etc.",
        Delegation: "HOD",
    },
    {
        order: 4,
        "Nature of Powers": "Sanction of EL/LTC/GPF withdrawal/ Advance in respect of staff working in administration, Store & Purchase and Finance & Accounts.",
        Delegation: "COA",
    },
    {
        order: 5,
        "Nature of Powers": "Sanction of tours under project (External & CSIR) funds for all S&T/ JRF/ SRF/ RA’s/ Project personnel working under them.",
        Delegation: "HOD",
    },
    {
        order: 6,
        "Nature of Powers": "Sanction of tours (Project funds) in respect of all staff working in Administration/ Stores & Purchase and Finance & Accounts Sections.",
        Delegation: "COA",
    },
    {
        order: 7,
        "Nature of Powers": "Financial sanction for expenditure on account of Telephone charges, Electricity charges, Water charges, POL charges, Postal/Courier charges, Newspaper charges, Reimbursement of tuition fees charges, Payment of labour contractors & Job contract.",
        Delegation: "COA",
    },
    {
        order: 8,
        "Nature of Powers": "Reimbursement of routine medical bills & bills for supply of medicines as per rules.",
        Delegation: "COA",
    },
];

const columns = ["order", "Nature of Powers", "Delegation"];


function DecisionMakingProcess({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            {data && <DataTable
                columns={columns}
                data={data}
                entriesPerPageOptions={[10, 25, 50]}
                title="Decision making process (including channels of supervision and accountability)"
                from="DecisionMakingProcess"
              
                

                isAdmin={false}
            />}

            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default DecisionMakingProcess