import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Data for National MoUs
const nationalMouData = [
    {
        "SNo": "1",
        "Name of the Company/agency": "Jawaharlal Nehru Aluminium Research Development & Design Centre",
        "Title/ brief description": "For undertaking the project titled 'Red Mud Valorization to Achieve Zero Waste: Conversion of Residue into Diagnostic X-Ray Shielding Tiles after recovery of Scandium' sponsored by S&T, Ministry of Mines, Govt. of India, New Delhi",
        "Validity Period": "24 Months",
        "Date of commencement": "19/04/2022"
    },
    {
        "SNo": "2",
        "Name of the Company/agency": "M/S Nordische Technology, Private Limited, No. 45/3, 1st Floor, Residency Road, Gopala Krishna Road, Bengaluru -560025",
        "Title/ brief description": "Project 'Design and Development of Technology and processes of specialize Aluminium and graphene foam for electrode in High Performance extra fast recharging Light Weight Al-ion battery'",
        "Validity Period": "24 Months",
        "Date of commencement": "09/05/2022"
    },
    {
        "SNo": "3",
        "Name of the Company/agency": "PSG Institute of Technology and Applied Research, Coimbatore – 641062",
        "Title/ brief description": "Close Linkage in terms of research and academic activities",
        "Validity Period": "60 Months",
        "Date of commencement": "11/05/2022"
    },
    {
        "SNo": "4",
        "Name of the Company/agency": "Tripartite Agreement with CPCB & GPCB",
        "Title/ brief description": "Project 'Studies on Utilization of inert broken tiles, sanitary wares & polishing dust/slurry for Development of Advanced Geopolymeric Prefabricated Precast Pathway Components for Infrastructural Applications'",
        "Validity Period": "18 Months",
        "Date of commencement": "06/07/2022"
    },
    {
        "SNo": "5",
        "Name of the Company/agency": "Siddarth University, Kapilvastu",
        "Title/ brief description": "Close Linkage in terms of research and academic activities",
        "Validity Period": "60 Months",
        "Date of commencement": "09/08/2022"
    },
    {
        "SNo": "6",
        "Name of the Company/agency": "School of Planning & Architecture, Bhopal",
        "Title/ brief description": "MoU for close linkage in terms of research and academic activities",
        "Validity Period": "60 Months",
        "Date of commencement": "18/10/2022"
    },
    {
        "SNo": "7",
        "Name of the Company/agency": "North East Centre for Technology Application & Reach (NECTAR), and Mizoram Science, Technology & Innovation Council Aizwal Mizoram",
        "Title/ brief description": "Tripartite MoA for undertaking project titled 'Pilot Scale deployment of Ampricare – Instantaneous Hypochlorite Generator using kitchen salt' under Technology Outreach & Service scheme (TOSS) of NECTAR",
        "Validity Period": "12 Months",
        "Date of commencement": "1/11/2022"
    },
    {
        "SNo": "8",
        "Name of the Company/agency": "EEPC India, Kolkata Sh. Dhruba Jyoti Basu, Director (Personal & Administration) and TechnoS Instruments, Jaipur",
        "Title/ brief description": "MoU for promotion of 'Make-in-India' Raman Spectrometer",
        "Validity Period": "36 Months",
        "Date of commencement": "28/11/22"
    },
    {
        "SNo": "9",
        "Name of the Company/agency": "National Institute of Technical Teachers Training and Research (NITTTR), Bhopal",
        "Title/ brief description": "Close Linkage in terms of research and academic activities",
        "Validity Period": "60 Months",
        "Date of commencement": "01/01/2023"
    },
    {
        "SNo": "10",
        "Name of the Company/agency": "Nordische Energy Systems Private Limited",
        "Title/ brief description": "Project 'Design and Development of High Energy density Lead Acid Battery'",
        "Validity Period": "6 Months",
        "Date of commencement": "20/03/2023"
    },
    {
        "SNo": "11",
        "Name of the Company/agency": "CSIR-National Environmental Engineering Research Institute, Delhi Zonal Centre – 110028",
        "Title/ brief description": "Project 'Monitoring of Mixing Height Profile of atmosphere for Jamshedpur City using SODAR system' (SSP0064)",
        "Validity Period": "18 Months",
        "Date of commencement": "01/03/2023"
    },
    {
        "SNo": "12",
        "Name of the Company/agency": "OP Jindal University",
        "Title/ brief description": "Close Linkage in terms of research and academic activities",
        "Validity Period": "60 Months",
        "Date of commencement": "25/04/2023"
    },
    {
        "SNo": "13",
        "Name of the Company/agency": "Vikram University, Ujjain",
        "Title/ brief description": "MoU for close linkage in terms of research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "18/05/2023"
    },
    {
        "SNo": "14",
        "Name of the Company/agency": "Madhya Pradesh Bhoj Open University, Bhopal",
        "Title/ brief description": "Close linkage in terms of research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "18/05/2023"
    },
    {
        "SNo": "15",
        "Name of the Company/agency": "Indian Institute of Technology Bhilai, Transit campus at GEC Campus",
        "Title/ brief description": "Close Linkage in terms of research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "30/05/2023"
    },
    {
        "SNo": "16",
        "Name of the Company/agency": "The President of India through Joint Mission Director (R&I) NTTM, Ministry of Textiles, New Delhi",
        "Title/ brief description": "Project MoU 'Development of Carbon Nanofiber Materials from Cow Dung/ Bio-sludges for Smart Fabric Textile and Selective CO2/H2 Energy Storage Applications by 3D Printing Technology'",
        "Validity Period": "36 Months",
        "Date of commencement": "October 2023"
    },
    {
        "SNo": "17",
        "Name of the Company/agency": "Indian Institute of Technology Roorkee",
        "Title/ brief description": "Close linkage in terms of research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "10/01/2024"
    },
    {
        "SNo": "18",
        "Name of the Company/agency": "Variable Energy Cyclotron Centre (VECC) Kolkata",
        "Title/ brief description": "Collaboration for joint 'Development of Gamma and Neutron Shielding Materials using Alumina Industry Waste and their Characterization'",
        "Validity Period": "60 Months",
        "Date of commencement": "02/02/2024"
    },
    {
        "SNo": "19",
        "Name of the Company/agency": "President of India, acting through Secretary, Department of Biotechnology, Ministry of Science and Technology, Government of India, New Delhi & AIIMS, Bhopal & IISER Bhopal",
        "Title/ brief description": "Project MoU for role and responsibilities of participating parties related to project titled 'Design and Development of Microfluidics based Device to determine antimicrobial susceptibility directly in clinical samples'",
        "Validity Period": "18 Months",
        "Date of commencement": ""
    },
    {
        "SNo": "20",
        "Name of the Company/agency": "President of India, acting through Secretary, Department of Biotechnology, Ministry of Science and Technology, Government of India, New Delhi",
        "Title/ brief description": "Project MoA for defining the role and responsibilities of the participating agencies, monitoring and other matters related to the project titled 'Simultaneous Photo-Bio-Electro-Degradation of recalcitrant compounds of wastewater and Bioenergy Generation through Visible Light-Induced Electrodes based advanced Microbial Fuel Cells: Sustainable Synergy and Enlightened Solutions.'",
        "Validity Period": "36 Months",
        "Date of commencement": "09/05/2024"
    },
    {
        "SNo": "21",
        "Name of the Company/agency": "M/S Indian Rare Earths Limited Technology Development Council, Odisha Sands Complex, IREL (India) Limited, Odisha",
        "Title/ brief description": "The agreement details the terms and conditions, financial arrangements, intellectual property rights, responsibilities and obligations of IRELTDC and CSIR-AMPRI pertaining to the sponsored research program 'Exploring the Feasibility of Converting Iron Rich IREL's Red Clay into X- and Gamma Ray Shielding Materials'",
        "Validity Period": "24 Months",
        "Date of commencement": "28/06/2024"
    },
    {
        "SNo": "22",
        "Name of the Company/agency": "IES University, Bhopal (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "23",
        "Name of the Company/agency": "IES College of Technology, Bhopal (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "24",
        "Name of the Company/agency": "Scope Global Skills University, Bhopal (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "25",
        "Name of the Company/agency": "Rabindranath Tagore University, Bhopal (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "26",
        "Name of the Company/agency": "Maharishi Mahesh Yogi Vedic University, Bramhasthan-Karuandi, Dist. Katni (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "27",
        "Name of the Company/agency": "Ram Krishna Dharmarth Foundation University (RKDF), Bhopal (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "28",
        "Name of the Company/agency": "Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya, Chitrakoot (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "31/07/2024"
    },
    {
        "SNo": "29",
        "Name of the Company/agency": "Construction Industry Development Council, Hemkunt Chambers, 89, Nehru Place, New Delhi – 110019",
        "Title/ brief description": "Memorandum of cooperation to collaborate for the purpose of offering Performance appraisal and certificate of competency for the construction chemical and special materials",
        "Validity Period": "36 Months",
        "Date of commencement": "05/09/2024"
    },
    {
        "SNo": "30",
        "Name of the Company/agency": "Awadhesh Pratap Singh University, Rewa (MP)",
        "Title/ brief description": "Close linkage in research and academic activities",
        "Validity Period": "120 Months",
        "Date of commencement": "06/09/2024"
    },
    {
        "SNo": "31",
        "Name of the Company/agency": "M/s Grasim Industries Limited, Staple Fibre Division, Birlagram, Nagda, Madhya Pradesh – 456331",
        "Title/ brief description": "Grant of License by for utilizing the said KNOWHOW, the rights and obligations of either party thereto, terms of the R&D project, and the financial arrangements between the parties",
        "Validity Period": "120 Months",
        "Date of commencement": "06/09/2024"
    },
    {
        "SNo": "32",
        "Name of the Company/agency": "M/s Permali Wallace Private Limited, Hoshangabad Road, Opp. RBI, Bhopal – 462011 (MP)",
        "Title/ brief description": "Grant of License by for utilizing the said KNOWHOW, the rights and obligations of either party thereto, terms of the R&D project, and the financial arrangements between the parties for know how of Evergreen Hybrid Composites of Parali (Agro Wastes)",
        "Validity Period": "120 Months",
        "Date of commencement": "26/09/2024"
    },
    {
        "SNo": "33",
        "Name of the Company/agency": "M/s Permali Wallace Private Limited, Hoshangabad Road, Opp. RBI, Bhopal – 462011 (MP)",
        "Title/ brief description": "Grant of License by for utilizing the said KNOWHOW, the rights and obligations of either party thereto, terms of the R&D project, and the financial arrangements between the parties for know-how of Bio-Binder for Making Bio-Composites from Bamboo/Other Natural Resources – A Green & Sustainable Approach",
        "Validity Period": "120 Months",
        "Date of commencement": "26/09/2024"
    }
];

