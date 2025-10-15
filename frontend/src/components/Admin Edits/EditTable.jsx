// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { createCouncil, updateCouncil, deleteCouncil } from '../../api/axios';
import { createFormerDirector, updateFormerDirector, deleteFormerDirector } from '../../api/axios';
import { createManagementCouncil, updateManagementCouncil, deleteManagementCouncil } from '../../api/axios';
import { deleteAmpriDirectory, updateAmpriDirectory, createAmpriDirectory } from '../../api/axios';
import { deletetender, updatetender, createtender } from '../../api/axios';
import { deletetechnologyKnowHow, updatetechnologyKnowHow, createtechnologyKnowHow } from '../../api/axios';
import { deleteMOU, updateteMOU, createMOU } from '../../api/axios';
import { deletestaff, createstaff, updatestaff } from '../../api/axios';

import { deleteGuestHouseContact, updateGuestHouseContact, createGuestHouseContact } from '../../api/axios';

import { deleteAdministration, updateAdministration, createAdministration } from '../../api/axios';

import { createEvent, updateEvent, deleteEvent } from '../../api/axios';

import { createCareer, updateCareer, deleteCareer } from '../../api/axios';

import { createOfficeMemorandum, updateOfficeMemorandum, deleteOfficeMemorandum } from '../../api/axios';

