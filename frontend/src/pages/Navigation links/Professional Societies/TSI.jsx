// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import DataTable from "../../../components/ui/DataTableRender"

const data = [
    {
        "NAme And Info": "Dr. O.P. Modi, Chief Scientist, AMPRI Bhopal",
        "Designation": "President"
    },
    {
        "NAme And Info": "Dr. Rupa Dasgupta, Sr. Principal Scientist, AMPRI Bhopal",
        "Designation": "Vice President"
    },
    {
        "NAme And Info": "Dr. D.P. Mondal, Sr. Principal Scientist, AMPRI Bhopal",
        "Designation": "Secretary"
    },
    {
        "NAme And Info": "Mr. P. Banerjee, Sr. Technical Officer-II, AMPRI Bhopal",
        "Designation": "Treasurer"
    }
];

const columns = ["NAme And Info", "Designation"];

function TSI({ isAdmin }) {

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

export default TSI