// Dummy data for International MoUs
const internationalMouData = [
    {
        "SNo": "1",
        "Name of the Company/agency": "University of Manchester, UK",
        "Title/ brief description": "Collaborative research on advanced nanomaterials for energy applications",
        "Validity Period": "60 Months",
        "Date of commencement": "15/03/2023"
    },
    {
        "SNo": "2",
        "Name of the Company/agency": "National University of Singapore",
        "Title/ brief description": "Joint development of sustainable building materials",
        "Validity Period": "48 Months",
        "Date of commencement": "22/06/2023"
    },
    {
        "SNo": "3",
        "Name of the Company/agency": "Technical University of Munich, Germany",
        "Title/ brief description": "Exchange program for researchers and students in materials science",
        "Validity Period": "36 Months",
        "Date of commencement": "10/09/2023"
    }
];

// Define tabs for the MoU page
const mouTabs = [
    {
        key: "national",
        label: "National",
        data: nationalMouData
    },
    {
        key: "international",
        label: "International",
        data: internationalMouData
    }
];

const mouColumns = [
    "SNo",
    "Name of the Company/agency",
    "Title/ brief description",
    "Validity Period",
    "Date of commencement"
];

function MouPage({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                title="MoU Signed"
                columns={mouColumns}
                tabs={mouTabs}
                entriesPerPageOptions={[10, 25, 50]}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default MouPage;