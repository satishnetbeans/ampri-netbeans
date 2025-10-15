// @ts-nocheck
import React, { useState } from "react";
import { fileUpload } from "../../api/axios";
import checkBaseURL from "../../utils/CheckBaseUrl";

// Helper function to check if a file is a video based on URL
const isVideoFile = (url) => {
  if (!url) return false;
  
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.m4v'];
  const urlLower = url.toLowerCase();
  
  return videoExtensions.some(ext => urlLower.endsWith(ext));
};

const AdminGalleryEditor = ({ _id, title: initialTitle, sections: initialSections, onSave, onCancel }) => {
    const baseUrl = checkBaseURL();
    const [title, setTitle] = useState(initialTitle);
    const [sections, setSections] = useState(initialSections);
    const [activeSection, setActiveSection] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    console.log(" title , sections  : ", title, sections);

    // Add new section
    const addSection = () => {
        const newSection = {
            sectionTitle: "New Section",
            tabs: [
                {
                    tabTitle: "New Tab",
                    images: []
                }
            ]
        };
        setSections([...sections, newSection]);
        setActiveSection(sections.length);
        setActiveTab(0);
    };

    // Delete section
    const deleteSection = (sectionIndex) => {
        if (sections.length <= 1) {
            alert("Cannot delete the only section");
            return;
        }
        const newSections = sections.filter((_, index) => index !== sectionIndex);
        setSections(newSections);
        setActiveSection(Math.min(activeSection, newSections.length - 1));
    };

    // Update section title
    const updateSectionTitle = (sectionIndex, newTitle) => {
        const newSections = [...sections];
        newSections[sectionIndex].sectionTitle = newTitle;
        setSections(newSections);
    };

    // Add new tab to section
    const addTab = (sectionIndex) => {
        const newSections = [...sections];
        newSections[sectionIndex].tabs.push({
            tabTitle: "New Tab",
            images: []
        });
        setSections(newSections);
        setActiveTab(newSections[sectionIndex].tabs.length - 1);
    };

    // Delete tab
    const deleteTab = (sectionIndex, tabIndex) => {
        const newSections = [...sections];
        if (newSections[sectionIndex].tabs.length <= 1) {
            alert("Cannot delete the only tab");
            return;
        }
        newSections[sectionIndex].tabs = newSections[sectionIndex].tabs.filter((_, index) => index !== tabIndex);
        setSections(newSections);
        setActiveTab(Math.min(activeTab, newSections[sectionIndex].tabs.length - 1));
    };

    // Update tab title
    const updateTabTitle = (sectionIndex, tabIndex, newTitle) => {
        const newSections = [...sections];
        newSections[sectionIndex].tabs[tabIndex].tabTitle = newTitle;
        setSections(newSections);
    };

    // Add new media to tab
    const addMedia = (sectionIndex, tabIndex) => {
        const newSections = [...sections];
        newSections[sectionIndex].tabs[tabIndex].images.push({
            src: "",
            title: "New Media",
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            alt: ""
        });
        setSections(newSections);
    };

    // Delete media
    const deleteMedia = (sectionIndex, tabIndex, mediaIndex) => {
        const newSections = [...sections];
        newSections[sectionIndex].tabs[tabIndex].images =
            newSections[sectionIndex].tabs[tabIndex].images.filter((_, index) => index !== mediaIndex);
        setSections(newSections);
    };

    // Update media details
    const updateMedia = (sectionIndex, tabIndex, mediaIndex, field, value) => {
        const newSections = [...sections];
        newSections[sectionIndex].tabs[tabIndex].images[mediaIndex][field] = value;
        setSections(newSections);
    };

    // Reorder sections
    const moveSection = (fromIndex, direction) => {
        const toIndex = fromIndex + direction;
        if (toIndex < 0 || toIndex >= sections.length) return;

        const newSections = [...sections];
        [newSections[fromIndex], newSections[toIndex]] = [newSections[toIndex], newSections[fromIndex]];
        setSections(newSections);
        setActiveSection(toIndex);
    };

    // Reorder tabs
    const moveTab = (sectionIndex, fromIndex, direction) => {
        const toIndex = fromIndex + direction;
        if (toIndex < 0 || toIndex >= sections[sectionIndex].tabs.length) return;

        const newSections = [...sections];
        const tabs = newSections[sectionIndex].tabs;
        [tabs[fromIndex], tabs[toIndex]] = [tabs[toIndex], tabs[fromIndex]];
        setSections(newSections);
        setActiveTab(toIndex);
    };

    // Reorder media
    const moveMedia = (sectionIndex, tabIndex, fromIndex, direction) => {
        const toIndex = fromIndex + direction;
        const media = sections[sectionIndex].tabs[tabIndex].images;
        if (toIndex < 0 || toIndex >= media.length) return;

        const newSections = [...sections];
        const tabMedia = newSections[sectionIndex].tabs[tabIndex].images;
        [tabMedia[fromIndex], tabMedia[toIndex]] = [tabMedia[toIndex], tabMedia[fromIndex]];
        setSections(newSections);
    };

    // Handle save
    const handleSave = () => {
        onSave(_id, {
            title,
            sections
        });
    };

    // Handle media URL or file upload
    const handleMediaUpload = async (sectionIndex, tabIndex, mediaIndex, event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const response = await fileUpload(formData);

                console.log("file upload response : ", response);

                if (response.error) throw new Error("Upload failed");

                const result = await response.data;
                const filePath = result.path || result.filePath;
                updateMedia(sectionIndex, tabIndex, mediaIndex, 'src', filePath);

            } catch (error) {
                console.error("Upload error:", error);
                alert("File upload failed");
            }
        }
    };

    // Format source URL for preview
    const formatSrc = (src) => {
        return src.startsWith("uploads/") ? `${baseUrl}/${src}` : src;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-[#004080] text-white p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Edit Gallery</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar - Sections */}
                    <div className="w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Sections</h3>
                                <button
                                    onClick={addSection}
                                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                                >
                                    + Add
                                </button>
                            </div>

                            <div className="space-y-2">
                                {sections.map((section, sectionIndex) => (
                                    <div
                                        key={sectionIndex}
                                        className={`p-3 pt-6 rounded cursor-pointer border relative ${activeSection === sectionIndex
                                            ? "bg-blue-100 border-blue-500"
                                            : "bg-white border-gray-200 hover:bg-gray-50"
                                            }`}
                                        onClick={() => {
                                            setActiveSection(sectionIndex);
                                            setActiveTab(0);
                                        }}
                                    >
                                        <div className="absolute top-0 left-0 bg-blue-500 w-full text-center text-white text-sm hover:bg-blue-400">select</div>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                value={section.sectionTitle}
                                                onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                                                className="flex-1 bg-transparent border-none focus:outline-none font-medium"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <div className="flex gap-1">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        moveSection(sectionIndex, -1);
                                                    }}
                                                    className="text-xs px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                                                    disabled={sectionIndex === 0}
                                                >
                                                    ↑
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        moveSection(sectionIndex, 1);
                                                    }}
                                                    className="text-xs px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                                                    disabled={sectionIndex === sections.length - 1}
                                                >
                                                    ↓
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteSection(sectionIndex);
                                                    }}
                                                    className="text-xs px-1 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Tabs and Media */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Tabs Navigation */}
                        {sections[activeSection] && (
                            <div className="border-b border-gray-300 bg-white">
                                <div className="p-4 flex items-center justify-between">
                                    <h3 className="font-semibold">
                                        Tabs in "{sections[activeSection].sectionTitle}"
                                    </h3>
                                    <button
                                        onClick={() => addTab(activeSection)}
                                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                                    >
                                        + Add Tab
                                    </button>
                                </div>
                                <div className="flex overflow-x-auto px-4 pb-2">
                                    {sections[activeSection].tabs.map((tab, tabIndex) => (
                                        <div
                                            key={tabIndex}
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => setActiveTab(tabIndex)}
                                            className={`px-4 pb-2 pt-6 mr-2 rounded-t-lg whitespace-nowrap relative border cursor-pointer ${activeTab === tabIndex
                                                ? "bg-blue-500 text-white border-2 border-blue-200"
                                                : "bg-white text-gray-700 hover:bg-gray-300 border-gray-300"
                                                }`}
                                        >
                                            <div className="absolute top-0 left-0 bg-blue-200 w-full text-center text-gray-900 text-sm hover:bg-blue-100">
                                                select
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={tab.tabTitle}
                                                    onChange={(e) => updateTabTitle(activeSection, tabIndex, e.target.value)}
                                                    className="bg-transparent border-none focus:outline-none max-w-32"
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                <div className="flex gap-1">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            moveTab(activeSection, tabIndex, -1);
                                                        }}
                                                        className="text-xs px-1 py-0.5 bg-gray-600 text-white rounded hover:bg-gray-700"
                                                        disabled={tabIndex === 0}
                                                    >
                                                        ↑
                                                    </button>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            moveTab(activeSection, tabIndex, 1);
                                                        }}
                                                        className="text-xs px-1 py-0.5 bg-gray-600 text-white rounded hover:bg-gray-700"
                                                        disabled={tabIndex === sections[activeSection].tabs.length - 1}
                                                    >
                                                        ↓
                                                    </button>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteTab(activeSection, tabIndex);
                                                        }}
                                                        className="text-xs px-1 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Media Grid */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {sections[activeSection]?.tabs[activeTab] && (
                                <>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold">
                                            Media in "{sections[activeSection].tabs[activeTab].tabTitle}"
                                        </h3>
                                        <button
                                            onClick={() => addMedia(activeSection, activeTab)}
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        >
                                            + Add Media
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {sections[activeSection].tabs[activeTab].images.map((media, mediaIndex) => {
                                            const isVideo = isVideoFile(media.src);
                                            const formattedSrc = formatSrc(media.src);

                                            return (
                                                <div key={mediaIndex} className="border border-gray-300 rounded-lg p-4 bg-white">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="font-medium">Media {mediaIndex + 1}</h4>
                                                            {isVideo && (
                                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                                                    Video
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <button
                                                                onClick={() => moveMedia(activeSection, activeTab, mediaIndex, -1)}
                                                                className="text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                                disabled={mediaIndex === 0}
                                                            >
                                                                ↑
                                                            </button>
                                                            <button
                                                                onClick={() => moveMedia(activeSection, activeTab, mediaIndex, 1)}
                                                                className="text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                                disabled={mediaIndex === sections[activeSection].tabs[activeTab].images.length - 1}
                                                            >
                                                                ↓
                                                            </button>
                                                            <button
                                                                onClick={() => deleteMedia(activeSection, activeTab, mediaIndex)}
                                                                className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Media Preview/Upload */}
                                                    <div className="mb-3">
                                                        {media.src ? (
                                                            <div className="relative">
                                                                {isVideo ? (
                                                                    <video
                                                                        src={formattedSrc}
                                                                        className="w-full h-32 object-cover rounded border"
                                                                        controls
                                                                    >
                                                                        Your browser does not support the video tag.
                                                                    </video>
                                                                ) : (
                                                                    <img
                                                                        src={formattedSrc}
                                                                        alt="Preview"
                                                                        className="w-full h-32 object-cover rounded border"
                                                                    />
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                                                                <span className="text-gray-500">No media</span>
                                                            </div>
                                                        )}
                                                        <input
                                                            type="file"
                                                            accept="image/*, video/*"
                                                            onChange={(e) => handleMediaUpload(activeSection, activeTab, mediaIndex, e)}
                                                            className="mt-2 w-full text-sm"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Or enter media URL"
                                                            value={media.src}
                                                            onChange={(e) => updateMedia(activeSection, activeTab, mediaIndex, 'src', e.target.value)}
                                                            className="mt-2 w-full p-2 border border-gray-300 rounded text-sm"
                                                        />
                                                    </div>

                                                    {/* Media Details */}
                                                    <div className="space-y-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Media Title"
                                                            value={media.title}
                                                            onChange={(e) => updateMedia(activeSection, activeTab, mediaIndex, 'title', e.target.value)}
                                                            className="w-full p-2 border border-gray-300 rounded text-sm"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Date (e.g., July 15, 2025)"
                                                            value={media.date}
                                                            onChange={(e) => updateMedia(activeSection, activeTab, mediaIndex, 'date', e.target.value)}
                                                            className="w-full p-2 border border-gray-300 rounded text-sm"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Alt Text (for images)"
                                                            value={media.alt}
                                                            onChange={(e) => updateMedia(activeSection, activeTab, mediaIndex, 'alt', e.target.value)}
                                                            className="w-full p-2 border border-gray-300 rounded text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {sections[activeSection].tabs[activeTab].images.length === 0 && (
                                        <div className="text-center py-8 text-gray-500">
                                            No media in this tab. Click "Add Media" to get started.
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminGalleryEditor;

