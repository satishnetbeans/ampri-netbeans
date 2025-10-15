// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchTechnologyKnowHowTransferred } from "../../api/axios";



function TechnologyKnowhowPage({ isAdmin }) {
    const [technologyColumns, settenderColumns] = useState([])
    const [technologyTabs, settenderTabs] = useState([])
    const [table, settable] = useState({})

    // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
    useEffect(() => async () => {
        try {
            const res = await fetchTechnologyKnowHowTransferred();
            if (res.data) {


                const Columns = res.data[0].table.columns;
                const tabs = res.data[0].table.tabs;
                console.log("tech-Know-how data : ", res.data, Columns, tabs);

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
                                'Name of Technology/Knowhow': item.TechnologyKnowHowName,
                                'Name of Party': item.NameOfParty,
                                'Date': item.Date,
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

            {technologyColumns.length === 0 || technologyTabs.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            ) : <DataTable
                title="Technology / Know-How Transferred"
                columns={technologyColumns}
                tabs={technologyTabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={table}
                isAdmin={isAdmin}
                from="TechnologyKnowHowTransferred"
            />}



            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default TechnologyKnowhowPage;