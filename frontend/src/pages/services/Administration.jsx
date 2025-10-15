// @ts-nocheck  
import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

import { fetchAdministration } from "../../api/axios";


// Data for Administration staff
// const GeneralAdministrationData = [
//     {
//         "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
//         "DESIGNATION": "Controller of Administration",
//         "EMAIL": "coaampri@ampri.res.in",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
//         "DESIGNATION": "Principal Private Secretary",
//         "EMAIL": "minisurendran@ampri.res.in",
//         "INTERCOM": "1221",
//         "OFFICE": "2485600"
//     },
//     {
//         "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
//         "DESIGNATION": "Senior Hindi Officer",
//         "EMAIL": "manishadubey@ampri.res.in",
//         "INTERCOM": "1233",
//         "OFFICE": "2771545"
//     },
//     {
//         "NAME": "श्री विजय श्रीवास्तव\nMr. Vijay Shrivastava",
//         "DESIGNATION": "Section Officer",
//         "EMAIL": "vshrivastava@ampri.res.in",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री संजय कुमार\nShri Sanjay kumar",
//         "DESIGNATION": "Section Officer",
//         "EMAIL": "",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री विवेक खरे\nShri Vivek Khare",
//         "DESIGNATION": "Section Officer",
//         "EMAIL": "",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री आनंद वी पंडित\nMr Anand V Pandit",
//         "DESIGNATION": "Assistant Section Officer",
//         "EMAIL": "",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री प्रवीण यादव राव जगताप\nMr Pravin Yadav Rao Jagtap",
//         "DESIGNATION": "Assistant Section Officer",
//         "EMAIL": "py.jagtap@ampri.res.in",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री राहुल सिंह चौहान\nMr. Rahul Singh Chouhan",
//         "DESIGNATION": "Assistant Section Officer",
//         "EMAIL": "rschouhan@ampri.res.in",
//         "INTERCOM": "1227",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्री राहुल लकवाड़\nMr. Rahul Lakwar",
//         "DESIGNATION": "Assistant Section Officer",
//         "EMAIL": "",
//         "INTERCOM": "1232",
//         "OFFICE": ""
//     }
// ];

// const GeneralAdministrationColumns = [
//     "NAME",
//     "DESIGNATION",
//     "EMAIL",
//     "INTERCOM",
//     "OFFICE"
// ];


// const FinancEandAccountData= [
//     {
//         "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
//         "DESIGNATION": "Controller of Administration",
//         "EMAIL": "coaampri@ampri.res.in",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
//         "DESIGNATION": "Principal Private Secretary",
//         "EMAIL": "minisurendran@ampri.res.in",
//         "INTERCOM": "1221",
//         "OFFICE": "2485600"
//     },
//     {
//         "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
//         "DESIGNATION": "Senior Hindi Officer",
//         "EMAIL": "manishadubey@ampri.res.in",
//         "INTERCOM": "1233",
//         "OFFICE": "2771545"
//     },

// ];

// const FinancEandAccountColumns = [
//     "NAME",
//     "DESIGNATION",
//     "EMAIL",
//     "INTERCOM",
//     "OFFICE"
// ];

// const StoresAndPurchaseData= [

//     {
//         "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
//         "DESIGNATION": "Controller of Administration",
//         "EMAIL": "coaampri@ampri.res.in",
//         "INTERCOM": "",
//         "OFFICE": ""
//     },
//     {
//         "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
//         "DESIGNATION": "Principal Private Secretary",
//         "EMAIL": "minisurendran@ampri.res.in",
//         "INTERCOM": "1221",
//         "OFFICE": "2485600"
//     },
//     {
//         "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
//         "DESIGNATION": "Senior Hindi Officer",
//         "EMAIL": "manishadubey@ampri.res.in",
//         "INTERCOM": "1233",
//         "OFFICE": "2771545"
//     },

// ];

// const StoresAndPurchaseColumns = [
//     "NAME",
//     "DESIGNATION",
//     "EMAIL",
//     "INTERCOM",
//     "OFFICE"
// ];

function Administration({ isAdmin }) {
    const [GeneralAdministration, setGeneralAdministration] = useState(null)
    const [GeneralAdministrationColumns, setGeneralAdministrationColumns] = useState(null)

    const [FinanceAccount, setFinanceAccount] = useState(null)
    const [FinanceAccountColumns, setFinanceAccountColumns] = useState(null)

    const [StoresPurchase, setStoresPurchase] = useState(null)
    const [StoresPurchaseColumns, setStoresPurchaseColumns] = useState(null)

    useEffect(() => {
        const getAdministration = async () => {
            try {
                const res = await fetchAdministration()
                console.log("Administration : ", res)
                if (res.data) {

                    const general = res.data.filter(item => item.table.pageTitle === "General Administration").sort((a, b) => a.order - b.order)

                    const finance = res.data.filter(item => item.table.pageTitle === "Finance and Account Section").sort((a, b) => a.order - b.order)

                    const store = res.data.filter(item => item.table.pageTitle === "Stores and Purchase Section").sort((a, b) => a.order - b.order)

                    setGeneralAdministration(general)
                    setGeneralAdministrationColumns(general[0].table.columns)

                    setFinanceAccount(finance)
                    setFinanceAccountColumns(finance[0].table.columns)

                    setStoresPurchase(store)
                    setStoresPurchaseColumns(store[0].table.columns)

                    console.log("Administration data: ", general)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAdministration()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />


            <div className=" rounded-xl p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">ADMINISTRATION</h1>

                {GeneralAdministration && GeneralAdministrationColumns && <DataTable
                    columns={GeneralAdministrationColumns}
                    data={GeneralAdministration}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="General Administration"
                    isAdmin={isAdmin}
                    from={"Administration"}
                    table={GeneralAdministration[0].table}
                />}

                {FinanceAccount && FinanceAccountColumns && <DataTable
                    columns={FinanceAccountColumns}
                    data={FinanceAccount}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="Finance and Account Section"
                    isAdmin={isAdmin}
                    from={"Administration"}
                    table={FinanceAccount[0].table}
                />}

                {StoresPurchase && StoresPurchaseColumns && <DataTable
                    columns={StoresPurchaseColumns}
                    data={StoresPurchase}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="Stores and Purchase Section"
                    isAdmin={isAdmin}
                    from={"Administration"}
                    table={StoresPurchase[0].table}
                />}


            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default Administration;
