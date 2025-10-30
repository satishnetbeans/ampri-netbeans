//@ts-nocheck
import React, { useState, useMemo, act } from "react";

import AdminEditTable from "../Admin Edits/EditTable";

import checkBaseURL from "../../utils/CheckBaseUrl";

function DataTable({ from, title, columns, data, entriesPerPageOptions = [10, 25, 50], tabs = null, isAdmin, table }) {
    const baseUrl = checkBaseURL()

    console.log("DataTable Render from  :", from, title, columns, data, entriesPerPageOptions, tabs, isAdmin, table)

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(entriesPerPageOptions[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const [activeTab, setActiveTab] = useState(tabs ? tabs[0].key : null);
    const [isEditVisible, setIsEditVisible] = useState(false);

    console.log("aaaaaaaaaaaaaaaaa ",activeTab)

    // Determine which data to use based on tabs
    const dataSource = useMemo(() => {
        return tabs
            ? (tabs.find(tab => tab.key === activeTab)?.data || [])
            : data;
    }, [tabs, activeTab, data]);

    // Toggle edit visibility
    const toggleEditVisibility = () => {
        setIsEditVisible(!isEditVisible);
    };

    // Handle data update from AdminEditTable
    const handleDataUpdate = (updatedData) => {
        if (onDataUpdate) {
            onDataUpdate(updatedData, activeTab);
        }
        setIsEditVisible(false);
    };

    // Request sort for a column
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Sort data based on sort configuration
    const sortedData = useMemo(() => {
        if (!sortConfig.key) return dataSource;

        return [...dataSource].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }, [dataSource, sortConfig]);

    // Filter data based on search term
    const filteredData = useMemo(() => {
        if (!searchTerm) return sortedData;
        return sortedData.filter(row =>
            Object.values(row).some(value =>
                value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [sortedData, searchTerm]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Handle page change
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Handle tab change
    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
        setCurrentPage(1);
        setSearchTerm("");
        setSortConfig({ key: null, direction: 'ascending' });
    };

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    // Render cell content based on column type
    const renderCellContent = (column, value) => {
        if (column.toLowerCase() === 'imageurl' && value) {
            return (
                <div className="flex items-center justify-center h-full w-24 overflow-hidden">
                    <img
                        src={value}
                        alt="Profile"
                        className="h-28 w-full  object-cover border-2 border-gray-200"
                    />
                </div>
            );
        }

        if ((column.toLowerCase() === "details/download tender documents" || ((from === "AnnualProcurement" || from === "TechnologyInfo") && column.toLowerCase() === "detail/download") || (from === "APR_2023" && column.toLowerCase() === "property return detail") || (from === "SAIF" && column.toLowerCase() === "document") || column.toLowerCase() === "more details" || (from === "Career" && (column.toLowerCase() === "project staff" || column.toLowerCase() === "detail & application" || column.toLowerCase() === "notifications" || column.toLowerCase() === "shortlisted candidates for interview" || column.toLowerCase() === "result")) || (from === "OfficeMemorandum" && column.toLowerCase() === "download/details")) && value) {
            const documents = Array.isArray(value) ? value : [value];
            return (
                <div className="flex gap-x-4 gap-y-2 flex-wrap">
                    {documents.map((document, i) => (
                        <a target="_blank" key={document?._id || i} href={document.url && document.url.startsWith("uploads/")
                            ? `${baseUrl}/${document.url}`
                            : document.url} className="text-blue-400 hover:text-blue-600 hover:text-[15px] transition-all  underline underline-offset-2 px-1 hover:px-0">
                            {typeof document.name === "string"
                                ? document.name
                                : JSON.stringify(document.name)}
                        </a>
                    ))}
                </div>
            );
        }

        return (
            <div className="h-[70px] ultra-thin-scrollbar overflow-y-auto">
                {value || "-"}
            </div>
        );
    };

    return (
        <div className={`${from === "GuestHouse" ? "w-[90%] mb-9" : "w-[95%] my-9 shadow-xs "} mx-auto  bg-white rounded-xl overflow-hidden border border-gray-100`}>
            {/* Edit Overlay */}
            {isEditVisible && isAdmin && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-100 z-50 overflow-y-auto">
                    <AdminEditTable
                        data={dataSource}
                        columns={columns}
                        title={title}
                        tabs={tabs}
                        activeTab={activeTab}
                        onSave={handleDataUpdate}
                        onCancel={toggleEditVisibility}
                        table={table}
                        tab={activeTab}

                        from={from}
                    />
                </div>
            )}

            {/* Header Section */}
            <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 relative">
                <h1 className={`${from === "GuestHouse" ? " text-xl font-bold mb-8 text-gray-600 " : "text-3xl font-bold mb-8 text-[#004080] "}text-3xl font-bold mb-8 text-[#004080] text-center`}>{title}</h1>

                {isAdmin && (
                    <button
                        onClick={toggleEditVisibility}
                        className="absolute top-6 right-[1%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-xl hover:bg-blue-600"
                    >
                        Edit
                    </button>
                )}

                {
                    from === "BudgetAllocations" &&
                    <div className="text-sm text-center">
                        <p className="font-medium">The budget allocated to each of its agency, indicating the particulars of all plans, proposed expenditures and reports on disbursement made</p>
                        <span className="text-gray-700 font-semibold">note : </span>
                        <span className="text-blue-800 font-medium">Budget Allocation for this Year </span> <span className="text-gray-800">and</span>
                        <span className="text-blue-800 font-medium"> Amount rupees in lakh</span>
                    </div>
                }

            </div>

            {/* Tabs Section (if tabs are provided) */}
            {tabs && (
                <div className="border-b border-gray-200">
                    <div className="flex overflow-x-auto">

                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => handleTabChange(tab.key)}
                                className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tab.key
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Controls Section */}
            <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border-b border-gray-200">
                <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-2">Show</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => {
                            setEntriesPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {entriesPerPageOptions.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <span className="text-sm text-gray-700 ml-2">entries</span>
                </div>

                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder="Search records..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto w-full">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => (

                                <th
                                    key={index}
                                    className={`px-6 py-3 text-left text-[14px] font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 ${(column === "order" && columns.includes("S.NO.")) && "hidden"} 
                                    ${from === "SAIF" && (activeTab === "Processing Facilities" && (column === "remarks" || column ===  "Charges for academics institution(in Rs.)" || column === "Charges for industry(in Rs.)" || column === "document") && "hidden")}
                                    `}
                                    onClick={() => requestSort(column)}
                                >
                                    <div className="flex items-center whitespace-nowrap max-w-[18vw] overflow-x-auto ultra-thin-scrollbar mx-auto ">
                                        {column}
                                        {sortConfig.key === column && (
                                            <span className="ml-1">
                                                {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.length > 0 ? (
                            currentData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-blue-50 transition-colors duration-150"
                                >
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-4 text-sm font-[500] text-gray-500 ${column.toLowerCase() === 'img'
                                                ? 'w-20'
                                                : 'max-w-xs'
                                                }  ${(column === "order" && columns.includes("S.NO.")) && "hidden"}  ${from === "SAIF" && (activeTab === "Processing Facilities" && (column === "remarks" || column ===  "Charges for academics institution(in Rs.)" || column === "Charges for industry(in Rs.)" || column === "document") && "hidden")} `}
                                        >
                                            {console.log("Row Data :", row, "column : ", column, "row[column] :", row[column])}
                                            <div className="max-w-[18vw] mx-auto whitespace-break-spaces ">
                                                {renderCellContent(column, row[column])}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-8 text-center">
                                    <div className="flex flex-col items-center justify-center text-gray-500 ">
                                        <svg className="h-12 w-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-lg font-medium">No data found</p>
                                        <p className="text-sm mt-1">Try adjusting your search or filter parameters</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Section */}
            <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 bg-gray-50">
                <div className="text-sm text-gray-700 mb-4 sm:mb-0">
                    Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(endIndex, filteredData.length)}</span> of <span className="font-medium">{filteredData.length}</span> entries
                </div>

                <div className="flex items-center space-x-1">
                    <button
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        «
                    </button>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ‹
                    </button>

                    {getPageNumbers().map(page => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 rounded-md border text-sm font-medium ${currentPage === page
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ›
                    </button>
                    <button
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
