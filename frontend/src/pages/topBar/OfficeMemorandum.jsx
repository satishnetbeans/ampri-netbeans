//@ts-nocheck
import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchOfficeMemorandum } from "../../api/axios";
import { processTableData } from "../../utils/ProcessTableData";


const OfficeMemorandumPage = ({ isAdmin }) => {
    const[OfficeMemorandumColumns, setOfficeMemorandumColumns] = useState([]);
    const [OfficeMemorandumData, setOfficeMemorandumData] = useState([]);
    const [table, settable] = useState({});

    console.log("OfficeMemorandumData, OfficeMemorandumColumns :", OfficeMemorandumData, OfficeMemorandumColumns)

    useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await fetchOfficeMemorandum();
                console.log("OfficeMemorandum data fetched:", res);
                if (res.data && res.data.length > 0) {
                    const fieldMapping = {
                        "OM Date": "Date",
                        "Title": "title",
                        "Subject Area": "SubjectArea",
                        "Download/Details": "document"
                    };

                    const { columns, processedData, table } = processTableData(res.data, fieldMapping);

                    setOfficeMemorandumColumns(columns);
                    setOfficeMemorandumData(processedData);
                    settable(table);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getEvents();
    }, [])


    return (
        <div>
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {OfficeMemorandumData  && OfficeMemorandumColumns && OfficeMemorandumData.length > 0 && OfficeMemorandumColumns.length > 0 && <DataTable
                isAdmin={isAdmin}
                from="OfficeMemorandum"
                title="Office Memorandum"
                columns={OfficeMemorandumColumns}
                data={OfficeMemorandumData}
                table={table}
                entriesPerPageOptions={[10, 25, 50]}
                
            />}

            

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
};

export default OfficeMemorandumPage;
