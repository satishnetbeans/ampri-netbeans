import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Data for former directors
const formerDirectorsData = [
  {
    "SNo": "1",
    "Name": "Prof. P. K. Rohatgi, Director",
    "Period From": "14.05.1981",
    "Period To": "20.08.1986"
  },
  {
    "SNo": "2",
    "Name": "Shri A. C. Khazanchi, Acting Director",
    "Period From": "22.08.1986",
    "Period To": "15.12.1986"
  },
  {
    "SNo": "3",
    "Name": "Dr. Rajendra Kumar, Director",
    "Period From": "15.12.1986",
    "Period To": "31.07.1989"
  },
  {
    "SNo": "4",
    "Name": "Shri A. C. Khazanchi, Acting Director",
    "Period From": "31.07.1989",
    "Period To": "16.10.1989"
  },
  {
    "SNo": "5",
    "Name": "Prof. T. C. Rao, Director",
    "Period From": "16.10.1989",
    "Period To": "30.09.2000"
  },
  {
    "SNo": "6",
    "Name": "Dr. Kunal Basu",
    "Period From": "30.09.2000",
    "Period To": "11.06.2001"
  },
  {
    "SNo": "7",
    "Name": "Dr. N. Ramakrishanan, Director",
    "Period From": "11.06.2001",
    "Period To": "10.06.2008"
  },
  {
    "SNo": "8",
    "Name": "Dr. Navin Chandra, Acting Director",
    "Period From": "10.06.2008",
    "Period To": "09.04.2009"
  },
  {
    "SNo": "9",
    "Name": "Dr. Anil K. Gupta, Director",
    "Period From": "09.04.2009",
    "Period To": "31.07.2011"
  },
  {
    "SNo": "10",
    "Name": "Dr. B. K. Mishra, Director Incharge",
    "Period From": "31.07.2011",
    "Period To": "18.04.2013"
  },
  {
    "SNo": "11",
    "Name": "Dr. Navin Chandra, Acting Director",
    "Period From": "18.04.2013",
    "Period To": "31.07.2014"
  },
  {
    "SNo": "12",
    "Name": "Dr. Navin Chand, Acting Director",
    "Period From": "07.08.2014",
    "Period Period To": "31.03.2015"
  },
  {
    "SNo": "13",
    "Name": "Dr. Satyabrat Das, Director",
    "Period From": "31.03.2015",
    "Period To": "31.01.2017"
  },
  {
    "SNo": "14",
    "Name": "Dr. S. S. Amritphale, Acting Director",
    "Period From": "31.01.2017",
    "Period To": "31.10.2017"
  },
  {
    "SNo": "15",
    "Name": "Dr. Avanish K. Srivastava, Director",
    "Period From": "31.10.2017",
    "Period To": "31.03.2025"
  },
  {
    "SNo": "16",
    "Name": "Dr. D. Srinivasa Reddy, Director (Additional Charge)",
    "Period From": "01.04.2025",
    "Period To": "30.04.2025"
  }
];

const formerDirectorsColumns = [
  "SNo",
  "Name",
  "Period From",
  "Period To"
];

function FormerDirectorsPage({ isAdmin }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      <DataTable
        columns={formerDirectorsColumns}
        data={formerDirectorsData}
        entriesPerPageOptions={[10, 25, 50]}
        title="Former Directors"
      />

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  );
}

export default FormerDirectorsPage;