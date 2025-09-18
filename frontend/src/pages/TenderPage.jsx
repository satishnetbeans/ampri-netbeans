import React from "react";
import Navbar from "../components/ui/Navbar";
import Topbar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import DataTable from "../components/ui/DataTableRender";

// Sample data for different tender years
const tenders2025_26 = [
  {
    "S. No.": "37",
    "Title / Name of Work": "Supply installation and commissioning of Electrochemical workstation setup for the measurement of integrated energy cells. Tender No.: AMPRI/PUR/EQP/49/2025-26 Tender - ID is 2025_CSIR_248043_1",
    "Details/Download Tender Documents": "NIT Document Tender Document",
    "Last Date of Receipt of Tender": "30.09.2025 11:00 AM",
    "Opening Date of Tender": "01.10.2025 11:00 AM"
  },
  {
    "S. No.": "36",
    "Title / Name of Work": "Supply installation and commissioning of FT-IR. Tender No.: AMPRI/PUR/EQP/32/2025-26 Global Tender ID: 2025_CSIR_247836_1",
    "Details/Download Tender Documents": "NIT Document Global Tender Enquiry",
    "Last Date of Receipt of Tender": "06.10.2025 11:00 AM",
    "Opening Date of Tender": "07.10.2025 11:00 AM"
  },
  // Add more 2025-26 tender data here...
];

const tenders2024_25 = [
  {
    "S. No.": "25",
    "Title / Name of Work": "Sample tender from 2024-25",
    "Details/Download Tender Documents": "NIT Document",
    "Last Date of Receipt of Tender": "15.05.2024 11:00 AM",
    "Opening Date of Tender": "16.05.2024 11:00 AM"
  },
  // Add more 2024-25 tender data here...
];

const tenders2023_24 = [
  {
    "S. No.": "15",
    "Title / Name of Work": "Sample tender from 2023-24",
    "Details/Download Tender Documents": "NIT Document",
    "Last Date of Receipt of Tender": "20.03.2023 11:00 AM",
    "Opening Date of Tender": "21.03.2023 11:00 AM"
  },
  // Add more 2023-24 tender data here...
];

const tenderArchive = [
  {
    "S. No.": "5",
    "Title / Name of Work": "Archived tender example",
    "Details/Download Tender Documents": "NIT Document",
    "Last Date of Receipt of Tender": "10.01.2020 11:00 AM",
    "Opening Date of Tender": "11.01.2020 11:00 AM"
  },
  // Add more archived tender data here...
];

const tenderColumns = [
  "S. No.",
  "Title / Name of Work",
  "Details/Download Tender Documents",
  "Last Date of Receipt of Tender",
  "Opening Date of Tender"
];

// Define tabs for the tenders page
const tenderTabs = [
  {
    key: "latest",
    label: "Latest Tenders (2025-26)",
    data: tenders2025_26
  },
  {
    key: "2024-25",
    label: "Tenders 2024-25",
    data: tenders2024_25
  },
  {
    key: "2023-24",
    label: "Tenders 2023-24",
    data: tenders2023_24
  },
  {
    key: "archive",
    label: "Tender Archive",
    data: tenderArchive
  }
];

function TendersPage({ isAdmin }) {
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      <DataTable 
        title="Tenders"
        columns={tenderColumns}
        tabs={tenderTabs}
        entriesPerPageOptions={[10, 25, 50]}
      />

      <Footer />

      <div id="google_translate_element" ></div>
    </div>
  );
}

export default TendersPage;
