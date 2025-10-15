// @ts-nocheck
import React, { useState, useEffect } from "react";
import EditContentRender from "../Admin Edits/EditContentRender";

import { updateContentRenderPage } from "../../api/axios";

import checkBaseURL from "../../utils/CheckBaseUrl";

import { Edit } from "lucide-react";

// ContentRenderer component
function ContentRenderer({ from, contentData, isAdmin }) {
    const baseURl = checkBaseURL()
    const [activeTab, setActiveTab] = useState(0);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [contentRenderData, setcontentRenderData] = useState(null);
    // console.log("contentRenderData above  : ", contentRenderData)


    useEffect(() => {
        if (contentData && contentData.pageContent && contentData.pageContent.tabs.length > 0) {
            console.log("contentData in useEffect :  ", contentData)
            const updated = contentData
            updated.pageContent.tabs.forEach(tab => {
                tab.content.sort((a, b) => a.order - b.order);
            });
            setcontentRenderData(updated)
        }
        else if (contentData && contentData.pageContent && contentData.pageContent.content.length > 0) {
            const updated = contentData
            updated.pageContent.content.sort((a, b) => a.order - b.order)
            setcontentRenderData(updated)
        }
    }, [contentData])


    // Add this function to handle save
    const handleSave = async (updatedData) => {
        try {
            const formData = new FormData();
            formData.append('contentData', JSON.stringify(updatedData));

            // You might need to handle file uploads separately
            const response = await updateContentRenderPage(updatedData._id, updatedData)
            console.log("response : ", response)

            if (response.data) {
                // Handle successful save
                alert('changes saved');
                setIsEditVisible(false);
                // You might want to refresh the content data here
            } else {
                alert('Failed');
            }
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save changes');
        }
    };

    const handleCancel = () => {
        setIsEditVisible(false);
    };

    const renderContent = (content) => {
        return content.map((item, index) => {
            switch (item.type) {
                case 'image':
                    return (
                        <div key={index} className="h-[25vh] md:h-[62vh] w-full overflow-hidden my-6 flex justify-center">
                            <img
                                src={item.src.startsWith("uploads/") ? `${baseURl}/${item.src}` : item.src}
                                alt={item.alt}
                                className="w-full h-full rounded-lg shadow-md object-fill"
                            />
                        </div>
                    );
                case 'heading':
                    return (
                        <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-[#004080]">
                            {item.para}
                        </h2>
                    );
                case 'subHeading':
                    return (
                        <h2 key={index} className="text-xl font-semibold mt-8 mb-4 text-gray-600">
                            {item.para}
                        </h2>
                    );
                case 'paragraph':
                    return (
                        <p key={index} className="text-[#555555] mb-4">
                            {item.para}
                        </p>
                    );
                case 'list':
                    return (
                        <div key={index} className="mb-6">
                            <p className="text-[#555555] font-semibold mb-2">{item.para}</p>
                            <ul className="list-disc pl-6 text-[#555555] space-y-2">
                                {item.items.map((listItem, i) => (
                                    <li key={i}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    );
                case 'imagesList':
                    return (
                        <div key={index} className="mb-6">
                            <p className="text-xl md:text-xl font-semibold text-gray-600 mb-6">{item.para}</p>
                            <ul className={`list-none pl-6 text-[#555555] grid grid-cols-1 md:grid md:grid-cols-3 gap-7 md:gap-20`}>
                                {item.imagesListItems.map((listItem, i) => (
                                    <li key={i}>
                                        <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                            <img
                                                decoding="async"
                                                src={listItem.src.startsWith("uploads/") ? `${baseURl}/${listItem.src}` : listItem.src}
                                                alt={listItem.alt}
                                                className="w-full h-[220px] object-fill transition-transform duration-500 group-hover:scale-105"

                                            />

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className={`${from === "GuestHouse" || "EESD" ? "my-0" : " rounded-3xl my-9"} w-[95%] mx-auto bg-white px-8 py-5 `}>

            {/* Edit Overlay */}
            {isEditVisible && isAdmin && contentRenderData && (
                <EditContentRender
                    contentData={contentRenderData}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}

            {contentRenderData &&
                <div>
                    <h1 className="text-3xl font-bold mb-8 text-[#004080] text-center relative">
                        {contentRenderData && contentRenderData.title}
                        {isAdmin && (
                            <button
                                onClick={() => setIsEditVisible(!isEditVisible)}
                                className="absolute top-0 right-[2%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-semibold text-[25px] hover:bg-blue-600 flex items-center gap-2"
                            >
                                <Edit size={25} />Edit
                            </button>
                        )}
                    </h1>

                    {/* Check if tabs exist */}
                    {contentRenderData.pageContent.tabs.length > 0 ? (
                        <>
                            {/* Tab Navigation */}
                            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">

                                {console.log("contentRenderData  : ", contentRenderData)}

                                {contentRenderData.pageContent.tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-6 py-3 font-bold text-xl whitespace-nowrap cursor-pointer ${activeTab === index
                                            ? "text-[#004080] border-b-2 border-[#004080]"
                                            : "text-gray-500 hover:text-[#004080]"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="tab-content h-auto w-full">
                                {renderContent(contentRenderData.pageContent.tabs[activeTab].content)}
                            </div>
                        </>
                    ) : (
                        /* If no tabs, render content directly */
                        <div className="content">
                            {contentRenderData.pageContent.content && renderContent(contentRenderData.pageContent.content)}
                        </div>
                    )}
                </div>
            }


        </div>
    );
}

export default ContentRenderer;