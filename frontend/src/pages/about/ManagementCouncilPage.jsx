import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Structured data for Management Council members
const managementData = [
    {
        "SNo": "1",
        "Name": "The Director, AMPRI",
        "Affiliation": "Director CSIR-AMPRI",
        "Position": "Chairman"
    },
    {
        "SNo": "2",
        "Name": "Prof. Venugopal Achanta",
        "Affiliation": "Director CSIR-NPL, New Delhi",
        "Position": "Member"
    },
    {
        "SNo": "3",
        "Name": "Dr. Manish Mudgal",
        "Affiliation": "Chief Scientist, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "4",
        "Name": "Dr. J. P. Chaurasia",
        "Affiliation": "Senior Principal Scientist & Head PPD, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "5",
        "Name": "Dr. Kirti Soni",
        "Affiliation": "Principal Scientist, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "6",
        "Name": "Dr. Chetna Dhand",
        "Affiliation": "Senior Scientist, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "7",
        "Name": "Mr. Narendra Singh",
        "Affiliation": "Senior Scientist, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "8",
        "Name": "Dr. E Peters",
        "Affiliation": "Principal Technical Officer, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "9",
        "Name": "F&AO, AMPRI",
        "Position": "Member"
    },
    {
        "SNo": "10",
        "Name": "COA/AO, AMPRI",
        "Position": "Member-Secretary"
    }
];

const managementColumns = [
    "SNo",
    "Name",
    "Affiliation",
    "Position"
];

function ManagementCouncilPage({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                columns={managementColumns}
                data={managementData}
                entriesPerPageOptions={[10, 25,50]}
                title="Management Council Members"
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default ManagementCouncilPage;
