// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import DataTable from "../../components/ui/DataTableRender"

import { processTableData } from "../../utils/ProcessTableData"

const data = {
    "title": "Sophisticated Analytical Instruments Facility (SAIF)",
    "pageContent": {
        "content": [
            {
                "type": "subHeading",
                "para": " Welcome to CSIR-AMPRI  dedicated Sophisticated Analytical Instrument Facility to Provide High Quality Analytical Services to Researchers",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "paragraph",
                "para": "CSIR-AMPRI is equipped with up to date R&D facilities in the area of material synthesis, processing and characterization. Some more sophisticated facilities are also in a process of being set up at the institute in order to carry out material processing and characterization with an improved degree of precision, especially with regard to nano structured material development. Keeping application in mind, the R&D facilities have been grouped as the ones meant for mechanical, physical, chemical, thermal, electrical, rheological & tribological property characterization.  Other sets of facilities include those for powder processing, primary processing like melting, secondary processing such as  heat treatment & deformation, and  micro structural studies.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 2
            },

        ],
        "tabs": []
    },

}

const tableData = [
    {
        "equipment": "CNC Turning centre",
        "institutionCharge": "500/sample",
        "industryCharge": "1000/sample",
        "remarks": "",

        "tab": "Testing Facilities",
        "table": {
            "pageTitle": "SAIF",
            "columns": [
                "order",
                "name of equipment",
                "Charges for academics institution(in Rs.)",
                "Charges for industry(in Rs.)",
                "remarks"
            ],
            "tabs": ["Testing Facilities", "Processing Facilities"]
        },
        "order": 1,
    }
]


const TEM_SampleData = [
    {
        "Name Of Equipment": "Ion Milling system",
        "Slot Duration / NO.of samples": "one hour",
        "Academic & R&D Labs (in Rs.)": "500",
        "Industry (in Rs.)": "1000"
    },
    {
        "Name Of Equipment": "Ultrasonic Disc Cutter",
        "Slot Duration / NO.of samples": "one hour",
        "Academic & R&D Labs (in Rs.)": "400",
        "Industry (in Rs.)": "800"
    },
    {
        "Name Of Equipment": "Dimple Grinder",
        "Slot Duration / NO.of samples": "one hour/one sample",
        "Academic & R&D Labs (in Rs.)": "400",
        "Industry (in Rs.)": "800"
    },
    {
        "Name Of Equipment": "Disc Grinder",
        "Slot Duration / NO.of samples": "one hour/one sample",
        "Academic & R&D Labs (in Rs.)": "400",
        "Industry (in Rs.)": "800"
    },
    {
        "Name Of Equipment": "Low Speed Diamond Saw",
        "Slot Duration / NO.of samples": "one hour",
        "Academic & R&D Labs (in Rs.)": "500",
        "Industry (in Rs.)": "1000"
    },
    {
        "Name Of Equipment": "Twin-Jet Electropolisher",
        "Slot Duration / NO.of samples": "upto 3 sample (at Room Temp.)",
        "Academic & R&D Labs (in Rs.)": "2100",
        "Industry (in Rs.)": "4200"
    },
    {
        "Name Of Equipment": "Twin-jet Electropolisher",
        "Slot Duration / NO.of samples": "upto 3 sample(at Cryo Temp.)",
        "Academic & R&D Labs (in Rs.)": "2500",
        "Industry (in Rs.)": "5000"
    },
    {
        "Name Of Equipment": "Disc Punch (for 3.0 mm disc from ductile and soft materials,e.g., AI/Cu/other similar ductile foils or sheets with thickness<=150μm)",
        "Slot Duration / NO.of samples": "upto 5 sample",
        "Academic & R&D Labs (in Rs.)": "400",
        "Industry (in Rs.)": "800"
    }
];

const TEM_SampleColumns = [
    "Name Of Equipment",
    "Slot Duration / NO.of samples",
    "Academic & R&D Labs (in Rs.)",
    "Industry (in Rs.)"
];


