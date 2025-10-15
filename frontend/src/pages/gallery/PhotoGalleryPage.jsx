import React, { useState, useEffect } from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import GalleryComponent from "../../components/ui/gallery/GalleryRender";

import { fetchGallery } from "../../api/axios";


function GalleryPage({ isAdmin }) {

    const [galleryData, setgalleryData] = useState(null)

    useEffect(() => {
        const getAbout = async () => {
            try {
                const res = await fetchGallery()
                if (res.data) {
                    const data = res.data.filter((gal) => {
                        return gal.title === "CSIR-AMPRI PHOTO GALLERY"
                    })
                    setgalleryData(data[0])
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)

            }
        }
        getAbout()
    }, [])



    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {galleryData && <GalleryComponent
                id={galleryData._id}
                title={galleryData.title}
                sections={galleryData.sections}
                isAdmin={isAdmin}
            />}

            <Footer />
            <div id="google_translate_element" ></div>
        </div>
    );
}

export default GalleryPage;