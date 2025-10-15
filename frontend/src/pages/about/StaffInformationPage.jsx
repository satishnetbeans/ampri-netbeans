// @ts-nocheck

import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchStaff } from "../../api/axios";

import checkBaseURL from "../../utils/CheckBaseUrl";

function StaffPage({ isAdmin }) {
    const baseUrl = checkBaseURL()

    const [staffColumns, settenderColumns] = useState([])
    const [staffTabs, settenderTabs] = useState([])
    const [table, settable] = useState({})

    // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
    useEffect(() => async () => {
        try {
            const res = await fetchStaff();
            if (res.data) {


                const Columns = res.data[0].table.columns;
                const tabs = res.data[0].table.tabs;
                console.log("staff data : ", res.data, Columns, tabs);

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
                                "imageUrl": item.imageUrl.startsWith("uploads/")
                                    ? `${baseUrl}/${item.imageUrl}`
                                    : item.imageUrl,
                                'name': item.name,
                                'designation': item.designation,
                                'email': item.email,
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

            {staffColumns.length === 0 || staffTabs.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            ) : <DataTable
                title="CSIR-AMPRI Staff Directory"
                columns={staffColumns}
                tabs={staffTabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={table}
                isAdmin={isAdmin}
                from="staffInformation"
            />}





            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default StaffPage;