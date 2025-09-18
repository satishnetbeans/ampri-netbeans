// src/pages/DivisionDynamicPage.jsx
// @ts-nocheck

import React, { useState } from "react";

import { createDivisionPage } from "../../api/axios";

export default function DemoDivisionPage() {

    const [divisions, setDivisions] = useState([]);
    const [selectedDivisionId, setSelectedDivisionId] = useState(null);
    const [selectedSubdivisionId, setSelectedSubdivisionId] = useState(null);

    const [DivisionTitle, setDivisionTitle] = useState("Division Title");

    const [pageTitle, setPageTitle] = useState("");
    // handle create division page
    const handleCreateDivisionPage = async () => {
        if (!pageTitle.trim()) {
            alert("Please enter a page title");
            return;
        }

        const { data, error } = await createDivisionPage({ pageTitle });

        if (error) {
            alert("Error creating page: " + error);
        } else {
            alert("Division Page created successfully!");
            console.log("Created Page:", data);

            // reset input after success
            setPageTitle("");
        }
    };

    // Add a new division
    const addDivision = () => {
        const newDivision = {
            id: Date.now(),
            name: `Division ${divisions.length + 1}`,
            subdivisions: [],
        };
        setDivisions([...divisions, newDivision]);
        setSelectedDivisionId(newDivision.id);
        setSelectedSubdivisionId(null);
    };

    // Delete a division
    const deleteDivision = (divisionId) => {
        setDivisions(divisions.filter((d) => d.id !== divisionId));
        if (selectedDivisionId === divisionId) {
            setSelectedDivisionId(null);
            setSelectedSubdivisionId(null);
        }
    };

    // Add subdivision to a division
    const addSubdivision = (divisionId) => {
        setDivisions(
            divisions.map((d) =>
                d.id === divisionId
                    ? {
                        ...d,
                        subdivisions: [
                            ...d.subdivisions,
                            {
                                id: Date.now(),
                                title: `Sub ${d.subdivisions.length + 1}`,
                                content: "Sample string info...",
                            },
                        ],
                    }
                    : d
            )
        );
    };

    // Delete a subdivision
    const deleteSubdivision = (divisionId, subId) => {
        setDivisions(
            divisions.map((d) =>
                d.id === divisionId
                    ? {
                        ...d,
                        subdivisions: d.subdivisions.filter((s) => s.id !== subId),
                    }
                    : d
            )
        );
        if (selectedSubdivisionId === subId) {
            setSelectedSubdivisionId(null);
        }
    };

    // Update subdivision title/content
    const updateSubdivision = (divisionId, subId, field, value) => {
        setDivisions(
            divisions.map((d) =>
                d.id === divisionId
                    ? {
                        ...d,
                        subdivisions: d.subdivisions.map((s) =>
                            s.id === subId ? { ...s, [field]: value } : s
                        ),
                    }
                    : d
            )
        );
    };

    // Helpers
    const selectedDivision = divisions.find((d) => d.id === selectedDivisionId);
    const selectedSubdivision =
        selectedDivision?.subdivisions.find((s) => s.id === selectedSubdivisionId);

    return (
        <div className="h-[100vh] flex flex-col border rounded-lg shadow-lg bg-white overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white flex justify-between items-center shadow-md">
                <div>
                    <h1 className="text-2xl font-bold">{DivisionTitle}</h1>
                </div>
                {/* create new division page */}
                <div className="flex items-center gap-4 bg-blue-700 py-2 px-4 rounded-lg">
                    <span className="font-bold text-white">Create new division page:</span>

                    <input
                        type="text"
                        name="PageTitle"
                        value={pageTitle}
                        onChange={(e) => setPageTitle(e.target.value)}
                        placeholder="Enter Page Title"
                        className="bg-white text-gray-600 text-sm px-3 py-1.5 rounded-md"
                    />

                    <button
                        onClick={handleCreateDivisionPage}
                        className="bg-white text-blue-700 rounded-lg px-2 font-semibold hover:bg-gray-100 cursor-pointer"
                    >
                        Create
                    </button>
                </div>

                <button
                    onClick={addDivision}
                    className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-all flex items-center gap-2 hover:shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Division
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Menu (Divisions + Subdivisions) */}
                <div className="w-1/3 bg-gray-50 border-r overflow-y-auto overflow-x-hidden ultra-thin-scrollbar ">
                    {divisions.length === 0 ? (
                        <div className="text-center p-8 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <p>No divisions yet. Add your first division!</p>
                        </div>
                    ) : divisions.map((division) => (
                        <div key={division.id} className="border-b border-gray-200">
                            {/* Division */}
                            <div
                                className={`flex justify-between items-center px-4 py-3 cursor-pointer transition-all ${selectedDivisionId === division.id
                                    ? "bg-blue-50 border-l-4 border-blue-500"
                                    : "hover:bg-gray-100 border-l-4 border-transparent"
                                    }`}

                                onClick={() => {
                                    setSelectedDivisionId(division.id);
                                    setSelectedSubdivisionId(null);
                                }}
                            >
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                    </svg>
                                    <span className="font-medium">{division.name}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addSubdivision(division.id);
                                            setSelectedDivisionId(division.id);
                                            setSelectedSubdivisionId(null);
                                        }}
                                        className="p-1 text-green-500 hover:bg-green-100 rounded-full transition-colors relative group"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                        {/* Tooltip */}
                                        <span

                                            className="absolute -left-20 top-7  bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                            Add Subdivision
                                        </span>
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteDivision(division.id);
                                        }}
                                        className="p-1 text-red-500 hover:bg-red-100 rounded-full transition-colors relative group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>

                                        {/* Tooltip */}
                                        <span className="absolute -left-20 top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                            Delete Division
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Subdivisions (nested menu) */}
                            {selectedDivisionId === division.id && division.subdivisions.length > 0 && (
                                <div className="ml-8 mt-1 mb-3 border-l-2 border-gray-200 pl-2">
                                    {division.subdivisions.map((sub) => (
                                        <div
                                            key={sub.id}
                                            className={`flex justify-between items-center px-3 py-2 rounded cursor-pointer my-1 transition-all ${selectedSubdivisionId === sub.id
                                                ? "bg-green-50 text-green-700 font-medium"
                                                : "hover:bg-gray-100"
                                                }`}
                                            onClick={() => setSelectedSubdivisionId(sub.id)}
                                        >
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0-2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5z" clipRule="evenodd" />
                                                </svg>
                                                <span className="truncate">{sub.title}</span>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteSubdivision(division.id, sub.id);
                                                }}
                                                className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors relative group"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>

                                                {/* Tooltip for subdivision delete */}
                                                <span className="absolute -left-20 top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                                    Delete Subdivision
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="flex-1 flex flex-col">
                    {selectedSubdivision ? (
                        <div className="p-6 h-full flex flex-col">
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subdivision Title</label>
                                <input
                                    type="text"
                                    value={selectedSubdivision.title}
                                    onChange={(e) =>
                                        updateSubdivision(
                                            selectedDivision.id,
                                            selectedSubdivision.id,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    className="border border-gray-300 p-3 rounded-lg w-full text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter title"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                <textarea
                                    value={selectedSubdivision.content}
                                    onChange={(e) =>
                                        updateSubdivision(
                                            selectedDivision.id,
                                            selectedSubdivision.id,
                                            "content",
                                            e.target.value
                                        )
                                    }
                                    className="border border-gray-300 p-4 rounded-lg w-full flex-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Enter content here..."
                                />
                            </div>
                        </div>
                    ) : selectedDivision ? (
                        <div className="h-full flex items-center justify-center flex-col p-6 text-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-lg">Select a subdivision to edit its content</p>
                            <p className="mt-2">or create a new one using the + button next to the division</p>
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center flex-col p-6 text-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <p className="text-lg">Select a division to view its content</p>
                            <p className="mt-2">or create a new one using the button above</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

