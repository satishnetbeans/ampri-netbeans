//@ts-nocheck
import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

import { fetchCareer } from "../../api/axios";
import { processTableData } from "../../utils/ProcessTableData";


const CareerPage = ({ isAdmin }) => {
    const [CareerColumns, setCareerColumns] = useState([]);
    const [CareerTabs, setCareerTabs] = useState([]);
    const [table, settable] = useState({});

    console.log("CareerTabs, CareerColumns :", CareerTabs, CareerColumns)

    useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await fetchCareer();
                console.log("Career data fetched:", res);
                if (res.data && res.data.length > 0) {
                    const fieldMapping = {
                        "Positions": "Positions",
                        "Project Staff": "ProjectStaff",
                        "Detail & Application": "DetailnApplication",
                        "Notifications": "Notifications",
                        "Shortlisted Candidates for Interview": "ShortlistedCandidates",
                        "Result": "Result",
                    };

                    const { columns, processedData, table } = processTableData(res.data, fieldMapping);

                    setCareerColumns(columns);
                    setCareerTabs(processedData);
                    settable(table);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getEvents();
    }, [])

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {CareerTabs && CareerColumns && CareerTabs.length > 0 && CareerColumns.length > 0 && <DataTable
                from="Career"
                title="Career @ CSIR-AMPRI"
                columns={CareerColumns}
                data={[]} // Empty as we're using tabs
                tabs={CareerTabs}
                entriesPerPageOptions={[5, 10, 25]}
                isAdmin={isAdmin}
                table={table}
            />}

            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
};

export default CareerPage;
