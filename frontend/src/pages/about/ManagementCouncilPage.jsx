// @ts-nocheck
import React ,{useEffect,useState} from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

import { fetchManagementCouncils } from "../../api/axios";


function ManagementCouncilPage({ isAdmin }) {
    const [managementData, setcouncilData] = useState([])
    const [managementColumns, setcouncilColumns] = useState([])
    const [table, settable] = useState({})
    // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
    useEffect(() => async () => {
        try {
            const res = await fetchManagementCouncils();
            if (res.data) {
                console.log("ManagementCouncil res.data:", res.data);
                const Data = res.data
                    .sort((a, b) => a.order - b.order).map(item => ({
                        _id: item._id,
                        order: item.order,
                        name: item.name,
                        Affiliation: item.Affiliation,
                        Position: item.Position
                    }));
                const Columns = res.data[0].table.columns;
                console.log("ManagementCouncil data : ", Data, Columns);
                setcouncilData(Data);
                setcouncilColumns(Columns);
                settable(res.data[0].table);

                console.log("ManagementCouncil data: ", res);
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
                columns={managementColumns}
                data={managementData}
                entriesPerPageOptions={[10, 25, 50]}
                title="Management Council Members"

                from="ManagementCouncil"
                table={table}

                isAdmin={isAdmin}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default ManagementCouncilPage;
