import React, { useState } from "react";

const GalleryComponent = ({ title, sections }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    // Open lightbox with the clicked image
    const openLightbox = (tabIndex, imageIndex) => {
        setActiveTab(tabIndex);
        setCurrentImage(imageIndex);
        setLightboxOpen(true);
    };

    // Navigate through images in lightbox
    const navigateImage = (direction) => {
        const currentTabImages = sections[activeSection].tabs[activeTab].images;
        let newIndex = currentImage + direction;

        if (newIndex < 0) newIndex = currentTabImages.length - 1;
        if (newIndex >= currentTabImages.length) newIndex = 0;

        setCurrentImage(newIndex);
    };

    // Close lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold  text-[#004080] text-center mb-2">{title}</h1>
                <p className="text-center text-gray-600 mb-8">Explore our collection of events and activities</p>

                {/* Section tabs */}
                <div className="flex overflow-x-auto justify-center  mb-6 scrollbar-thin border-b border-gray-200 scrollbar-thumb-blue-500 scrollbar-track-blue-100 ">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveSection(index);
                                setActiveTab(0);
                            }}
                            className={`px-4 py-2 mr-2  whitespace-nowrap font-semibold cursor-pointer ${activeSection === index
                                    ? "border-b-2 border-[#004080] text-[#004080]"
                                    : " text-gray-700 hover:text-[#004080]"
                                }`}
                        >
                            {section.sectionTitle}
                        </button>
                    ))}
                </div>

                {/* Content tabs */}
                <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
                    {sections[activeSection].tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 mr-2 rounded-lg whitespace-nowrap cursor-pointer ${activeTab === index
                                    ? "bg-[#004080] text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {tab.tabTitle}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sections[activeSection].tabs[activeTab].images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
                            onClick={() => openLightbox(activeTab, index)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt || `Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="font-semibold text-gray-800 text-sm mb-1">{image.title}</h3>
                                <p className="text-gray-600 text-xs">{image.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox modal */}
                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl hover:text-blue-400"
                        >
                            &times;
                        </button>

                        <button
                            onClick={() => navigateImage(-1)}
                            className="absolute left-4 text-white text-3xl hover:text-blue-400 z-10"
                        >
                            &#8249;
                        </button>

                        <button
                            onClick={() => navigateImage(1)}
                            className="absolute right-4 text-white text-3xl hover:text-blue-400 z-10"
                        >
                            &#8250;
                        </button>

                        <div className="max-w-4xl w-full max-h-full">
                            <img
                                src={sections[activeSection].tabs[activeTab].images[currentImage].src}
                                alt={sections[activeSection].tabs[activeTab].images[currentImage].alt || "Gallery image"}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />

                            <div className="text-white text-center mt-4">
                                <h3 className="text-xl font-semibold">
                                    {sections[activeSection].tabs[activeTab].images[currentImage].title}
                                </h3>
                                <p className="text-gray-300">
                                    {sections[activeSection].tabs[activeTab].images[currentImage].date}
                                </p>
                                <p className="text-gray-300 mt-2">
                                    {currentImage + 1} of {sections[activeSection].tabs[activeTab].images.length}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryComponent;
