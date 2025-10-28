// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/ui/Navbar";
import Topbar from "../../../components/ui/Topbar";
import Footer from "../../../components/ui/Footer";
import DataTable from "../../../components/ui/DataTableRender";
import { fetchAmpriDirectory } from "../../../api/axios";


function PowerAndDuties({ isAdmin }) {
  const [directoryData, setcouncilData] = useState([])
  const [directoryColumns, setcouncilColumns] = useState([])
  const [table, settable] = useState({})

  

  useEffect(() => async () => {
    try {
      const res = await fetchAmpriDirectory();
      if (res.data) {
        console.log("AmpriDirectory res.data:", res.data);
        const Data = res.data
          .sort((a, b) => a.order - b.order).map(item => ({
            _id: item._id,
            order: item.order,
            name: item.name,
            email: item.email,
            designation: item.designation,
            duties: item.duties
          }));

        const Columns = res.data[0].table.columns.filter(col => {
          return (col === "order" || col === "name" || col === "designation" || col ===  "email"  || col ===  "duties" );
        });
        console.log("AmpriDirectory data : ", Data, Columns);
        setcouncilData(Data);
        setcouncilColumns(Columns);
        settable(res.data[0].table);

        console.log("AmpriDirectory data: ", res);
      }
    } catch (err) {
      console.error("Error fetching councils:", err);
    }
  }, [])
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      <DataTable
        title="CSIR-AMPRI Staff Directory"
        columns={directoryColumns}
        data={directoryData}
        entriesPerPageOptions={[10, 25, 50]}
        isAdmin={isAdmin}
        from="AmpriDirectory"
        table={table}
      />

      <Footer />
      <div id="google_translate_element" ></div>
    </div>
  );
}

export default PowerAndDuties;