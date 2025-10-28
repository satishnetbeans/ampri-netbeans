// @ts-nocheck
import React, { useState } from "react";
import AdminGalleryEditor from "../../Admin Edits/GalleryEditor";
import { UpdateGallery } from "../../../api/axios";
import checkBaseURL from "../../../utils/CheckBaseUrl";

// Helper function to check if a file is a video based on URL
const isVideoFile = (url) => {
  if (!url) return false;
  
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.m4v'];
  const urlLower = url.toLowerCase();
  
  return videoExtensions.some(ext => urlLower.includes(ext));
};

// Helper function to get file type for better handling
const getFileType = (url) => {
  if (isVideoFile(url)) return 'video';
  return 'image';
};

const GalleryComponent = ({ id, title, sections, isAdmin }) => {
    const baseUrl = checkBaseURL();
    const [activeSection, setActiveSection] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentMedia, setCurrentMedia] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    // Open lightbox with the clicked media
    const openLightbox = (tabIndex, mediaIndex) => {
        setActiveTab(tabIndex);
        setCurrentMedia(mediaIndex);
        setLightboxOpen(true);
    };

    // Navigate through media in lightbox
    const navigateMedia = (direction) => {
        const currentTabMedia = sections[activeSection].tabs[activeTab].images;
        let newIndex = currentMedia + direction;

        if (newIndex < 0) newIndex = currentTabMedia.length - 1;
        if (newIndex >= currentTabMedia.length) newIndex = 0;

        setCurrentMedia(newIndex);
    };

    // Close lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    // Handle save from editor
    const handleSaveGallery = async (_id, updatedGalleryData) => {
        console.log("updated gallery .......... ", _id, updatedGalleryData);
        try {
            const response = await UpdateGallery(_id, updatedGalleryData);
            console.log("file Save Gallery response : ", response);

            if (response.data) {
                alert("gallery updated");
            } else {
                console.log(response.error);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("gallery updation failed");
        }
        setIsEditing(false);
    };

    // Handle cancel editing
    const handleCancelEditing = () => {
        setIsEditing(false);
    };

    // Format source URL
    const formatSrc = (src) => {
        return src.startsWith("uploads/") ? `${baseUrl}/${src}` : src;
    };

    return (
        <div className=" bg-gray-50">
            {isEditing && (
                <AdminGalleryEditor
                    _id={id}
                    title={title}
                    sections={sections}
                    onSave={handleSaveGallery}
                    onCancel={handleCancelEditing}
                />
            )}

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#004080] text-center mb-2 relative">
                    {title}
                    {isAdmin && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="absolute top-3 right-[2%] border border-white bg-blue-800 py-0.5 px-1 rounded-md cursor-pointer text-white font-bold text-2xl hover:bg-blue-600 max-[600px]:right-[29%] max-[600px]:-top-6"
                        >
                            Edit Gallery
                        </button>
                    )}
                </h1>

                <p className="text-center text-gray-600 mb-8">Explore our collection of events and activities</p>

                {/* Section tabs */}
                <div className=" pl-2 flex overflow-x-auto pb-2 mb-6 scrollbar-thin border-b border-gray-200 scrollbar-thumb-blue-500 scrollbar-track-blue-100 ultra-thin-scrollbar">
                   
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveSection(index);
                                setActiveTab(0);
                            }}
                            className={` px-4 py-2 mr-2 whitespace-nowrap font-semibold cursor-pointer ${
                                activeSection === index
                                    ? "border-b-2 border-[#004080] text-[#004080]"
                                    : "text-gray-700 hover:text-[#004080]"
                            }`}
                        >
                            {section.sectionTitle}
                        </button>
                    ))}
                </div>

                {/* Content tabs */}
                <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 ultra-thin-scrollbar">
                    {sections[activeSection].tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 mr-2 rounded-lg whitespace-nowrap cursor-pointer ${
                                activeTab === index
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
                    {sections[activeSection].tabs[activeTab].images.map((media, index) => {
                        const isVideo = isVideoFile(media.src);
                        const formattedSrc = formatSrc(media.src);

                        return (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white relative"
                                onClick={() => openLightbox(activeTab, index)}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    {isVideo ? (
                                        <>
                                            <video
                                                src={formattedSrc}
                                                className="w-full h-full object-cover"
                                                muted
                                                playsInline
                                            />
                                            {/* Video play indicator */}
                                            <div className="absolute inset-0 flex items-center justify-center ">
                                                <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <img
                                            src={formattedSrc}
                                            alt={media.alt || `Gallery image ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="p-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-gray-800 text-sm">{media.title}</h3>
                                        {isVideo && (
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                                Video
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-xs">{media.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Lightbox modal */}
                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl hover:text-blue-400 z-20 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            &times;
                        </button>

                        <button
                            onClick={() => navigateMedia(-1)}
                            className="absolute left-4 text-white text-3xl hover:text-blue-400 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            &#8249;
                        </button>

                        <button
                            onClick={() => navigateMedia(1)}
                            className="absolute right-4 text-white text-3xl hover:text-blue-400 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            &#8250;
                        </button>

                        <div className="max-w-4xl w-full max-h-full">
                            {(() => {
                                const currentMediaItem = sections[activeSection].tabs[activeTab].images[currentMedia];
                                const isVideo = isVideoFile(currentMediaItem.src);
                                const formattedSrc = formatSrc(currentMediaItem.src);

                                return isVideo ? (
                                    <div className="w-full">
                                        <video
                                            src={formattedSrc}
                                            controls
                                            autoPlay
                                            className="w-full h-auto max-h-[70vh] object-contain"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : (
                                    <img
                                        src={formattedSrc}
                                        alt={currentMediaItem.alt || "Gallery image"}
                                        className="w-full h-auto max-h-[70vh] object-contain"
                                    />
                                );
                            })()}

                            <div className="text-white text-center mt-4">
                                <h3 className="text-xl font-semibold">
                                    {sections[activeSection].tabs[activeTab].images[currentMedia].title}
                                </h3>
                                <p className="text-gray-300">
                                    {sections[activeSection].tabs[activeTab].images[currentMedia].date}
                                </p>
                                <div className="flex items-center justify-center gap-4 mt-2">
                                    <p className="text-gray-300">
                                        {currentMedia + 1} of {sections[activeSection].tabs[activeTab].images.length}
                                    </p>
                                    {isVideoFile(sections[activeSection].tabs[activeTab].images[currentMedia].src) && (
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                            Video
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryComponent;