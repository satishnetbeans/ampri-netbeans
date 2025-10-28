// @ts-nocheck
import React, { useState, useEffect } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"

import { useNavigate } from "react-router-dom"
import { useUserData } from "../../context/UserDataContext"
import StructureRoleRoute from "../../utils/StructureRoleRoute"

function RTIPage({ isAdmin }) {
    const navigate = useNavigate();

    const { UserData } = useUserData();

    const [role, setrole] = useState(null);


    useEffect(() => {
        if (UserData) {
            const rl = StructureRoleRoute(UserData);
            rl && setrole(rl);
        }

    }, [UserData]);

    const rtiItems = [
        {
            "title": "Particulars of organisation, functions and duties",
            "link": `${role ? `/${role}/Particular-Org-Functions-Duties` : `/Particular-Org-Functions-Duties`}`
        },
        {
            "title": "Powers and duties of officers and employees",
            "link": `${role ? `/${role}/Powers-duties` : `/Powers-duties`}`
        },
        {
            "title": "Decision making process (including channels of supervision and accountability)",
            "link": `${role ? `/${role}/DecisionMakingProcess` : `/DecisionMakingProcess`}`
        },
        {
            "title": "Norms for discharge of functions",
            "link": `${role ? `/${role}/Norms-Discharge-Functions` : `/Norms-Discharge-Functions`}`
        },
        {
            "title": "Rules, regulations, instructions, manuals and records",
            "link": "http://www.csir.res.in/rules-regulation"
        },
        {
            "title": "Categories of documents",
            "link": `${role ? `/${role}/CategoriesOfDocuments` : `/CategoriesOfDocuments`}`
        },
        {
            "title": "Formulation of policy or implementation",
            "link": `${role ? `/${role}/Norms-Discharge-Functions` : `/Norms-Discharge-Functions`}`
        },
        {
            "title": "Statement of the boards, councils, committees and other bodies",
            "link": `${role ? `/${role}/StatementOfBodies` : `/StatementOfBodies`}`
        },
        { 
            "title": "Directory of scientists, officers and employees",
            "link": `${role ? `/${role}/directory` : `/directory`}`
        },
        {
            "title": "Monthly remuneration of scientists, officers and employees and system of compensation",
            "link": `${role ? `/${role}/Monthly-Remuneration` : `/Monthly-Remuneration`}`
        },
        {
            "title": "Budget allocations (all plans, proposed expenditures and reports on disbursements)",
            "link": `${role ? `/${role}/BudgetAllocations` : `/BudgetAllocations`}`
        },
        {
            "title": "The manner of execution of subsidy programmes, including the amounts allocated and the details of beneficiaries of such programmes is NIL",
            "link": ""
        },
        {
            "title": "Particulars of recipients of concessions, permits of authorisations granted by it is NIL",
            "link": ""
        },
        {
            "title": "Details in respect of the information, available to or held by it, reduced in an electronic form.",
            "link": ""
        },
        {
            "title": "Particulars of facilities available to citizens for obtaining information",
            "link": `${role ? `/${role}/FacilitiesOfObtainingInformation` : `/FacilitiesOfObtainingInformation`}`
        },
        {
            "title": "Grievance Redressal Mechanism",
            "link": "https://ampri.res.in/en/wp-content/uploads/2020/11/Consultative-Mechanism-and-Local-Grievance-Committee.pdf"
        },
        {
            "title": "Details of Contracts Entered",
            "link": "https://ampri.res.in/en/wp-content/uploads/2020/10/Details-of-Contract-Entered.pdf"
        },
        {
            "title": "Names, designations and other particulars of the Public Information Officers",
            "link": `${role ? `/${role}/ParticularsOfPublic-Information-Officers` : `/ParticularsOfPublic-Information-Officers`}`
        },
        {
            "title": "Dissemination of Information: Annual Reports",
            "link": `${role ? `/${role}/DisseminationOfInformation` : `/DisseminationOfInformation`}`
        },
        {
            "title": "Request Forms: Link to RTI Portal’s Home Page",
            "link": "https://rtionline.gov.in/index.php"
        },
        {
            "title": "Memorandum of association: Rules & Regulations and bye-laws (2005)",
            "link": "https://ampri.res.in/en/wp-content/uploads/2020/01/Rules-and-Regulations-Bye-Laws-of-CSIR.pdf"
        },
        {
            "title": "Link to CSIR RTI Page",
            "link": "https://www.csir.res.in/divisions/right-information-act-cell-rti-cellhttps://www.csir.res.in/divisions/right-information-act-cell-rti-cell"
        },
        {
            "title": "Link to DoPT Page",
            "link": "https://rti.gov.in/"
        },
        {
            "title": "No. of Employees against whom disciplinary action taken is NIL.",
            "link": ""
        },
        {
            "title": "Revised guidelines for transfer and posting of Common Cadre Officers of CSIR",
            "link": "https://www.csir.res.in/notification/revised-guidelines-transfer-and-posting-common-cadre-officersof-csir"
        },
        {
            "title": "Guidelines for Inter Lab Transfer Scientific & Technical Staff",
            "link": "http://www.csir.res.in/notification/inter-lab-transfer-scientific-technical-staff"
        },
        {
            "title": "Foreign Tours by officers of the rank of Joint Secretary or above is NIL",
            "link": ""
        },
        {
            "title": "Details of applications receipt under RTI and information provided (Quarterly).",
            "link": "https://ampri.res.in/en/wp-content/uploads/2020/01/RTI-3rd_QuarterlyReturns.pdf"
        },
        {
            "title": "Receipt & Disposal of RTI applications & appeals.",
            "link": `${role ? `/${role}/Receipt&Disposal` : `/Receipt&Disposal`}`
        },
        {
            "title": "Other information : Such other information as may be prescribed; and thereafter update these publications every year",
            "link": ""
        }
    ]

    return (
        <div>
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <h1 className="text-3xl font-bold my-6 text-[#004080] text-center">
                Right To Information (RTI) Act 2005
            </h1>

            <table className="w-[95%] mx-auto border-collapse border border-gray-200 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-3 py-2 w-16">S.No.</th>
                        <th className="border border-gray-200 px-3 py-2 text-left">Rights</th>
                    </tr>
                </thead>
                <tbody>
                    {rtiItems.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-3 py-2 text-center">
                                {index + 1}
                            </td>
                            <td className="border border-gray-200 px-3 py-2">
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default RTIPage
