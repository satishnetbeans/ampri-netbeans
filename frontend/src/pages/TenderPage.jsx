// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Topbar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import DataTable from "../components/ui/DataTableRender";
import { fetchTender } from "../api/axios";

import { processTableData } from "../utils/ProcessTableData";


function TendersPage({ isAdmin }) {
  const [tenderColumns, settenderColumns] = useState([])
  const [tenderTabs, settenderTabs] = useState([])
  const [table, settable] = useState({})

  // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
  useEffect(() => async () => {
    try {
      const res = await fetchTender();
      if (res.data && res.data.length > 0) {
        const fieldMapping = {
          "Title / Name of Work": "title",
          "Details/Download Tender Documents": "document",
          "Last Date of Receipt of Tender": "lastDate",
          "Opening Date of Tender": "openingDate"
        };

        const { columns, processedData, table } = processTableData(res.data, fieldMapping);

        settenderColumns(columns);
        settenderTabs(processedData);
        settable(table);
      }
    } catch (err) {
      console.error("Error fetching councils:", err);
    }
  }, [])
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      {tenderColumns && tenderTabs && tenderColumns.length > 0 && tenderTabs.length > 0 && <DataTable
        title="Tenders"
        columns={tenderColumns}
        tabs={tenderTabs}
        entriesPerPageOptions={[10, 25, 50]}
        table={table}
        isAdmin={isAdmin}
        from="Tenders"
      />}



      <Footer />

      <div id="google_translate_element" ></div>
    </div>
  );
}

export default TendersPage;
