// @ts-nocheck
import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"

function RTIPage({isAdmin}) {
    const rtiItems = [
        "Particulars of organisation, functions and duties",
        "Powers and duties of officers and employees",
        "Decision making process (including channels of supervision and accountability)",
        "Norms for discharge of functions",
        "Rules, regulations, instructions, manuals and records",
        "Categories of documents",
        "Formulation of policy or implementation",
        "Statement of the boards, councils, committees and other bodies",
        "Directory of scientists, officers and employees",
        "Monthly remuneration of scientists, officers and employees and system of compensation",
        "Budget allocations (all plans, proposed expenditures and reports on disbursements)",
        "Execution of subsidy programmes",
        "Recipients of concessions, permits or authorisations",
        "Details of information in an electronic form",
        "Particulars of facilities available to citizens for obtaining information",
        "Grievance Redressal Mechanism",
        "Details of Contracts Entered",
        "Names, designations and other particulars of the Public Information Officers",
        "Dissemination of Information: Annual Reports",
        "Request Forms: Link to RTI Portal’s Home Page",
        "Memorandum of association: Rules & Regulations and bye-laws (2005)",
        "Link to CSIR RTI Page",
        "Link to DoPT Page",
        "No. of Employees against whom disciplinary action taken is NIL.",
        "Revised guidelines for transfer and posting of Common Cadre Officers of CSIR",
        "Guidelines for Inter Lab Transfer Scientific & Technical Staff",
        "Foreign Tours by officers of the rank of Joint Secretary or above is NIL",
        "Details of applications receipt under RTI and information provided (Quarterly).",
        "Receipt & Disposal of RTI applications & appeals.",
        "Other information",
    ]

    return (
        <div>
            <Topbar isAdmin={isAdmin}/>
            <Navbar isAdmin={isAdmin}/>

            <h1 className="text-3xl font-bold my-6 text-[#004080] text-center">Right To Information(RTI) Act 2005</h1>
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
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item}
                                </a>
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
