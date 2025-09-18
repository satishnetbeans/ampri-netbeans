//@ts-nocheck
import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

const OfficeMemorandumPage = () => {
    // Data for Office Memorandums
    const memorandumData = [
        {
            "OM DATE": "02/05/2025",
            "TITLE": "Constitution of Standing Publications, Ethics and Scientific Vigilance Committee (SEC) for this Institute.",
            "Subject Area": "",
            "Download/Details": "Download [OM No.: AMPRI/Committee/2025]"
        },
        {
            "OM DATE": "30/04/2025",
            "TITLE": "Regarding the Takeover of charge of the post of the Director, CSIR-AMPRI, Bhopal",
            "Subject Area": "",
            "Download/Details": "Download [OM No.: 201(538)/2025-Estt.]"
        },
        {
            "OM DATE": "01/04/2025",
            "TITLE": "OM regarding the Handover - Takeover of charge (additional charge) of the post of the Director, CSIR-AMPRI, Bhopal",
            "Subject Area": "",
            "Download/Details": "Download [OM No.: 201(488)/17-Estt.]"
        },
        {
            "OM DATE": "12/12/2024",
            "TITLE": "कार्यस्थल पर महिलाओं के यौन उत्पीड़न के तहत आंतरिक शिकायत समिति Internal Complains Committee under Sexual Harassment of women at workplace",
            "Subject Area": "",
            "Download/Details": "Download [OM No.:AMPRI/ICC(SH)/2023]"
        },
        {
            "OM DATE": "11/12/2024",
            "TITLE": "Starting of Creche Facility at CSIR-AMPRI, Bhopal regarding.",
            "Subject Area": "",
            "Download/Details": "Download [OM No.:AMPRI/Creche Facility/Gen]"
        },
        {
            "OM DATE": "09/12/2024",
            "TITLE": "Closed and Restricted Holiday to be observed in CSIR-AMPRI, Bhopal during the year 2025",
            "Subject Area": "",
            "Download/Details": "Download [OM No.:10(51)/90/Gen-2003]"
        },
        {
            "OM DATE": "07/03/2023",
            "TITLE": "कार्यस्थल पर महिलाओं के यौन उत्पीड़न के तहत आंतरिक शिकायत समिति Internal Complains Committee under Sexual Harassment of women at workplace",
            "Subject Area": "",
            "Download/Details": "Download [OM No.:AMPRI/ICC(SH)/2023]"
        }
    ];

    // Define columns for the table
    const columns = [
        "OM DATE",
        "TITLE",
        "Subject Area",
        "Download/Details"
    ];

    // Custom renderer for the Download/Details column to make links clickable
    const renderDownloadCell = (value) => {
        // Check if the value contains a download link text
        if (value && value.includes("Download")) {
            // In a real application, you would extract the actual link
            // For this example, we'll use a placeholder
            return (
                <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                    onClick={(e) => {
                        e.preventDefault();
                        alert('Download functionality would be implemented here');
                    }}
                >
                    {value}
                </a>
            );
        }
        return value;
    };

    return (
        <div>
            <Topbar />
            <Navbar />

            <DataTable
                from="OfficeMemorandum"
                title="Office Memorandum"
                columns={columns}
                data={memorandumData}
                entriesPerPageOptions={[10, 25,50]}
                renderCellContent={(column, value) => {
                    if (column === "Download/Details") {
                        return renderDownloadCell(value);
                    }
                    return (
                        <div className="h-auto py-3 ultra-thin-scrollbar overflow-y-auto">
                            {value || "-"}
                        </div>
                    );
                }}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
};

export default OfficeMemorandumPage;
