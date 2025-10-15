// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

import { fetchCouncils } from "../../api/axios";


function ResearchCouncil({ isAdmin }) {

    const [councilData, setcouncilData] = useState([])
    const [councilColumns, setcouncilColumns] = useState([])
    const [table, settable] = useState({})
    // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
    useEffect(() => async () => {
        try {
            const res = await fetchCouncils();
            if (res.data) {
                const Data = res.data
                    .sort((a, b) => a.order - b.order).map(item => ({
                        _id: item._id,
                        order: item.order,
                        name: item.name,
                        Affiliation: item.Affiliation,
                        Position: item.Position
                    }));
                const Columns = res.data[0].table.columns;
                console.log("ResearchCouncil data : ", Data, Columns);
                setcouncilData(Data);
                setcouncilColumns(Columns);
                settable(res.data[0].table);

                console.log("ResearchCouncil data: ", res);
            }
        } catch (err) {
            console.error("Error fetching councils:", err);
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                columns={councilColumns}
                data={councilData}
                entriesPerPageOptions={[10, 25, 50]}
                title="Research Council Members"
                from="ResearchCouncil"
                table={table}

                isAdmin={isAdmin}
            />

            <Footer />

            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default ResearchCouncil;