const AdminEditTable = ({ data, columns, title, tabs, activeTab, onCancel, from, table, tab }) => {
    const [CareerColumnForDocument, setCareerColumnForDocument] = useState(null);

    if (columns && !columns.includes("order")) {
        columns.unshift("order")

    }
    console.log("  ......................... edit Table ..................................   ")
    console.log("table in data : ", data, columns, from)

    const [tableData, setTableData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [modifiedRows, setModifiedRows] = useState(new Set());
    const [savingRow, setSavingRow] = useState(null);
    const [formData, setformData] = useState(null);
    const [order, setorder] = useState(0);

    const hasFormData = formData && [...formData.entries()].length > 0;

    useEffect(() => {
        setTableData([...data]);
        setOriginalData([...data]);
        setModifiedRows(new Set());
    }, [data]);

    useEffect(() => {
        console.log("CareerColumnForDocument changed :", CareerColumnForDocument)
    }, [CareerColumnForDocument]);


    const handleInputChange = (index, column, value) => {
        const updatedData = [...tableData];
        updatedData[index][column] = value;

        console.log("rowwww : ", updatedData[index])
        setTableData(updatedData);

        // Mark row as modified
        const newModifiedRows = new Set(modifiedRows);
        newModifiedRows.add(index);
        setModifiedRows(newModifiedRows);
    };

    const handleDocumentChange = (rowIndex, column, docIndex, field, value) => {
        if (from === "Career") {
            setCareerColumnForDocument(column)
        }
        const updatedData = [...tableData];

        // Ensure documents array exists
        if (!updatedData[rowIndex][column]) {
            updatedData[rowIndex][column] = [];
        }

        // Ensure document object exists
        if (!updatedData[rowIndex][column][docIndex]) {
            updatedData[rowIndex][column][docIndex] = {};
        }

        // Update the specific field of the document
        updatedData[rowIndex][column][docIndex][field] = value;

        setTableData(updatedData);

        // Mark row as modified
        const newModifiedRows = new Set(modifiedRows);
        newModifiedRows.add(rowIndex);
        setModifiedRows(newModifiedRows);
    };

    const handleDocumentFileUpload = (rowIndex, column, docIndex, file) => {
        if (from === "Career") {
            setCareerColumnForDocument(column)
        }
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const updatedData = [...tableData];

        // Ensure documents array exists
        if (!updatedData[rowIndex][column]) {
            updatedData[rowIndex][column] = [];
        }

        // Ensure document object exists
        if (!updatedData[rowIndex][column][docIndex]) {
            updatedData[rowIndex][column][docIndex] = {};
        }

        // Update document with file and preview
        updatedData[rowIndex][column][docIndex].file = file;

        updatedData[rowIndex][column][docIndex].preview = URL.createObjectURL(file);

        setTableData(updatedData);

        // Mark row as modified
        const newModifiedRows = new Set(modifiedRows);
        newModifiedRows.add(rowIndex);
        setModifiedRows(newModifiedRows);
    };

    const addNewDocument = (rowIndex, column) => {

        if (from === "Career") {
            setCareerColumnForDocument(column)
        }
        const updatedData = [...tableData];

        // Ensure documents array exists
        if (!updatedData[rowIndex][column]) {
            updatedData[rowIndex][column] = [];
        }

        // Add new empty document
        updatedData[rowIndex][column].push({
            name: '',
            file: null,
            preview: null
        });

        setTableData(updatedData);

        // Mark row as modified
        const newModifiedRows = new Set(modifiedRows);
        newModifiedRows.add(rowIndex);
        setModifiedRows(newModifiedRows);
    };

    const removeDocument = (rowIndex, column, docIndex) => {
        if (from === "Career") {
            console.log("innnn : ",docIndex)
            setCareerColumnForDocument(column)
        }
        const updatedData = [...tableData];

        if (updatedData[rowIndex][column] && updatedData[rowIndex][column][docIndex]) {
            // Remove the document
            updatedData[rowIndex][column].splice(docIndex, 1);

            // If no documents left, set to empty array
            if (updatedData[rowIndex][column].length === 0) {
                updatedData[rowIndex][column] = [];
            }

            setTableData(updatedData);

            // Mark row as modified
            const newModifiedRows = new Set(modifiedRows);
            newModifiedRows.add(rowIndex);
            setModifiedRows(newModifiedRows);
        }
    };

    const handleImageUpload = (index, column, file) => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const form = new FormData();

        // Append file
        form.append("staffImage", file);
        form.append("table", table._id);
        form.append("tab", tab);

        for (let [key, value] of form.entries()) {
            console.log(key, " :", value)
        }
        setformData(form);
        setorder(tableData[index].order)

        const updatedData = [...tableData];
        updatedData[index].preview = URL.createObjectURL(file);

        setTableData(updatedData)
    };

    const addNewRow = () => {
        const newRow = {};
        columns.forEach(col => {
            newRow[col] = '';
        });

        // Add new row at the beginning instead of the end
        setTableData([newRow, ...tableData]);

        // Mark new row as modified
        const newModifiedRows = new Set(modifiedRows);
        // Shift all existing modified indices by +1 since we're adding at index 0
        const shiftedModifiedRows = new Set();
        modifiedRows.forEach(index => {
            shiftedModifiedRows.add(index + 1);
        });
        // Add the new row at index 0
        shiftedModifiedRows.add(0);
        setModifiedRows(shiftedModifiedRows);
    };

    const deleteRow = async (index) => {
        try {
            setSavingRow(index);

            const rowData = tableData[index];

            // Mapping `from` values to delete APIs
            const deleteApiMap = {
                ResearchCouncil: deleteCouncil,
                formerDirectors: deleteFormerDirector,
                ManagementCouncil: deleteManagementCouncil,
                staffInformation: deletestaff,
                AmpriDirectory: deleteAmpriDirectory,
                Tenders: deletetender,
                TechnologyKnowHowTransferred: deletetechnologyKnowHow,
                MOU: deleteMOU,
                GuestHouse: deleteGuestHouseContact,
                Administration: deleteAdministration,

                Events: deleteEvent,
                Career: deleteCareer,
                OfficeMemorandum: deleteOfficeMemorandum
            };

            if (rowData._id && deleteApiMap[from]) {
                await deleteApiMap[from](rowData._id);
            } else {
                console.log("Deleting row without API call (no ID or not council)");
            }

            // Remove row from local state
            const updatedData = [...tableData];
            updatedData.splice(index, 1);
            setTableData(updatedData);

            // Remove from modified rows and adjust indices
            const newModifiedRows = new Set();
            modifiedRows.forEach(modifiedIndex => {
                if (modifiedIndex > index) {
                    newModifiedRows.add(modifiedIndex - 1);
                } else if (modifiedIndex < index) {
                    newModifiedRows.add(modifiedIndex);
                }
            });
            setModifiedRows(newModifiedRows);
            alert('Row deleted successfully!');
        } catch (error) {
            console.error('Error deleting row:', error);
            alert('Error deleting row. Please try again.');
        } finally {
            setSavingRow(null);
        }
    };

    const saveRow = async (index) => {
        try {
            setSavingRow(index);

            const rowData = tableData[index];
            const haveID = rowData._id;

            console.log("rowData  aaa :  ", rowData)
            console.log("haveID : ", haveID)

            // Mapping `from` values to API functions
            const apiMap = {
                ResearchCouncil: { create: createCouncil, update: updateCouncil },
                formerDirectors: { create: createFormerDirector, update: updateFormerDirector },
                ManagementCouncil: { create: createManagementCouncil, update: updateManagementCouncil },
                staffInformation: { create: createstaff, update: updatestaff },
                AmpriDirectory: { create: createAmpriDirectory, update: updateAmpriDirectory },
                Tenders: { create: createtender, update: updatetender },
                TechnologyKnowHowTransferred: { create: createtechnologyKnowHow, update: updatetechnologyKnowHow },
                MOU: { create: createMOU, update: updateteMOU },
                GuestHouse: { create: createGuestHouseContact, update: updateGuestHouseContact },
                Administration: { create: createAdministration, update: updateAdministration },

                Events: { create: createEvent, update: updateEvent },
                Career: { create: createCareer, update: updateCareer },
                OfficeMemorandum: { create: createOfficeMemorandum, update: updateOfficeMemorandum },
            };

            if (apiMap[from]) {
                const { create, update } = apiMap[from];

                // Prepare form data for tender documents if it's a tender row
                let tenderFormData = null;
                let getDocuments = (from === 'Tenders' && rowData["Details/Download Tender Documents"]) || (from === 'OfficeMemorandum' && rowData["Download/Details"]) || (from === 'Career' && (rowData[CareerColumnForDocument])) || (from === 'Events' && rowData["More Details"])



                console.log("getDocuments .................. : ", getDocuments)

                if (getDocuments) {

                    tenderFormData = new FormData();

                    // Append each document file
                    getDocuments.forEach((doc, docIndex) => {
                        if (doc.file) {
                            if (from === "Career") {
                                tenderFormData.append(`documents`, doc.file);
                                tenderFormData.append(`documentNames`, `${doc.name}-${CareerColumnForDocument}`);
                            } else {
                                tenderFormData.append(`documents`, doc.file);
                                tenderFormData.append(`documentNames`, doc.name || `Document ${docIndex + 1}`);
                            }
                        } else {
                            if (from === "Career") {
                                tenderFormData.append(`updateURLs`, doc.url);
                                tenderFormData.append(`updateDocumentNames`, `${doc.name}-${CareerColumnForDocument}`);
                            } else {
                                tenderFormData.append(`updateURLs`, doc.url);
                                tenderFormData.append(`updateDocumentNames`, doc.name || `Document ${docIndex + 1}`);
                            }
                        }
                    });

                    // Append other row data
                    Object.entries(rowData).forEach(([key, value]) => {
                        if (key !== 'Details/Download Tender Documents') {
                            tenderFormData.append(key, value);
                        }
                    });

                    // Append table and tab info
                    if (!rowData._id) {
                        tenderFormData.append('table', table._id);
                        tenderFormData.append('tab', tab);
                    }
                }
                if (tenderFormData) {
                    for (let [key, value] of tenderFormData.entries()) {
                        console.log("formdata ........... ", key, value)
                    }

                }

                if (rowData._id) {
                    // Append existing object fields
                    if (formData) {
                        console.log("yes formdata is here ")
                        Object.entries(tableData[index]).forEach(([key, value]) => {
                            formData.append(key, value);
                        });
                    }

                    // Update existing entry
                    const dataToSend = (from === 'Tenders' || from === "Events" || from === "OfficeMemorandum" || from === "Career") && tenderFormData ? tenderFormData : (formData ? formData : rowData);
                    console.log("dataToSend you know : ", dataToSend)
                    const res = await update(rowData._id, dataToSend);
                    console.log("res : ", res)
                    if (res.data) {
                        alert('Row saved successfully!');
                    } else {
                        alert(res.error.error || "couldn't update row , try again")
                        if (formData) {
                            window.location.reload();
                        }
                    }
                } else {
                    console.log("create new one : :::::::::::: ", table)
                    // Create new entry
                    const rowDataWithTable = { ...rowData, table: table._id, "tab": tab };

                    // Append existing object fields
                    if (formData) {
                        Object.entries(tableData[index]).forEach(([key, value]) => {
                            formData.append(key, value);
                        });
                    }

                    console.log(`Creating new ${from} with data:`, rowDataWithTable);

                    const dataToSend = (from === 'Tenders' || from === "Events" || from === "OfficeMemorandum" || from === "Career") && tenderFormData ? tenderFormData : (formData ? formData : rowDataWithTable);
                    const result = await create(dataToSend);
                    console.log("res : ", result)

                    if (result.data) {
                        alert('Row saved successfully!');
                        // Update local data with returned ID
                        const updatedData = [...tableData];
                        updatedData[index] = { ...updatedData[index], _id: result.data._id };
                        setTableData(updatedData);
                    } else {
                        alert(result.error.error || "couldn't create row , try again")
                        if (formData) {
                            window.location.reload();
                        }

                    }

                }
            } else {
                // For other cases, simulate API call
                console.log('Saving row (not council):', rowData);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            // Update originalData to match current tableData
            const newOriginalData = [...originalData];
            if (index < newOriginalData.length) {
                newOriginalData[index] = { ...tableData[index] };
            } else {
                newOriginalData.push({ ...tableData[index] });
            }
            setOriginalData(newOriginalData);

            // Remove from modified rows
            const newModifiedRows = new Set(modifiedRows);
            newModifiedRows.delete(index);
            setModifiedRows(newModifiedRows);

        } catch (error) {
            console.error('Error saving row:', error);
            alert('Error saving row. Please try again.');
            if (formData) {
                window.location.reload();
            }
        } finally {
            setSavingRow(null);
        }
    };

    return (
        <div className="py-6 w-[96%] mx-auto ">
            <div className="mb-6 ">
                <h1 className="text-2xl font-bold text-center">Edit {title}</h1>
            </div>

            <div className="flex justify-center px-2 space-x-6 font-semibold mb-4">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    onClick={addNewRow}
                    className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700"
                >
                    Add New Row
                </button>
            </div>

            <div className="overflow-x-auto w-full rounded-lg shadow">
                <table className="table-auto  border-collapse w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {column}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex} className={modifiedRows.has(rowIndex) ? 'bg-yellow-50' : ''}>

                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="px-2  h-[12vh] ">
                                        <div className='max-w-[18vw] mx-auto'>
                                            {column.toLowerCase() === 'imageurl' ? (
                                                <div>
                                                    {(row[column] || row.preview) && (
                                                        <div className='h-16 w-16 overflow-hidden mb-3'>
                                                            <img
                                                                src={row.preview ? row.preview : row[column]}
                                                                alt="Preview"
                                                                className="h-16 w-16 object-cover"
                                                            />
                                                        </div>

                                                    )}
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        name='staffImage'
                                                        id='staffImage'
                                                        placeholder='update image'
                                                        onChange={(e) => {
                                                            if (e.target.files && e.target.files[0]) {
                                                                handleImageUpload(rowIndex, column, e.target.files[0]);
                                                            }
                                                        }}
                                                        className="border border-gray-200 text-[13px] px-1 pb-1 pt-0.5 rounded-md text-gray-600 font-[600] hover:bg-blue-300 hover:text-white cursor-pointer"
                                                    />
                                                </div>
                                            ) : (column.toLowerCase() === "details/download tender documents" || column.toLowerCase() === "more details" || (from === "Career" && (column.toLowerCase() === "project staff" || column.toLowerCase() === "detail & application" || column.toLowerCase() === "notifications" || column.toLowerCase() === "shortlisted candidates for interview" || column.toLowerCase() === "result")) || (from === "OfficeMemorandum" && column.toLowerCase() === "download/details")) ? (
                                                <div className='relative ml-9  w-[16vw]'>
                                                    <button
                                                        type="button"
                                                        onClick={() => addNewDocument(rowIndex, column)}
                                                        className='text-xl font-bold absolute -left-8 top-4 px-2 pb-[3px] rounded-full bg-green-500 z-20 text-white hover:bg-green-600 cursor-pointer'
                                                    >
                                                        +
                                                    </button>

                                                    <ul className="h-[15vh] w-[15vw] overflow-y-auto ultra-thin-scrollbar relative">
                                                        {(row[column] || []).map((document, docIndex) => (
                                                            <li key={docIndex} className='mb-2.5 bg-white rounded-md px-1 py-1 w-full'>
                                                                <div className="flex items-center gap-2 w-full mb-1">
                                                                    <span className="text-xs font-medium text-gray-600">Name:</span>
                                                                    <input
                                                                        type="text"
                                                                        value={document.name || ''}
                                                                        onChange={(e) => handleDocumentChange(rowIndex, column, docIndex, 'name', e.target.value)}
                                                                        placeholder="Document name"
                                                                        className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm font-semibold text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeDocument(rowIndex, column, docIndex)}
                                                                        className="text-red-500 hover:text-red-700 text-lg font-bold"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </div>
                                                                <div className="flex items-start gap-2 w-full">
                                                                    <label htmlFor={document._id ? document._id : `file-upload ${docIndex}`} className="border border-gray-200 text-[13px]  rounded-md text-gray-600 font-[600] hover:bg-blue-300 hover:text-white cursor-pointer w-full px-1 whitespace-nowrap overflow-hidden"
                                                                        id="file-label no">
                                                                        <span className='font-bold'>Choose file :</span> {document.url ? (document.url.split("/")[document.url.split("/").length - 1]) : document.preview ? (document.preview.split("/")[document.preview.split("/").length - 1]) : "no file choosen"}
                                                                    </label>
                                                                    <input
                                                                        type="file"
                                                                        id={document._id ? document._id : `file-upload ${docIndex}`}
                                                                        onChange={(e) => {
                                                                            if (e.target.files && e.target.files[0]) {
                                                                                handleDocumentFileUpload(rowIndex, column, docIndex, e.target.files[0]);
                                                                            }
                                                                        }}
                                                                        className="hidden"
                                                                    />
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : column.toLowerCase() === 'email' ? (
                                                <input
                                                    type="email"
                                                    value={row[column] || ''}
                                                    onChange={(e) => handleInputChange(rowIndex, column, e.target.value)}
                                                    placeholder="Enter email"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                />
                                            ) : (
                                                <textarea
                                                    value={row[column] || ''}
                                                    onChange={(e) => handleInputChange(rowIndex, column, e.target.value)}
                                                    placeholder={`Enter ${column}`}
                                                    className={`px-1.5 py-1 border border-gray-300 ultra-thin-scrollbar rounded-md h-[12vh] mt-3 ${row[column] && row[column].length > 22 ? "w-[16vw]" : row[column] && row[column].length > 13 ? "w-[11vw]" : "w-[8vw]"}`}
                                                    rows={2}
                                                />
                                            )}
                                        </div>
                                    </td>
                                ))}
                                <td className="px-6 py-4 whitespace-nowrap space-y-2">
                                    <button
                                        onClick={() => saveRow(rowIndex, columns)}
                                        disabled={
                                            (!(hasFormData && order === row.order) && !modifiedRows.has(rowIndex)) || savingRow === rowIndex
                                        }
                                        className="block w-full px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                    >
                                        {savingRow === rowIndex ? "Saving..." : "Save"}
                                    </button>

                                    <button
                                        onClick={() => deleteRow(rowIndex)}
                                        disabled={savingRow === rowIndex}
                                        className="block w-full px-3 py-1 text-red-600 hover:text-red-900 disabled:opacity-50"
                                    >
                                        {savingRow === rowIndex ? 'Deleting...' : 'Delete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {tableData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No data available. Click "Add New Row" to get started.
                </div>
            )}
        </div>
    );
};

export default AdminEditTable;