const GuidelinesForEquipment = {
    "title": "",
    "pageContent": {
        "content": [
            {
                "type": "list",
                "para": "Guidelines to use the above equipment’s : ",
                "src": "",
                "alt": "",
                "items": ["Contact Analytical HRTEM Laboratory staff to discuss procedure and safety training."],
                "order": 1
            },
            {
                "type": "list",
                "para": "Terms And Condition for Metal 3D Printer are as follows : ",
                "src": "",
                "alt": "",
                "items": [
                    "Metal/alloy powder shall be provided by user.",
                    "CSIR-AMPRI will not be responsible for characterisitc properties of 3D printed components, as metal powder is procured from a third party.",
                    "Samples/results will be delivered within 30 days after receiving the powder.",
                    "Suitability of printing an alloy needs to be discussed with facility In-charge before taking the order/service.",
                    "Printing of an alloy involves parameter optimization for printing; therefore actual time of printing may be higher in some cases, from the software calculated one."
                ],
                "order": 2
            },

        ],
        "tabs": []
    },

}

const GeneralTnC = {
    "title": "General Terms and Conditions",
    "pageContent": {
        "content": [
            {
                "type": "list",
                "para": "General Terms and Conditions : ",
                "src": "",
                "alt": "",
                "items": [
                    "These charges are only for external users.",
                    "Rates are exclusive of GST (GST will be as per government rates)",
                    "Raw machine data will be provided to the users.",
                    "Test results and data will be shared after verification of the payment from finance department of CSIR-AMPRI",
                    "Sample collection after the measurement is responsibility of the user only, about which prior information during sample booking request need to be provided. Also User needs to arrange the pickup in own cost.",
                    "The analytical data/Test results are provided only for research/ development purposes. These cannot be used as certificates in legal disputes.",
                    "In case of bulk samples, testing can be taken up in project mode after discussion with the party, and due approval from the competent authority ",
                    "Payment will be taken as per institute procedure",
                    "These rates will supersede all the previous charges",
                    "The charges for new facilities / upcoming testing facilities will be decided further on case to case basis.",
                    "These charges are only for measurement / testing on the instruments and do not include analysis part.",
                    "All the External samples measurement / testing request will be through ISTEM portal only",
                    "Material Data Sheet/Information about Hazardous nature of the sample should be provided by external users wherever applicable.",
                    "For further queries contact at istem-ampri@csir.res.in"
                ],
                "order": 1
            },


        ],
        "tabs": []
    },

}

function SAIF({ isAdmin }) {
    const [Columns, setColumns] = useState(null)
    const [Tabs, setTabs] = useState(null)
    const [Table, settable] = useState(null)


    useEffect(() => {
        const fieldMapping = {
            "name of equipment": "equipment",
            "Charges for academics institution(in Rs.)": "institutionCharge",
            "Charges for industry(in Rs.)": "industryCharge"
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

            {data && <ContentRenderer contentData={data} isAdmin={false} />}

            {Columns && Tabs && Columns.length > 0 && Tabs.length > 0 && <DataTable
                title="SAIF"
                columns={Columns}
                tabs={Tabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={Table}
                isAdmin={false}
                from="SAIF"
            />}

            {TEM_SampleData && TEM_SampleColumns && TEM_SampleColumns.length > 0 && TEM_SampleData.length > 0 && <div>
                <DataTable
                    title="TEM Sample Preparation Tools (Usage charges for external users)"
                    columns={TEM_SampleColumns}
                    data={TEM_SampleData}
                    entriesPerPageOptions={[10, 25, 50]}

                    isAdmin={false}
                    from="TEM Sample"
                />

                {data && <ContentRenderer contentData={GuidelinesForEquipment} isAdmin={false} />}
            </div>}

            {data && <ContentRenderer contentData={GeneralTnC} isAdmin={false} />}

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default SAIF