import React from "react";
import Navbar from "../components/ui/Navbar";
import Topbar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import DataTable from "../components/ui/DataTableRender";
// Sample data for directory (you would replace this with your actual data)
const directoryData = [
  {
    "NAME": "डॉ. थल्लाडा भास्कर Dr. Thallada Bhaskar",
    "DESIGNATION": "निदेशक Director",
    "EMAIL": "director.ampri@csir.res.in thallada.bhaskar@csir.res.in",
    "INTERCOM": "1113/1114",
    "OFFICE": "2457105"
  },
  {
    "NAME": "डॉ. पी अशोकन Dr. P Asokan",
    "DESIGNATION": "मुख्य वैज्ञानिक Chief Scientist",
    "EMAIL": "pasokan.ampri@csir.res.in",
    "INTERCOM": "1329",
    "OFFICE": "2489402"
  },
  // Add more directory data here...
];

const directoryColumns = [
  "NAME",
  "DESIGNATION",
  "EMAIL",
  "INTERCOM",
  "OFFICE"
];

function DirectoryPage({ isAdmin }) {
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />
      
      <DataTable 
        title="CSIR-AMPRI Staff Directory"
        columns={directoryColumns}
        data={directoryData}
        entriesPerPageOptions={[10, 25, 50]}
      />
      
      <Footer />
      <div id="google_translate_element" ></div>
    </div>
  );
}

export default DirectoryPage;