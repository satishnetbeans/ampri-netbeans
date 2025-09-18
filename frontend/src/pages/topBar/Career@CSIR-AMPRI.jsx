//@ts-nocheck
import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

const CareerPage = ({isAdmin}) => {
    // Data for Project Staff Positions tab
    const projectStaffData = [
        {
            Positions: "Advertisement Number: PROJ-04/2025 Engagement of Project Staff [Click Here]\nAge Limit: As per Advertisement\nStart Date: 04/09/2025\nLast Date: 18/09/2025\nFor More Details & Online Application: [Click Here]",
            "Shortlisted Candidates for Interview": "",
            "Interview Notification": "",
            "Result": ""
        },
        {
            Positions: "Advertisement Number: PROJ-03/2025 Engagement of Project Staff [Click Here]\nAge Limit: As per Advertisement\nStart Date: 16/07/2025\nLast Date: 31/07/2025\nFor More Details & Online Application:[Closed]",
            "Shortlisted Candidates for Interview": "25.08.2025:[Click Here]",
            "Interview Notification": "25.08.2025:[Click Here]",
            "Result": "11.09.2025:[Click Here]"
        },
        {
            Positions: "Advertisement Number: PROJ-02/2025 Engagement of Project Staff [Click Here]\nAge Limit: As per Advertisement\nStart Date: 19/06/2025\nLast Date: 03/07/2025\nFor More Details & Online Application: [Closed]",
            "Shortlisted Candidates for Interview": "28.07.2025:[Click Here]",
            "Interview Notification": "28.07.2025:[Click Here]",
            "Result": "18.08.2025:[Click Here]"
        },
        {
            Positions: "Advertisement Number: PROJ-01/2025 Engagement of Project Staff [Click Here]\nAge Limit: As per Advertisement\nStart Date: 19/04/2025\nLast Date: 30/04/2025\nFor More Details & Online Application: [Closed]",
            "Shortlisted Candidates for Interview": "27.05.2025:[Click Here]",
            "Interview Notification": "27.05.2025:[Click Here]",
            "Result": "13.06.2025:[Click Here]"
        }
    ];

    // Dummy data for Permanent Positions tab
    const permanentPositionsData = [
        {
            Positions: "Scientist 'C' - Materials Engineering\nQualifications: Ph.D. in Materials Science/Engineering\nExperience: 5 years\nLast Date: 15/10/2025",
            "Shortlisted Candidates": "To be announced",
            "Interview Date": "Not scheduled",
            "Result": "Pending"
        },
        {
            Positions: "Technical Officer - Mechanical\nQualifications: B.Tech/B.E. in Mechanical Engineering\nExperience: 3 years\nLast Date: 30/09/2025",
            "Shortlisted Candidates": "To be announced",
            "Interview Date": "Not scheduled",
            "Result": "Pending"
        }
    ];

    // Dummy data for Project Staff Positions-Archive tab
    const projectStaffArchiveData = [
        {
            Positions: "Advertisement Number: PROJ-12/2024 Engagement of Project Staff\nAge Limit: As per Advertisement\nStart Date: 10/10/2024\nLast Date: 25/10/2024",
            "Shortlisted Candidates for Interview": "15.11.2024:[Click Here]",
            "Interview Notification": "15.11.2024:[Click Here]",
            "Result": "30.11.2024:[Click Here]"
        },
        {
            Positions: "Advertisement Number: PROJ-11/2024 Engagement of Project Staff\nAge Limit: As per Advertisement\nStart Date: 05/09/2024\nLast Date: 20/09/2024",
            "Shortlisted Candidates for Interview": "10.10.2024:[Click Here]",
            "Interview Notification": "10.10.2024:[Click Here]",
            "Result": "25.10.2024:[Click Here]"
        }
    ];

    // Define tabs for the DataTable
    const tabs = [
        {
            key: "project-staff",
            label: "Project Staff Positions",
            data: projectStaffData
        },
        {
            key: "permanent",
            label: "Permanent Positions",
            data: permanentPositionsData
        },
        {
            key: "archive",
            label: "Project Staff Positions-Archive",
            data: projectStaffArchiveData
        }
    ];

    // Define columns for the table
    const columns = [
        "Positions",
        "Shortlisted Candidates for Interview",
        "Interview Notification",
        "Result"
    ];

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                title="Career @ CSIR-AMPRI"
                columns={columns}
                data={[]} // Empty as we're using tabs
                tabs={tabs}
                entriesPerPageOptions={[5, 10, 25]}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
};

export default CareerPage;
