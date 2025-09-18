import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";


// Structured data for Research Council members
const councilData = [
    {
        "SNo": "1",
        "Name": "Prof. Vinod Kumar Singh",
        "Affiliation": "Chair Professor, Department of Chemistry, Indian Institute of Technology, Kanpur",
        "Position": "Chairman"
    },
    {
        "SNo": "2",
        "Name": "Dr. Vilas Tathavadkar",
        "Affiliation": "Senior Vice President, Aditya Birla Science & Technology Company Ltd., Navi Mumbai",
        "Position": "External Member"
    },
    {
        "SNo": "3",
        "Name": "Shri Sudipta Saha",
        "Affiliation": "President, Tile Operations & Business Head, Industrial Products H&R, India Ltd., Pune",
        "Position": "External Member"
    },
    {
        "SNo": "4",
        "Name": "Prof. Shampa Aich",
        "Affiliation": "Department of Metallurgical and Materials Engineering, Indian Institute of Technology, Kharagpur",
        "Position": "External Member"
    },
    {
        "SNo": "5",
        "Name": "Prof. N. Ravi Shankar",
        "Affiliation": "Department of Materials Research Centre, Indian Institute of Science, Bengaluru",
        "Position": "External Member"
    },
    {
        "SNo": "6",
        "Name": "Dr. S. V. S. Narayana Murty",
        "Affiliation": "General Manager, Materials Development and Production Group, Liquid Propulsion Systems Centre, Indian Space Research Organisation, Trivandrum",
        "Position": "Agency Representative"
    },
    {
        "SNo": "7",
        "Name": "Shri Mayank Mathur",
        "Affiliation": "Sr. Principal Scientist, Central Planning Directorate (CPD), Council of Scientific & Industrial Research, New Delhi",
        "Position": "DG's Representative"
    },
    {
        "SNo": "8",
        "Name": "Prof. Bikramjit Basu",
        "Affiliation": "Director, CSIR-Central Glass & Ceramic Research Institute, Kolkata",
        "Position": "Sister Laboratory"
    },
    {
        "SNo": "9",
        "Name": "Director",
        "Affiliation": "CSIR-Advanced Materials and Processes Research Institute, Bhopal",
        "Position": "Member"
    },
    {
        "SNo": "10",
        "Name": "Dr. J. P. Chaurasia",
        "Affiliation": "Sr. Principal Scientist, CSIR-Advanced Materials and Processes Research Institute, Bhopal",
        "Position": "Secretary"
    }
];

const councilColumns = [
    "SNo",
    "Name",
    "Affiliation",
    "Position"
];

function ResearchCouncil({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                columns={councilColumns}
                data={councilData}
                entriesPerPageOptions={[10, 25, 50]}
                title="Research Council Members"
            />

            <Footer />

            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default ResearchCouncil;
