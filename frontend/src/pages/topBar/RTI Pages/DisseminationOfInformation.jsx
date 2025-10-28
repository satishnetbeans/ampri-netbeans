// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import DataTable from "../../../components/ui/DataTableRender"


const reports = [
    [
        {
            title: "Annual Report 2022-23",
            links: [{ text: "[English]", url: "https://ampri.res.in/en/wp-content/uploads/2024/08/Annual-Report-English-2022-23.pdf" }],
        },
        {
            title: "Annual Report 2021-2022",
            links: [{ text: "[English]", url: "https://ampri.res.in/en/wp-content/uploads/2024/08/Annual-Report-English-2021-22.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 2020-21",
            links: [{ text: "[English]", url: "https://ampri.res.in/en/wp-content/uploads/2024/08/Annual-Report-English-2020-21.pdf" }],
        },
        {
            title: "Annual Report 2019-2020",
            links: [
                { text: "[English]", url: "https://ampri.res.in/en/wp-content/uploads/2022/05/Annual-Report-English-2019-20.pdf" },
                { text: "[Hindi]", url: "https://ampri.res.in/en/wp-content/uploads/2022/05/Annual-Report-Hindi-2019-20.pdf" },
            ],
        },
    ],
    [
        {
            title: "Annual Report 2018-19",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2022/05/Annual-Report-2018-2019.pdf" }],
        },
        {
            title: "Annual Report 2017-2018",
            links: [
                { text: "[English]", url: "https://ampri.res.in/en/wp-content/uploads/2019/11/ANNUAL-REPORT-2017-18.pdf" },
                { text: "[Hindi]", url: "https://ampri.res.in/en/wp-content/uploads/2019/11/ANNUAL-Report-2017-18-HINDI.pdf" },
            ],
        },
    ],
    [
        {
            title: "Annual Report 2016-2017",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2019/11/Annual-Report-2016-17.pdf" }],
        },
        {
            title: "Annual Report 2015–2016",
            links: [],
        },
    ],
    [
        {
            title: "Annual Report 2014-2015",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/annual-report-2014-15.pdf" }],
        },
        {
            title: "Annual Report 2013–2014",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Annual-Report-2013-2014.pdf" }],
        },
    ],
    [
        {
            title: "Biennial Report 2011-2013",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Biennial_Report_2011-13.pdf" }],
        },
        {
            title: "Annual Report 2010-2011",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/annual_report_10-11.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 2009-2010",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/annual_report_2009-10.pdf" }],
        },
        {
            title: "Biennial Report 2007-2009",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/AnnualReport-07-09.pdf" }],
        },
    ],
    [
        {
            title: "Biennial Report 2005-2007",
            links: [],
        },
        {
            title: "Annual Report 2000-2003",
            links: [],
        },
    ],
    [
        {
            title: "Annual Report 1999-2000",
            links: [],
        },
        {
            title: "Annual Report 1997-1998",
            links: [{ text: "", url: "http://www1.ampri.res.in/Progress%20Report_97_98.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1996-1997",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_96_97.pdf" }],
        },
        {
            title: "Annual Report 1995-1996",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_95_96.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1994-1995",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_94_95.pdf" }],
        },
        {
            title: "Annual Report 1993-1994",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_93_94.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1992-1993",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Progress-Report_92_93.pdf" }],
        },
        {
            title: "Annual Report 1990",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Progress-Report_90.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1987-1988",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Progress-Report_87_88.pdf" }],
        },
        {
            title: "Annual Report 1985-1986",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_85_86.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1984-1985",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2020/10/Progress-Report_84_85.pdf" }],
        },
        {
            title: "Annual Report 1983-1984",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Progress-Report_83_84.pdf" }],
        },
    ],
    [
        {
            title: "Annual Report 1981-1983",
            links: [{ text: "", url: "https://ampri.res.in/en/wp-content/uploads/2021/06/Progress-Report_81_83.pdf" }],
        },
    ],
];


function DisseminationOfInformation({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Reusable ContentRenderer */}
            <table className="min-w-[90vw] mx-auto my-6 border border-gray-300 rounded-lg">
                <tbody>
                    {reports.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-50">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-3 text-gray-800 w-1/2 align-top">
                                    {cell.title}{" "}
                                    {cell.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline ml-1"
                                        >
                                            {link.text || "View"}
                                        </a>
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>



            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default DisseminationOfInformation