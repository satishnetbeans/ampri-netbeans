// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import DataTable from "../../../components/ui/DataTableRender"


const data = [
  {
    "Name And Info": "Dr. S. A. R. Hashmi, Sr. Principal Scientist, AMPRI, Bhopal",
    "Designation": "Chairman"
  },
  {
    "Name And Info": "Dr. Rupa Dasgupta, Chief Scientist, CSIR-AMPRI Bhopal",
    "Designation": "Vice-Chairman"
  },
  {
    "Name And Info": "Er. R. S. Ahirwar, Senior Principal Scientist, AMPRI, Bhopal",
    "Designation": "Secretary"
  },
  {
    "Name And Info": "Dr. S. Murali, Principal Scientist, AMPRI, Bhopal",
    "Designation": "Treasurer"
  }
];

const columns = ["Name And Info", "Designation"];



function MRSI({ isAdmin }) {

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

export default MRSI