// @ts-nocheck
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/ui/Navbar";
import Topbar from "../../../components/ui/Topbar";
import Footer from "../../../components/ui/Footer";
import GalleryComponent from "../../../components/ui/gallery/GalleryRender";

import { fetchGallery } from "../../../api/axios";


function DailyNewsPapers({ isAdmin }) {

    const galleryData = {

        "title": "CSIR-AMPRI in Daily News Papers",
        "sections": [
            {
                "sectionTitle": "National Dailies 2019",
                "tabs": [
                    {
                        "tabTitle": "tab 1",
                        "images": [],

                    },

                ],

            },
            {
                "sectionTitle": "Hybrid Composite Materials",
                "tabs": [
                    {
                        "tabTitle": "tab 1",
                        "images": [
                            {
                                "src": "uploads/13f6360ae20ac7f5acbba1bbabc0f81797c55c7387189b67f095cbb0ecd7b677.jpg",
                                "title": "1",
                                "date": "October 16, 2025",
                                "alt": "p1",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d2d"
                                }
                            },
                            {
                                "src": "uploads/b856f1dc082fc2d07310b49ef4117b56228fc33826d3ca9f1960831572805514.jpg",
                                "title": "2",
                                "date": "October 16, 2025",
                                "alt": "p2",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d2e"
                                }
                            },
                            {
                                "src": "uploads/f9b5a5a0b3274888269069a0e17944816c769926e879a5a8d10c625cf00eae34.jpg",
                                "title": "3",
                                "date": "October 16, 2025",
                                "alt": "p3",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d2f"
                                }
                            },
                            {
                                "src": "uploads/d7d1a3c1493f01a1f521c916175bfbedbb748c5f3013b6f351f514abcc32cf71.jpg",
                                "title": "4",
                                "date": "October 16, 2025",
                                "alt": "p4",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d30"
                                }
                            },
                            {
                                "src": "uploads/d05b7bfc6087920c145adb47bf171b9684c0f82627ca367457a77cba6d4a64f7.jpg",
                                "title": "5",
                                "date": "October 16, 2025",
                                "alt": "p5",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d32"
                                }
                            },
                            {
                                "src": "uploads/2c09bcb9221b2ca6355bfd9b355f3319f93aace6d5ddaae1a1c45afe84c70698.jpg",
                                "title": "6",
                                "date": "October 16, 2025",
                                "alt": "p6",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d31"
                                }
                            },
                            {
                                "src": "uploads/f2c25c77a09785ff8636b28104233625f3b36673a3f32b1a2713bd9be7e0fb28.jpg",
                                "title": "7",
                                "date": "October 16, 2025",
                                "alt": "p7",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d33"
                                }
                            },
                            {
                                "src": "uploads/3a33ce8a535f2da5def331eba58a2756e3154a1de8d38ac65317e909f4340aeb.jpg",
                                "title": "8",
                                "date": "October 16, 2025",
                                "alt": "p8",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d34"
                                }
                            },
                            {
                                "src": "uploads/d6677393f760bb0cc8d7bb448b01dfba4f7df063c871936db14a075e9a5351a3.jpg",
                                "title": "9",
                                "date": "October 16, 2025",
                                "alt": "p9",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d35"
                                }
                            },
                            {
                                "src": "uploads/b6f7d0918e5d2e21ef20b25315c9f097280825ef3698728b7c6d7eac20ee3722.jpg",
                                "title": "10",
                                "date": "October 16, 2025",
                                "alt": "p10",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d36"
                                }
                            },
                            {
                                "src": "uploads/1112b815e2f4e896694051a8e023e675101469b107e00f001194a99f0442f984.jpg",
                                "title": "11",
                                "date": "October 16, 2025",
                                "alt": "p11",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d37"
                                }
                            },
                            {
                                "src": "uploads/871fc2cc09011e5ebb6bbf38e9623adc867c6fec745cc67c200d9b6a4d4c02a0.png",
                                "title": "12",
                                "date": "October 16, 2025",
                                "alt": "p12",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d38"
                                }
                            },
                            {
                                "src": "uploads/99985c38fba43f2f3006d461d1801c93b920f50153bc84b9f6acad9418ea8755.jpg",
                                "title": "13",
                                "date": "October 16, 2025",
                                "alt": "p13",
                                "_id": {
                                    "$oid": "68f0d924678212d0ddf70d38"
                                }
                            }
                        ],

                    },

                ]
            },
            {
                "sectionTitle": "National Technology Day 2018",
                "tabs": [
                    {
                        "tabTitle": "tab 1",
                        "images": [
                            {
                                "src": "uploads/672afbed3198344f3df3263bd1ef3805a38cfc42565a42a3d68db81ae47ab39c.jpg",
                                "title": "1",
                                "date": "October 16, 2025",
                                "alt": "p1",

                            },
                            {
                                "src": "uploads/74b354f2af6b9a050ea244d1cfcabd8a7a969a5f0eb8c99b06e2ee025409ca03.jpg",
                                "title": "2",
                                "date": "October 16, 2025",
                                "alt": "p2",

                            },
                            {
                                "src": "uploads/4d063701f47c295ad02c6bdf1099840e1e874a562978810ae234150fb870cd73.jpg",
                                "title": "3",
                                "date": "October 16, 2025",
                                "alt": "p3",

                            },
                            {
                                "src": "uploads/d00f104e4aec06f204e591a14b3cd3bd839ddc20ca724dad330210bd43f1a989.png",
                                "title": "4",
                                "date": "October 16, 2025",
                                "alt": "p4",

                            },
                            {
                                "src": "uploads/a01e2a5461b335a3496c67ae333f4be9823e6948a8367aa6278121450ba05a86.jpg",
                                "title": "5",
                                "date": "October 16, 2025",
                                "alt": "p5",

                            },
                            {
                                "src": "uploads/5cb407ab2ce414928cfb764a1440e100fb8b021d9dbc5396527ac6f4ae3cfcc5.jpg",
                                "title": "6",
                                "date": "October 16, 2025",
                                "alt": "p6",

                            },
                        ],

                    }
                ]
            },
            {
                "sectionTitle": "other",
                "tabs": [
                    {
                        "tabTitle": "tab 1",
                        "images": [],

                    },

                ],

            },

        ]
    }


    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="flex-grow bg-gray-50">
                {galleryData && <GalleryComponent
                    id={galleryData._id}
                    title={galleryData.title}
                    sections={galleryData.sections}
                    isAdmin={isAdmin}
                />}

            </div>


            <Footer />
            <div id="google_translate_element" ></div>
        </div>
    );
}

export default DailyNewsPapers;