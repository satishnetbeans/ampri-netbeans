// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";
import { fetchEvents } from "../../api/axios";
import { processTableData } from "../../utils/ProcessTableData";


function EventsPage({ isAdmin }) {
    const [eventsColumns, setEventsColumns] = useState([]);
    const [eventsTabs, setEventsTabs] = useState([]);
    const [table, settable] = useState({});

    console.log("eventsTabs, eventsColumns :", eventsTabs, eventsColumns)

    useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await fetchEvents();
                if (res.data && res.data.length > 0) {
                    const fieldMapping = {
                        "Title": "title",
                        "Event Date": "eventDate",
                        "More Details": "document"
                    };

                    const { columns, processedData, table } = processTableData(res.data, fieldMapping);

                    setEventsColumns(columns);
                    setEventsTabs(processedData);
                    settable(table);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getEvents();
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />
            {console.log("eventsTabs, eventsColumns :", eventsTabs, eventsColumns)}

            {eventsTabs && eventsColumns && eventsTabs.length > 0 && eventsColumns.length > 0 && <DataTable
                title="CSIR-AMPRI Events"
                columns={eventsColumns}
                tabs={eventsTabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={table}
                isAdmin={isAdmin}
                from="Events"
            />}

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default EventsPage;
