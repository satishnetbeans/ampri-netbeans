// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import DataTable from "../../../components/ui/DataTableRender"

import { processTableData } from "../../../utils/ProcessTableData"



const tableData = [
    {
        "code": "NWP Project : ESC0201, Nodal Lab: CSIR AMPRI",
        "detail": "Design and Development of Thermo Responsive & Magnetic Shape Memory Materials and Devices for Engineering Applications",
        "tab": "ONGOING PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        },
        "order": 1
    },
    {
        "code": "NWP Project: ESC0101, Nodal Lab: CSIR-AMPRI",
        "detail": "Novel Energy Effective Metallic Materials for Engineering Applications",
        "tab": "ONGOING PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        },
        "order": 2
    },
    {
        "code": "NWP Project: ISC0102, Nodal Lab: CSIR-NISCAIR",
        "detail": "CSIR Knowledge Gateway and Open Source Private Cloud Infrastructure (KNOWGATE)",
        "tab": "ONGOING PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        },
        "order": 3
    },

    {
        "order": 1,
        "code": "NWP 0028",
        "detail": "Development of Advanced Light Weight Metallic Materials for Engineering Applications AMPRI-NIIST-NML-NPL-Mahindra & Mahendra Brass-o-Forging-TBRL-NSTL-Lukas TVS",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 2,
        "code": "NWP 0029",
        "detail": "Non-oxide Ceramic based Advanced Structural materials for Application in Armours CGCRI-AMPRI-SERC",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 3,
        "code": "NWP 0035",
        "detail": "Nanomaterial and Nanodevices for application in Health and Diseases CCMB-CEERI-AMPRI-CECRI",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 4,
        "code": "NWP 0037",
        "detail": "Discovery and Preclinical Studies of New Bioactive Molecules (Natural and Semi-Synthetic) & Traditional Preparations IIIM-CIMAP-CDRI-NBRI-IICB-IICT-AMPRI-NCL-NEIST-IHBT",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 5,
        "code": "NWP 0046",
        "detail": "Sustainable Development and Management of Water Resources in Different Problematic Terrain NGRI-AMPRI-NEERI",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 6,
        "code": "NWP 0051",
        "detail": "Nanostructured Advance Materials NML-AMPRI-CEERI-CGCRI-CMERI-IMMT-NAL-NCL-NPL",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 7,
        "code": "RSP 0001",
        "detail": "Sisal- Potential for Rural Development & Green Technology",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 8,
        "code": "RSP 0002",
        "detail": "Dissemination and Showcasing of Rural Technologies",
        "tab": "COMPLETED PROJECTS",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },

    {
        "order": 1,
        "code": "GAP 0057-BRNS-08",
        "detail": "Development of lead free, multi component composite materials using conventional and advance ceramic route for simultaneously and synergistically shielding of gamma and neutron radiation",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 2,
        "code": "GAP 0058-TIFAC-08",
        "detail": "Demonstration of the competence to develop automobile components using Electro Magnetic Forming (EMF) process",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 3,
        "code": "GAP 0059-MAPCOST",
        "detail": "Ancient technology of Wootz steel making process upgradation, revival, dissemination and provision of safety net",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 4,
        "code": "GAP 0060-BRNS-09",
        "detail": "Feasibility studies on Development of Pulsed Electromagnetic Welding Technique for Refractory Materials used in High Temperature Reactors",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 5,
        "code": "GAP 0061-MAPCOST-09",
        "detail": "Development of Noise Absorbing Materials (Noise Barriers) from Industrial Rubber Waste for use in Engineering Applications",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 6,
        "code": "GAP 0062-MAPCOST-10",
        "detail": "Utilization of low cost minerals of Madhya Pradesh for the development of hyper branched aluminosilica (HAS) and mesoporous silica to sequester the effects of greenhouse gases",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 7,
        "code": "GAP 0063-MOS-10",
        "detail": "Alternate Complimentary route of direct steel making with reference to Indian raw materials",
        "tab": "Grant-in-Aid",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },

    {
        "order": 1,
        "code": "SSP 0036-BRNS-10",
        "detail": "Testing of grooved tensile specimens of a nuclear reactor material under subzero temperature to determine failure probabilities in ductile to brittle transition temperature range",
        "tab": "Sponsored",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 2,
        "code": "SSP 0037-BHEL-10",
        "detail": "Comparison of processing route and the material for producing cost effective spider key bar profile with improved property",
        "tab": "Sponsored",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
    {
        "order": 1,
        "code": "CNP 0097-TIFAC-06",
        "detail": "Field demonstration cum training programme for use of fly ash in agriculture in farmer`s field at Sarni Thermal Power Station of MPSEB",
        "tab": "Consultancy",
        "table": {
            "pageTitle": "Ongoing Projects",
            "columns": ["order", "project code", "Project Detail"],
            "tabs": ["ONGOING PROJECTS", "COMPLETED PROJECTS", "Grant-in-Aid", "Sponsored", "Consultancy"]
        }
    },
];


function OngoingProjects({ isAdmin }) {
    const [Columns, setColumns] = useState(null)
    const [Tabs, setTabs] = useState(null)
    const [Table, settable] = useState(null)


    useEffect(() => {
        const fieldMapping = {
            "Project Detail": "detail",
            "project code": "code"
        };

        const { columns, processedData, table } = processTableData(tableData, fieldMapping);

        setColumns(columns);
        setTabs(processedData);
        settable(table);
    }, [])



    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />


            {Columns && Tabs && Columns.length > 0 && Tabs.length > 0 && <DataTable
                title="Projects"
                columns={Columns}
                tabs={Tabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={Table}
                isAdmin={false}
                from="OngoingProjects"
            />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default OngoingProjects