// src/pages/DivisionDynamicPage.jsx
// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
    addDivision,
    deleteDivision,
    addSubdivision,
    deleteSubdivision,
    updateSubdivisionTitle,
    addContentItem,
    updateContentItem,
    deleteContentItem,
    reorderContentItems
} from "../../api/axios";
import handleTranslate from "../../utils/changeLanguage";
import ContentEditor from "../../components/Admin Edits/ContentEditor";

function DivisionDynamicPage({ pageData }) {
    const [divisions, setDivisions] = useState([]);
    const [selectedDivisionId, setSelectedDivisionId] = useState(null);
    const [selectedSubdivisionId, setSelectedSubdivisionId] = useState(null);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    
    // Load divisions from prop
    useEffect(() => {
        if (pageData?.divisions) {
            setDivisions(pageData.divisions);
        }
    }, [pageData]);

    // Add Division (API call)
    const handleAddDivision = async () => {
        const { data, error } = await addDivision(pageData._id, {
            name: `Division ${divisions.length + 1}`,
        });
        if (!error && data) {
            setDivisions(data.divisions);
            if (data.divisions.length > 0) {
                setSelectedDivisionId(data.divisions[data.divisions.length - 1]._id);
            }
        }
    };

    // Delete Division (API call)
    const handleDeleteDivision = async (divisionId) => {
        const { data, error } = await deleteDivision(pageData._id, divisionId);
        if (!error && data) {
            setDivisions(data.divisions);
            if (selectedDivisionId === divisionId) {
                setSelectedDivisionId(null);
                setSelectedSubdivisionId(null);
            }
        }
    };

    // Add Subdivision (API call)
    const handleAddSubdivision = async (divisionId) => {
        const { data, error } = await addSubdivision(pageData._id, divisionId, {
            title: `Sub ${Math.floor(Math.random() * 1000)}`,
        });
        if (!error && data) {
            setDivisions(data.divisions);
            setSelectedDivisionId(divisionId);
        }
    };

    // Delete Subdivision (API call)
    const handleDeleteSubdivision = async (divisionId, subId) => {
        const { data, error } = await deleteSubdivision(pageData._id, divisionId, subId);
        if (!error && data) {
            setDivisions(data.divisions);
            if (selectedSubdivisionId === subId) {
                setSelectedSubdivisionId(null);
            }
        }
    };

    // Update Subdivision Title (API call)
    const handleUpdateSubdivisionTitle = async (divisionId, subId, title) => {
        const { data, error } = await updateSubdivisionTitle(
            pageData._id,
            divisionId,
            subId,
            { title }
        );
        if (!error && data) {
            setDivisions(data.divisions);
        }
    };

    // Add Content Item (API call)
    // In DivisionDynamicPage component, modify the handleAddContentItem function
    const handleAddContentItem = async (divisionId, subId, contentItem) => {
        const { data, error } = await addContentItem(
            pageData._id,
            divisionId,
            subId,
            contentItem
        );
        if (!error && data) {
            setDivisions(data.divisions);
        } else {
            console.error("Error adding content item:", error);
            // You might want to show an error message to the user here
        }
    };

    // Update Content Item (API call)
    const handleUpdateContentItem = async (divisionId, subId, contentItemId, updates) => {
        const { data, error } = await updateContentItem(
            pageData._id,
            divisionId,
            subId,
            contentItemId,
            updates
        );
        if (!error && data) {
            setDivisions(data.divisions);
        }
    };

    // Delete Content Item (API call)
    const handleDeleteContentItem = async (divisionId, subId, contentItemId) => {
        const { data, error } = await deleteContentItem(
            pageData._id,
            divisionId,
            subId,
            contentItemId
        );
        if (!error && data) {
            setDivisions(data.divisions);
        }
    };

    // Reorder Content Items (API call)
    const handleReorderContentItems = async (divisionId, subId, contentItemIds) => {
        const { data, error } = await reorderContentItems(
            pageData._id,
            divisionId,
            subId,
            { contentItemIds }
        );
        if (!error && data) {
            setDivisions(data.divisions);
        }
    };

    // Helpers
    const selectedDivision = divisions.find((d) => d._id === selectedDivisionId);
    const selectedSubdivision = selectedDivision?.subdivisions.find(
        (s) => s._id === selectedSubdivisionId
    );

    return (
        <div className="h-[100vh] flex flex-col border rounded-lg shadow-lg bg-white overflow-hidden">
            {/* Header */}
            <div id="google_translate_element"></div>
            <div className="px-6 py-4  bg-[#004080]  text-white flex justify-between items-center shadow-md">
                
                <h1 className="text-2xl font-bold">{pageData.pageTitle && pageData.pageTitle}</h1>

                <div className='notranslate'>
                    <button onClick={() => handleTranslate("hi")} className="cursor-pointer  rounded-md text-white  hover:underline font-semibold px-4 py-2 ">
                        हिन्दी
                    </button>
                    |
                    <button onClick={() => handleTranslate("en")} className="cursor-pointer  rounded-md text-white  hover:underline font-semibold px-4 py-2 ">
                        English
                    </button>
                </div>

                <button
                    onClick={handleAddDivision}
                    className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-all flex items-center gap-2 hover:shadow-lg"
                >
                    ➕ Add Division
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Menu (Divisions + Subdivisions) */}
                <div className="w-1/3 bg-gray-50 border-r overflow-y-auto ultra-thin-scrollbar">
                    {divisions.length === 0 ? (
                        <div className="text-center p-8 text-gray-500">
                            <p>No divisions yet. Add your first division!</p>
                        </div>
                    ) : (
                        divisions.map((division) => (
                            <div key={division._id} className="border-b border-gray-200">
                                {/* Division */}
                                <div
                                    className={`flex justify-between items-center px-4 py-3 cursor-pointer ${selectedDivisionId === division._id
                                        ? "bg-blue-50 border-l-4 border-blue-500"
                                        : "hover:bg-gray-100 border-l-4 border-transparent"
                                        }`}
                                    onClick={() => {
                                        setSelectedDivisionId(division._id);
                                        setSelectedSubdivisionId(null);
                                    }}
                                >
                                    <span className="font-medium">{division.name}</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddSubdivision(division._id);
                                            }}
                                            className="p-1 text-green-500 hover:bg-green-100 rounded-full relative group"
                                        >
                                            ➕

                                            {/* Tooltip */}
                                            <span className="absolute -left-20 top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition-opacity 
                   whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                                Add Subdivision
                                            </span>
                                        </button>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteDivision(division._id);
                                            }}
                                            className="p-1 text-red-500 hover:bg-red-100 rounded-full relative group"
                                        >
                                            ❌

                                            {/* Tooltip */}
                                            <span className="absolute -left-20 top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition-opacity 
                   whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                                delete Division
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Subdivisions */}
                                {selectedDivisionId === division._id &&
                                    division.subdivisions.length > 0 && (
                                        <div className="ml-6 mt-1 mb-3 border-l-2 border-gray-200 pl-2">
                                            {division.subdivisions.map((sub) => (
                                                <div
                                                    key={sub._id}
                                                    className={`flex justify-between items-center px-3 py-2 rounded cursor-pointer my-1 ${selectedSubdivisionId === sub._id
                                                        ? "bg-green-50 text-green-700 font-medium"
                                                        : "hover:bg-gray-100"
                                                        }`}
                                                    onClick={() => setSelectedSubdivisionId(sub._id)}
                                                >
                                                    <span className="truncate">{sub.title}</span>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteSubdivision(division._id, sub._id);
                                                        }}

                                                        className="p-1 text-red-400 hover:text-red-600 rounded-full relative group"
                                                    >
                                                        ❌

                                                        {/* Tooltip */}
                                                        <span className="absolute -left-20 top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition-opacity 
                   whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                                            Delete Subdivision
                                                        </span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        ))
                    )}
                </div>

                {/* Content Panel */}
                <div className="flex-1 flex flex-col">
                    {selectedSubdivision ? (
                        <div className="p-6 h-full flex flex-col">
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subdivision Title
                                </label>
                                <input
                                    type="text"
                                    value={selectedSubdivision.title}
                                    onChange={(e) => {
                                        setNewTitle(e.target.value);
                                        setIsEditingTitle(true);
                                    }}
                                    onBlur={() => {
                                        if (isEditingTitle && newTitle !== selectedSubdivision.title) {
                                            handleUpdateSubdivisionTitle(
                                                selectedDivision._id,
                                                selectedSubdivision._id,
                                                newTitle
                                            );
                                        }
                                        setIsEditingTitle(false);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.target.blur();
                                        }
                                    }}
                                    className="border border-gray-300 p-3 rounded-lg w-full text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Content Editor Component */}
                            <ContentEditor
                                content={selectedSubdivision.content || []}
                                onAddContent={(contentItem) =>
                                    handleAddContentItem(
                                        selectedDivision._id,
                                        selectedSubdivision._id,
                                        contentItem
                                    )
                                }
                                onUpdateContent={(contentItemId, updates) =>
                                    handleUpdateContentItem(
                                        selectedDivision._id,
                                        selectedSubdivision._id,
                                        contentItemId,
                                        updates
                                    )
                                }
                                onDeleteContent={(contentItemId) =>
                                    handleDeleteContentItem(
                                        selectedDivision._id,
                                        selectedSubdivision._id,
                                        contentItemId
                                    )
                                }
                                onReorderContent={(contentItemIds) =>
                                    handleReorderContentItems(
                                        selectedDivision._id,
                                        selectedSubdivision._id,
                                        contentItemIds
                                    )
                                }
                            />
                        </div>
                    ) : selectedDivision ? (
                        <div className="h-full flex items-center justify-center text-gray-500">
                            <p>Select a subdivision to edit its content</p>
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500">
                            <p>Select a division or create a new one</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default DivisionDynamicPage;

