// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchFormerDirectors } from "../../api/axios";



function FormerDirectorsPage({ isAdmin }) {
  const [formerDirectorsData, setcouncilData] = useState([])
  const [formerDirectorsColumns, setcouncilColumns] = useState([])
  const [table, settable] = useState({})
  // console.log("ResearchCouncil isAdmin :", councilDataa, councilColumnss)
  useEffect(() => async () => {
    try {
      const res = await fetchFormerDirectors();
      if (res.data) {
        console.log("formerDirectors res.data:", res.data);
        const Data = res.data
          .sort((a, b) => a.order - b.order).map(item => ({
            _id: item._id,
            order: item.order,
            name: item.name,
            duration_from: item.duration_from,
            duration_to: item.duration_to
          }));
        const Columns = res.data[0].table.columns;
        console.log("formerDirectors data : ", Data, Columns);
        setcouncilData(Data);
        setcouncilColumns(Columns);
        settable(res.data[0].table);

        console.log("formerDirectors data: ", res);
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
        columns={formerDirectorsColumns}
        data={formerDirectorsData}
        entriesPerPageOptions={[10, 25, 50]}
        title="Former Directors"

        from="formerDirectors"
        table={table}

        isAdmin={isAdmin}
      />

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  );
}

export default FormerDirectorsPage;