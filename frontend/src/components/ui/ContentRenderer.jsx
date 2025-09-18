import React, { useState } from "react";

// ContentRenderer component
function ContentRenderer({from, contentData }) {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = (content) => {
        return content.map((item, index) => {
            switch (item.type) {
                case 'image':
                    return (
                        <div key={index} className="h-[62vh] w-full overflow-hidden my-6 flex justify-center">
                            <img
                                src={item.src}
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
                default:
                    return null;
            }
        });
    };

    return (
        <div className={`${from === "GuestHouse" || "EESD" ? "my-0" : " rounded-3xl my-9"} w-[95%] mx-auto bg-white px-8 py-5 `}>
            <h1 className="text-3xl font-bold mb-8 text-[#004080] text-center">
                {contentData.title}
            </h1>

            {/* Check if tabs exist */}
            {contentData.pageContent.tabs ? (
                <>
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
                        {contentData.pageContent.tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 font-medium text-lg whitespace-nowrap ${activeTab === index
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
                        {renderContent(contentData.pageContent.tabs[activeTab].content)}
                    </div>
                </>
            ) : (
                /* If no tabs, render content directly */
                <div className="content">
                    {contentData.pageContent.content && renderContent(contentData.pageContent.content)}
                </div>
            )}
        </div>
    );
}

export default ContentRenderer;