import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Data for 2024
const year2024Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Bamboo Composites for Modern Housing Structures",
        "Name of Party": "M/s Asili Bamboo Products, Meerut",
        "Date": "18/01/2024"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Evergreen Hybrid Composites of Parali (Agro Wastes)",
        "Name of Party": "M/s Magniro Global Private Limited, Raipur",
        "Date": "24/06/2024"
    },
    {
        "SNo": "3",
        "Name of Technology/Knowhow": "Utilization of Zero liquid discharge plant residue (ZLDR) for development of a new class of wall tiles/Wall Cladding Panels (Date of Development – 05/07/2024)",
        "Name of Party": "M/s Grasim Industries Limited, Staple Fibre Division, Madhya Pradesh",
        "Date": "06/09/2024"
    },
    {
        "SNo": "4",
        "Name of Technology/Knowhow": "Evergreen Hybrid Composites of Parali (Agro Wastes)",
        "Name of Party": "M/s Permali Wallace Private Limited, Hoshangabad Road, Bhopal (MP)",
        "Date": "26/09/2024"
    },
    {
        "SNo": "5",
        "Name of Technology/Knowhow": "Bio-Binder for Making Bio-Composites from Bamboo/Other Natural Resources – A Green & Sustainable Approach (Date of Development – 05/08/2024)",
        "Name of Party": "M/s Permali Wallace Private Limited, Hoshangabad Bhopal (MP)",
        "Date": "26/09/2024"
    },
    {
        "SNo": "6",
        "Name of Technology/Knowhow": "Nanoadsorbent based filter for the arsenic & fluoride free drinking water",
        "Name of Party": "M/s Rollabs Hitech Industries, Kolkata, West Bengal",
        "Date": "30/10/2024"
    }
];

// Dummy data for 2023
const year2023Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Advanced Polymer Composites for Automotive Applications",
        "Name of Party": "M/s AutoTech Components Ltd., Pune",
        "Date": "15/03/2023"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Eco-friendly Building Materials from Industrial Waste",
        "Name of Party": "M/s GreenBuild Solutions, Hyderabad",
        "Date": "22/07/2023"
    }
];

// Dummy data for 2022
const year2022Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "High-Performance Ceramic Coatings for Industrial Applications",
        "Name of Party": "M/s CeramicTech Innovations, Bengaluru",
        "Date": "10/05/2022"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Sustainable Packaging Materials from Agricultural Residues",
        "Name of Party": "M/s EcoPack Pvt. Ltd., Delhi",
        "Date": "18/11/2022"
    }
];

// Dummy data for 2021
const year2021Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Nanocomposite Materials for Water Purification",
        "Name of Party": "M/s AquaPure Solutions, Chennai",
        "Date": "08/04/2021"
    }
];

// Dummy data for 2020
const year2020Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Lightweight Metal Alloys for Aerospace Applications",
        "Name of Party": "M/s AeroMat Technologies, Bengaluru",
        "Date": "12/02/2020"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Smart Materials for Structural Health Monitoring",
        "Name of Party": "M/s InfraSense Labs, Mumbai",
        "Date": "25/09/2020"
    }
];

// Dummy data for 2019
const year2019Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Advanced Biomaterials for Medical Implants",
        "Name of Party": "M/s BioMed Innovations, Hyderabad",
        "Date": "15/07/2019"
    }
];

// Dummy data for 2018
const year2018Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Energy-Efficient Glass Coating Technology",
        "Name of Party": "M/s GlassTech Solutions, Delhi",
        "Date": "20/03/2018"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Recycled Plastic Composite Materials",
        "Name of Party": "M/s EcoPolymer Industries, Pune",
        "Date": "05/11/2018"
    }
];

// Dummy data for 2013-2017
const year2013_2017Data = [
    {
        "SNo": "1",
        "Name of Technology/Knowhow": "Advanced Composite Materials for Defense Applications",
        "Name of Party": "M/s DefenseMat Technologies, Kanpur",
        "Date": "10/06/2017"
    },
    {
        "SNo": "2",
        "Name of Technology/Knowhow": "Sustainable Construction Materials from Industrial Byproducts",
        "Name of Party": "M/s BuildGreen India, Ahmedabad",
        "Date": "22/04/2016"
    },
    {
        "SNo": "3",
        "Name of Technology/Knowhow": "High-Temperature Resistant Ceramic Composites",
        "Name of Party": "M/s ThermalTech Materials, Kolkata",
        "Date": "15/11/2015"
    },
    {
        "SNo": "4",
        "Name of Technology/Knowhow": "Eco-Friendly Corrosion Resistant Coatings",
        "Name of Party": "M/s CorroShield Solutions, Mumbai",
        "Date": "08/08/2014"
    },
    {
        "SNo": "5",
        "Name of Technology/Knowhow": "Nanostructured Materials for Energy Storage",
        "Name of Party": "M/s PowerStore Technologies, Bengaluru",
        "Date": "30/01/2013"
    }
];

// Define tabs for the technology knowhow page
const technologyTabs = [
    {
        key: "2024",
        label: "Year-2024",
        data: year2024Data
    },
    {
        key: "2023",
        label: "Year-2023",
        data: year2023Data
    },
    {
        key: "2022",
        label: "Year-2022",
        data: year2022Data
    },
    {
        key: "2021",
        label: "Year-2021",
        data: year2021Data
    },
    {
        key: "2020",
        label: "Year-2020",
        data: year2020Data
    },
    {
        key: "2019",
        label: "Year-2019",
        data: year2019Data
    },
    {
        key: "2018",
        label: "Year-2018",
        data: year2018Data
    },
    {
        key: "2013-2017",
        label: "2013-2017",
        data: year2013_2017Data
    }
];

const technologyColumns = [
    "SNo",
    "Name of Technology/Knowhow",
    "Name of Party",
    "Date"
];

function TechnologyKnowhowPage({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                title="Technology / Know-How Transferred"
                columns={technologyColumns}
                tabs={technologyTabs}
                entriesPerPageOptions={[10, 25, 50]}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default TechnologyKnowhowPage;