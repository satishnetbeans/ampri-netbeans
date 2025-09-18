import React from "react";
import Navbar from "../components/ui/Navbar";
import Topbar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import GalleryComponent from "../components/ui/GalleryRender";


// Sample data structure for the gallery
const galleryData = {
    title: "CSIR-AMPRI PHOTO GALLERY",
    sections: [
        {
            sectionTitle: "2025 Events",
            tabs: [
                {
                    tabTitle: "World Youth Skill Day",
                    images: [
                        {
                            src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            title: "Youth Skill Development Workshop",
                            date: "July 15, 2025",
                            alt: "Youth participating in skill development activities"
                        },
                        {
                            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            title: "Expert Speaker Session",
                            date: "July 15, 2025",
                            alt: "Expert delivering a talk on youth skills"
                        }
                    ]
                },
                {
                    tabTitle: "World Environment Day",
                    images: [
                        {
                            src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            title: "Tree Plantation Drive",
                            date: "June 5, 2025",
                            alt: "Participants planting trees on Environment Day"
                        }
                    ]
                }
            ]
        },
        {
            sectionTitle: "2024 Events",
            tabs: [
                {
                    tabTitle: "IISF 2024",
                    images: [
                        {
                            src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            title: "IISF Exhibition Stall",
                            date: "January 10, 2024",
                            alt: "CSIR-AMPRI exhibition stall at IISF"
                        }
                    ]
                }
            ]
        },
        {
            sectionTitle: "Campus",
            tabs: [
                {
                    tabTitle: "Our Campus",
                    images: [
                        {
                            src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            title: "Main Building",
                            date: "",
                            alt: "CSIR-AMPRI main building"
                        }
                    ]
                }
            ]
        }
    ]
};

// Usage example
function GalleryPage({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />
            <GalleryComponent
                title={galleryData.title}
                sections={galleryData.sections}
            />
            <Footer />
            <div id="google_translate_element" ></div>
        </div>
    );
}

export default GalleryPage;