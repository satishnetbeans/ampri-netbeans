// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../../components/ui/Navbar"
import Topbar from "../../../../components/ui/Topbar"
import Footer from "../../../../components/ui/Footer"
import DataTable from "../../../../components/ui/DataTableRender"

import { processTableData } from "../../../../utils/ProcessTableData"



const tableData = [

    // tab 1
    {
        "order": 1,
        "name": "डॉ. अवनीश कुमार श्रीवास्तव , Dr. Avanish Kumar Srivastava",
        "designation": "निदेशक , Director",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Avanish-Kr.-Srivastava.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 2,
        "name": "डॉ. डी पी मंडल , Dr. D P Mondal",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-D.P.-Mondal.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 3,
        "name": "डॉ. ए के सिंह , Dr. A K Singh",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-A.K.-Singh.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 4,
        "name": "डॉ. पी अशोकन , Dr. P Asokan",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-P.-Asokan.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 5,
        "name": "डॉ. मो. अकरम खान , Dr. Mohd. Akram Khan",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Md.-Akram-Khan.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 6,
        "name": "श्री हेमंत कुमार शुक्ला , Mr. Hemant Kumar Shukla",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Hemant-k.-Shukla.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 7,
        "name": "डॉ. मनीष मुदगल , Dr. Manish Mudgal",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Manish-Mudgal.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 8,
        "name": "डॉ. जे पी शुक्ला , Dr. J P Shukla",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-J.P.-Shukla.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 9,
        "name": "डॉ. दीप्ति मिश्रा , Dr. Deepti Mishra",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Deepti-Mishra.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 10,
        "name": "डॉ. एस मुरली , Dr. S Murali",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-S.-Murali.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 11,
        "name": "डॉ. संजीव सक्सेना , Dr. Sanjeev Saxena",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Sanjeev-Saxena.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 12,
        "name": "डॉ. एच एन भार्गव , Dr. H N Bhargaw",
        "designation": "मुख्य वैज्ञानिक , Chief Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-H.N.-Bhargaw.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 13,
        "name": "डॉ. जे पी चौरसिया , Dr. J P Chaurasia",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-J.P.-Chaurasia.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 14,
        "name": "डॉ. नीता वी एम खलखो , Dr. Neeta V M Khalkho",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Neeta-V.-M.-Khalkho.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 15,
        "name": "श्री प्रभात कुमार बघेल , Dr. Prabhat Kumar Baghel",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Prabhat-Kumar-Baghel.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 16,
        "name": "डॉ. वंदना , Dr. Vandana",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Vandana.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 17,
        "name": "डॉ. राजू खान , Dr. Raju Khan",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Raju-Khan.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 18,
        "name": "डॉ. संदीप सिंघई , Dr. Sandeep Singhai",
        "designation": "वरिष्ठ प्रधान वैज्ञानिक , Senior Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Sandeep-Singhai.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 19,
        "name": "डॉ. आर के भारिल्य , Dr. R K Bharliya",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-R.K.-Bharilya.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 20,
        "name": "डॉ. गौरव कुमार गुप्ता , Dr. Gaurav Kumar Gupta",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [
            {
                "name": "[Property Detail]",
                "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Gaurav-Kr.Gupta_.pdf"
            }
        ],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },

    {
        "name": "डॉ. एन सतीश , Dr. N Sathish",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Sathish-N..pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 21
    },
    {
        "name": "डॉ. सारिका वर्मा , Dr. Sarika Verma",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Sarika-Verma.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 22
    },
    {
        "name": "डॉ. अर्चना सिंह , Dr. Archana Singh",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Archana-Singh.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 23
    },
    {
        "name": "डॉ. नीरज द्विवेदी , Dr. Neeraj Dwivedi",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Neeraj-dwivedi.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 24
    },
    {
        "name": "डॉ. मेराज अहमद , Dr. Meraj Ahmed",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Meraj-Ahmed.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 25
    },
    {
        "name": "डॉ. संजय कुमार पंथी , Dr. Sanjay K Panthi",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-S.K.-Panthi.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 26
    },
    {
        "name": "डॉ. कीर्ति सोनी , Dr. Kirti Soni",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Kirti-Soni.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 27
    },
    {
        "name": "डॉ. राजेश पाटीदार , Dr. Rajesh Patidar",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Rajesh-Patidar.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 28
    },
    {
        "name": "डॉ. सतानंद मिश्रा , Dr. Satanand Mishra",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Satanand-Misra.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 29
    },
    {
        "name": "डॉ. अल्का मिश्रा , Dr. Alka Mishra",
        "designation": "प्रधान वैज्ञानिक , Principal Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Alka-Mishra.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 30
    },
    {
        "name": "डॉ. वेंकट ए एन सीएच , Dr. Venkat A N Ch",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Venkat-A.N..pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 31
    },
    {
        "name": "डॉ. चेतना , Dr. Chetna Dhand",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Chetna-Dhand.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 32
    },
    {
        "name": "डॉ. अभिषेक पाण्डेय , Dr. Abhishek Pandey",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Abhishek-Pandey.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 33
    },
    {
        "name": "डॉ. प्रदीप कुमार , Dr. Pradip Kumar",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Pradip-Kumar.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 34
    },
    {
        "name": "श्री श्रीराम सथैया , Mr. Sriram Sathaiah",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Sriram-Sathaiah.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 35
    },
    {
        "name": "डॉ. तिलक चन्द्र जोशी , Dr. Tilak Chandra Joshi",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Tilak-Chandra-Joshi.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 36
    },
    {
        "name": "डॉ. मोहम्मद आशिक , Dr. Mohammad Ashiq",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Mohammad-Ashiq.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 37
    },
    {
        "name": "डॉ. सुरेंद्र कुमार , Dr. Surender Kumar",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Surender-Kumar.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 38
    },
    {
        "name": "डॉ. मोहित शर्मा , Dr. Mohit Sharma",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Mohit-Sharma.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 39
    },
    {
        "name": "श्री समर्थ सिंह , Mr. Samarth Singh",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Samarth-Singh.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 40
    },

    {
        "name": "श्री निखिल राजेंद्र गोर्हे , Mr. Nikhil Rajendra Gorhe",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Nikhil-Rajendra-Gorhe.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 41
    },
    {
        "name": "डॉ. मनोज कुमार गुप्ता , Dr. Manoj Kumar Gupta",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Manoj-K.-Gupta.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 42
    },
    {
        "name": "डॉ. शाबी थंकराज सलम्मल , Dr. Shabi Thankaraj Salammal",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Shabi-T.S..pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 43
    },
    {
        "name": "डॉ. सुप्रिया साहा , Dr. Supriya Saha",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Supriya-Saha.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 44
    },
    {
        "name": "श्री नरेंद्र सिंह , Mr. Narendra Singh",
        "designation": "वरिष्ठ वैज्ञानिक , Senior Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Narendra-Singh.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 45
    },
    {
        "name": "श्रीमती मेधा मिली , Mrs. Medha Mili",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Ms.-Medha-Mili.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 46
    },
    {
        "name": "श्री शिव सिंह पटेल , Mr. Shiv Singh Patel",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Shiv-Singh-Patel.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 47
    },
    {
        "name": "डॉ. शिव सिंह , Dr. Shiv Singh",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Shiv-Singh.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 48
    },
    {
        "name": "डॉ. दिपेन कुमार रजक , Dr. Dipen Kumar Rajak",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Dipen-K.-Rajak.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 49
    },
    {
        "name": "डॉ. एम. चन्द्र शेखर नायक , Dr. M. Chandra Shekhar Nayak",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-M.-Chandra-Shekhar-Naik.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 50
    },
    {
        "name": "श्री हिमांशू शर्मा , Mr. Himanshu Sharma",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Himanshu-Sharma.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 51
    },
    {
        "name": "डॉ. राम कुमार , Dr. Ram Kumar",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Ram-Kumar.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 52
    },
    {
        "name": "डॉ. तमाल चटार्जी , Dr. Tamal Chatterjee",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Tamal-Chatterjee.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 53
    },
    {
        "name": "श्री अतुल कुमार चतर , Mr. Atul Kumar Chatter",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Atul-K.-Chatter.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 54
    },
    {
        "name": "डॉ. के. कार्तिकेयन , Dr. K. Karthikeyan",
        "designation": "वैज्ञानिक , Scientist",
        "deatil": [{ name: "[Property Detail]", url: "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-K.-Karthikeyan.pdf" }],
        "tab": "Scientist",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 55
    },

    // tab 2

    {
        "order": 1,
        "name": "Dr. Ajay Naik",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-Ajay-Naik.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 2,
        "name": "Mr. Ajay Kulshreshth",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Ajay-Kulshreshth.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 3,
        "name": "Dr. R K Soni",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-R.K.-Soni.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 4,
        "name": "Dr. E Peters",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-Edward-Peters.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 5,
        "name": "Dr. V S Gowri",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-V-Sorna-Gowri.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 6,
        "name": "Shri Manoj Kumar Ban",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-M.K.-Ban.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 7,
        "name": "Shri TSVC Rao",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-T.S.V.C.-Rao.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 8,
        "name": "Dr. Prabha Padmakaran",
        "designation": "प्रधान तकनीकी अधिकारी , Principal Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.Mrs_.Prabha-Padmakaran.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 9,
        "name": "Shri Anwar Ahmed Bakhsh",
        "designation": "Suptd Engineer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Anwar-Ahmed-Bakhsh.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 10,
        "name": "Mrs. Sangeeta Gamad",
        "designation": "वरिष्ठ तकनीकी अधिकारी , Senior Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Smt.-Sangeeta-Gamad.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 11,
        "name": "Mr. O P Chourasia",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-O.P.-Chourasia.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 12,
        "name": "Dr. Satyam Saini",
        "designation": "ARMO",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-Satyam-Saini.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 13,
        "name": "Mr. D K Kashyap",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Deepak-Kr.-Kashyap.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 14,
        "name": "Dr. Mohd Shafeeq M",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Dr.-Mohd.-Shafeeq-M.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 15,
        "name": "Mr. Balwant Barkhaniya",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Balwant-Barkhania.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 16,
        "name": "Mr. Anup Khare",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Anup-Kr.-Khare.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 17,
        "name": "Mr. K K Naktode",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-K.K.-Naktode.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 18,
        "name": "Mr. N Prashant",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Prasanth-N..pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 19,
        "name": "Dr. Rahul Pippal",
        "designation": "Technical Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-R.K.-Bharilya.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 20,
        "name": "Mr. A K Asati",
        "designation": "Sr. Tech. Gr. II",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-Arvind-Kr.-Asati.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 21,
        "name": "Mrs. S Pal",
        "designation": "Sr. Tech. Gr. II",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Smt.-Swagatika-Pal.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 22,
        "name": "Mr. Ramesh K Kawale",
        "designation": "Technician",
        "deatil": [],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 23,
        "name": "Mr. M L Gurjar",
        "designation": "",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-T-Sh.-M.L.-Gurjar.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 24,
        "name": "Mr. L N Sahu",
        "designation": "Lab Assistant",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-Neeraj-dwivedi.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 25,
        "name": "Mr. S K Batham",
        "designation": "Lab Assistant",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Sh.-Meraj-Ahmed.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },
    {
        "order": 26,
        "name": "श्री एस के सूर्यवंशी , Mr. S K Suryavanshi",
        "designation": "Lab Assistant",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-Dr.-S.K.-Panthi.pdf" }],
        "tab": "Technical",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["name", "designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        }
    },


    // tab 3 


    {
        "name": "श्री सोमनाथ मज़ूमदर , Mr. Somnath Mazumder",
        "designation": "Controller of Administration",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Somnath-Mazumder.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 1
    },
    {
        "name": "श्री उमेश गुप्ता , Mr. Umesh Gupta",
        "designation": "Administrative Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Umesh-Gupta.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 2
    },
    {
        "name": "श्री एस पी सिंह , Shri S P Singh",
        "designation": "Finance & Account Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Shailendra-Pratap-Singh.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 3
    },
    {
        "name": "श्री संजय विनोदिया , Shri Sanjay Vinodia",
        "designation": "Finance & Account Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Sanjay-Vinodia.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 4
    },
    {
        "name": "श्री अशोक कुमार यादव , Shri Ashok Kumar Yadav",
        "designation": "Store & Purchase Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Ashok-Kumar-Yadav.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 5
    },
    {
        "name": "श्रीमती मिनी सुरेंद्रन , Mrs. Mini Surendran",
        "designation": "Principal Private Secretary",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Smt.-Mini-Surendran.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 6
    },
    {
        "name": "श्री एन विस्वनाथान , Mr. N Viswanathan",
        "designation": "Principal Private Secretary",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-N.-Viswanathan.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 7
    },
    {
        "name": "डॉ. मनीषा दुबे , Dr. Manisha Dubey",
        "designation": "Senior Hindi Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Dr.-Manisha-Dubey.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 8
    },
    {
        "name": "श्री संजय कुमार , Shri Sanjay Kumar",
        "designation": "Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Sanjay-Kumar.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 9
    },
    {
        "name": "श्री विवेक खरे , Shri Vivek Khare",
        "designation": "Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Vivek-Khare.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 10
    },
    {
        "name": "श्री नीलेश जयसवाल , Mr. Neelesh Jaiswal",
        "designation": "Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Shri-Neelesh-Jaiswal.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 11
    },
    {
        "name": "श्री विजय श्रीवास्तव , Mr. Vijay Shrivastava",
        "designation": "Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Vijay-Shrivastav.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 12
    },
    {
        "name": "श्री शैलेन्द्र सिंह तोमर , Mr. Shailendra Singh Tomar",
        "designation": "Section Officer (S&P)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Shailendra-Singh-Tomar.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 13
    },
    {
        "name": "श्री विजय नथीले , Mr. Vijay Nathiley",
        "designation": "Section Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Vijay-K.-Nathiley.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 14
    },
    {
        "name": "श्रीमती आशा विनोदिया , Smt. Asha Vinodia",
        "designation": "Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Smt.-Asha-Vinodia.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 15
    },
    {
        "name": "श्री जी. आदिनारायण , Mr. G Adinarayan",
        "designation": "Security Officer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-G.-Adinarayan.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 16
    },
    {
        "name": "श्री सौरभ सेठिया , Mr. Sourabh Sethiya",
        "designation": "Sr. Stenographer",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh-Sourabh-Sethia.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 17
    },
    {
        "name": "श्री आनंद वी पंडित , Mr. Anand V Pandit",
        "designation": "Assistant Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-Anand-Vinod-Pandit.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 18
    },
    {
        "name": "श्री प्रवीण यादव राव जगताप , Mr. Pravin Yadav Rao Jagtap",
        "designation": "Assistant Section Officer (G)",
        "deatil": [{ "name": "[Property Detail]", "url": "https://ampri.res.in/en/wp-content/uploads/2024/12/APR2023-A-Sh.-P.Y.-Jagtap.pdf" }],
        "tab": "Administration",
        "table": {
            "pageTitle": "Annual Property Returns 2023",
            "columns": ["Name", "Designation", "Property Return Detail"],
            "tabs": ["Scientist", "Technical", "Administration"]
        },
        "order": 19
    }

];


function APR2023({ isAdmin }) {
    const [Columns, setColumns] = useState(null)
    const [Tabs, setTabs] = useState(null)
    const [Table, settable] = useState(null)


    useEffect(() => {
        const fieldMapping = {
            "name": "name",
            "designation": "designation",
            "Property Return Detail": "deatil"

        };

        const { columns, processedData, table } = processTableData(tableData, fieldMapping);

        setColumns(columns);
        setTabs(processedData);
        settable(table);
    }, [])



    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />


            {Columns && Tabs && Columns.length > 0 && Tabs.length > 0 && <DataTable
                title="Annual Property Return (Year 2023)"
                columns={Columns}
                tabs={Tabs}
                entriesPerPageOptions={[10, 25, 50]}
                table={Table}
                isAdmin={false}
                from="APR_2023"
            />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default APR2023