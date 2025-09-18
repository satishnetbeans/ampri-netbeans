import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Data for Administration staff
const GeneralAdministrationData = [
    {
        "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
        "DESIGNATION": "Controller of Administration",
        "EMAIL": "coaampri@ampri.res.in",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
        "DESIGNATION": "Principal Private Secretary",
        "EMAIL": "minisurendran@ampri.res.in",
        "INTERCOM": "1221",
        "OFFICE": "2485600"
    },
    {
        "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
        "DESIGNATION": "Senior Hindi Officer",
        "EMAIL": "manishadubey@ampri.res.in",
        "INTERCOM": "1233",
        "OFFICE": "2771545"
    },
    {
        "NAME": "श्री विजय श्रीवास्तव\nMr. Vijay Shrivastava",
        "DESIGNATION": "Section Officer",
        "EMAIL": "vshrivastava@ampri.res.in",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्री संजय कुमार\nShri Sanjay kumar",
        "DESIGNATION": "Section Officer",
        "EMAIL": "",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्री विवेक खरे\nShri Vivek Khare",
        "DESIGNATION": "Section Officer",
        "EMAIL": "",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्री आनंद वी पंडित\nMr Anand V Pandit",
        "DESIGNATION": "Assistant Section Officer",
        "EMAIL": "",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्री प्रवीण यादव राव जगताप\nMr Pravin Yadav Rao Jagtap",
        "DESIGNATION": "Assistant Section Officer",
        "EMAIL": "py.jagtap@ampri.res.in",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्री राहुल सिंह चौहान\nMr. Rahul Singh Chouhan",
        "DESIGNATION": "Assistant Section Officer",
        "EMAIL": "rschouhan@ampri.res.in",
        "INTERCOM": "1227",
        "OFFICE": ""
    },
    {
        "NAME": "श्री राहुल लकवाड़\nMr. Rahul Lakwar",
        "DESIGNATION": "Assistant Section Officer",
        "EMAIL": "",
        "INTERCOM": "1232",
        "OFFICE": ""
    }
];

const GeneralAdministrationColumns = [
    "NAME",
    "DESIGNATION",
    "EMAIL",
    "INTERCOM",
    "OFFICE"
];


const FinancEandAccountData= [
    {
        "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
        "DESIGNATION": "Controller of Administration",
        "EMAIL": "coaampri@ampri.res.in",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
        "DESIGNATION": "Principal Private Secretary",
        "EMAIL": "minisurendran@ampri.res.in",
        "INTERCOM": "1221",
        "OFFICE": "2485600"
    },
    {
        "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
        "DESIGNATION": "Senior Hindi Officer",
        "EMAIL": "manishadubey@ampri.res.in",
        "INTERCOM": "1233",
        "OFFICE": "2771545"
    },

];

const FinancEandAccountColumns = [
    "NAME",
    "DESIGNATION",
    "EMAIL",
    "INTERCOM",
    "OFFICE"
];

const StoresAndPurchaseData= [
    
    {
        "NAME": "श्री सोमनाथ मज़ूमदर\nMr. Somnath Mazumder",
        "DESIGNATION": "Controller of Administration",
        "EMAIL": "coaampri@ampri.res.in",
        "INTERCOM": "",
        "OFFICE": ""
    },
    {
        "NAME": "श्रीमती मिनी सुरेंद्रन\nMrs. Mini Surendran",
        "DESIGNATION": "Principal Private Secretary",
        "EMAIL": "minisurendran@ampri.res.in",
        "INTERCOM": "1221",
        "OFFICE": "2485600"
    },
    {
        "NAME": "डॉ. मनीषा दुबे\nDr. Manisha Dubey",
        "DESIGNATION": "Senior Hindi Officer",
        "EMAIL": "manishadubey@ampri.res.in",
        "INTERCOM": "1233",
        "OFFICE": "2771545"
    },

];

const StoresAndPurchaseColumns = [
    "NAME",
    "DESIGNATION",
    "EMAIL",
    "INTERCOM",
    "OFFICE"
];

function Administration({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />


            <div className=" rounded-xl p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">ADMINISTRATION</h1>

                <DataTable
                    columns={GeneralAdministrationColumns}
                    data={GeneralAdministrationData}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="General Administration"
                />

                <DataTable
                    columns={FinancEandAccountColumns}
                    data={FinancEandAccountData}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="Finance and Account Section"
                />

                <DataTable
                    columns={StoresAndPurchaseColumns}
                    data={StoresAndPurchaseData}
                    entriesPerPageOptions={[10, 25, 50]}
                    title="Stores and Purchase Section"
                />


            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default Administration;
