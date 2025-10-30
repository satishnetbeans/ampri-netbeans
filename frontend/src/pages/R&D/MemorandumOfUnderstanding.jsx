// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchMOU } from "../../api/axios";


function MouPage({ isAdmin }) {
    const [mouColumns, settenderColumns] = useState([])
    const [mouTabs, settenderTabs] = useState([])
    const [table, settable] = useState({})

    // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
    useEffect(() => async () => {
        try {
            const res = await fetchMOU();
            if (res.data) {


                const Columns = res.data[0].table.columns;
                const tabs = res.data[0].table.tabs;
                console.log("MOU data : ", res.data, Columns, tabs);

                settenderColumns(Columns);
                const intermediateTabs = tabs.map((tab) => {
                    return {
                        key: tab, label: tab, data: res.data.filter(item => {
                            if (item.tab === tab) {
                                return item;
                            }
                        })
                    }
                })

                console.log("intermediateTabs :", intermediateTabs)
                const updatetabs = intermediateTabs.map((tab) => {
                    return {
                        key: tab.key, label: tab.label, data: tab.data.map(item => {

                            return {
                                _id: item._id,
                                order: item.order,
                                "Country": item.Country,
                                'Name of the Company/agency': item.CompanyAgencyName,
                                'Title/ brief description': item.description,
                                'Validity Period': item.Validity,
                                'Date of commencement': item.commencementDate
                            }

                        }).sort((a, b) => a.order - b.order)
                    }
                })
                console.log("updatetabs :", updatetabs)

                settenderTabs(updatetabs);
                settable(res.data[0].table);
            }
        } catch (err) {
            console.error("Error fetching councils:", err);
        }
    }, [])
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {mouColumns.length === 0 || mouTabs.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            ) : <DataTable
                title="MoU Signed"
                columns={mouColumns}
                tabs={mouTabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={table}
                from="MOU"
                isAdmin={isAdmin}
            />}



            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default MouPage;