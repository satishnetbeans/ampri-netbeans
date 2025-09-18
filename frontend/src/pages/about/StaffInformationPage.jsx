import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Sample data for Group I (Chief Scientists)
const group1Data = [
    {
        "img": "https://ampri.res.in/en/wp-content/uploads/2025/05/DrTBhaskar-Director.jpg",
        "NAME": "डॉ. थल्लाडा भास्कर\nDr. Thallada Bhaskar",
        "DESIGNATION": "निदेशक\nDirector",
        "EMAIL": "director.ampri@csir.res.in\nthallada.bhaskar@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. पी अशोकन\nDr. P Asokan",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "pasokan.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मो. अकरम खान\nDr. Mohd. Akram Khan",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "akram.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री हेमंत कुमार शुक्ला\nMr. Hemant Kumar Shukla",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "headit.ampri@csir.res.in\nhkshukla.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मनीष मुदगल\nDr. Manish Mudgal",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "manish.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. दीप्ति मिश्रा\nDr. Deepti Mishra",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "deepti.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. संजीव सक्सेना\nDr. Sanjeev Saxena",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "sanjeev.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. एच एन भार्गव\nDr. H N Bhargaw",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "hnbhargaw.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. नीता वी एम खलखो\nDr. Neeta V M Khalkho",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "neeta.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. जे पी चौरसिया\nDr. J P Chaurasia",
        "DESIGNATION": "मुख्य वैज्ञानिक\nChief Scientist",
        "EMAIL": "jpchaurasia.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री प्रभात कुमार बघेल\nDr. Prabhat Kumar Baghel",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "prabhat.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. वंदना\nDr. Vandana",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "vandana.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. राजू खान\nDr. Raju Khan",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "raju.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. संदीप सिंघई\nDr. Sandeep Singhai",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "sandeep.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. आर के भारिल्य\nDr. R K Bharliya",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "rkbharilya.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. गौरव कुमार गुप्ता\nDr. Gaurav Kumar Gupta",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "gaurav.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. एन सतीश\nDr. N Sathish",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "nsathish.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. सारिका वर्मा\nDr. Sarika Verma",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "sarika.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. कीर्ति सोनी\nDr. Kirti Soni",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "kirti.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. अर्चना सिंह\nDr. Archana Singh",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "archana.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ.नीरज द्विवेदी\nDr. Neeraj Dwivedi",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "neeraj.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मेराज अहमद\nDr. Meraj Ahmed",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "meraj.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. संजय कुमार पंथी\nDr. Sanjay K Panthi",
        "DESIGNATION": "वरिष्ठ प्रधान वैज्ञानिक\nSenior Principal Scientist",
        "EMAIL": "sanjay.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. राजेश पाटीदार\nDr. Rajesh Patidar",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "rajesh.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. सतानंद मिश्रा\nDr. Satanand Mishra",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "snmishra.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. अल्का मिश्रा\nDr. Alka Mishra",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "alka.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. वेंकट ए एन सीएच\nDr. Venkat A N Ch",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "venkat.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. चेतना\nDr. Chetna Dhand",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "chetna.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. प्रदीप कुमार\nDr. Pradip Kumar",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "pradip.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री श्रीराम सथैया\nMr. Sriram sathaiah",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "sriram.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मोहम्मद आशिक\nDr. Mohammad Ashiq",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "ashiq.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. सुरेंद्र कुमार\nDr. Surender Kumar",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "surender.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री समर्थ सिंह\nMr. Samarth Singh",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "samarth.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री निखिल राजेंद्र गोर्हे\nMr. Nikhil Rajendra Gorhe",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "nikhil.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मनोज कुमार गुप्ता\nDr. Manoj Kumar Gupta",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "mkgupta.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. शाबी थंकराज सलम्मल\nDr. Shabi Thankaraj Salammal",
        "DESIGNATION": "प्रधान वैज्ञानिक\nPrincipal Scientist",
        "EMAIL": "tsshabi.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. अभिषेक पाण्डेय\nDr. Abhishek Pandey",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "abhishek.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. सुप्रिया साहा\nDr. Supriya Saha",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "supriya.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. तिलक चन्द्र जोशी\nDr. Tilak Chandra Joshi",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "tilak.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मोहित शर्मा\nDr. Mohit Sharma",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "mohit.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्रीमती मेधा मिली\nMrs. Medha Mili",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "medha.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री नरेंद्र सिंह\nMr. Narendra Singh",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "nsingh.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री शिव सिंह पटेल\nMr. Shiv Singh Patel",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "ssp.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. शिव सिंह\nDr. Shiv Singh",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "sshiv.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. दिपेन कुमार रजक\nDr. Dipen Kumar Rajak",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "dkrajak.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. एम. चन्द्र शेखर नायक\nDr. M. Chandra Shekhar Nayak",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "mcsnayak.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री हिमांशू शर्मा\nMr. Himanshu Sharma",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "himanshu.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. राम कुमार\nDr. Ram Kumar",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "ram.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. तमाल चटार्जी\nDr. Tamal Chatterjee",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "tamal.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. के. कार्तिकेयन\nDr. K. Karthikeyan",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "karthikeyan.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. अविनाश तिवारी\nDr. Avinash Tiwari",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "avinash.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. श्रीबालाजी एम.\nDr. Sribalaji M.",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "sribalaji.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    }
];

// Sample data for Group II (Principal Scientists)
const group2Data = [
    {
        "img": "",
        "NAME": "डॉ. आर के सोनी\nDr. R K Soni",
        "DESIGNATION": "प्रधान तकनीकी अधिकारी\nPrincipal Technical Officer",
        "EMAIL": "rksoni.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. ई पीटर्स\nDr. E Peters",
        "DESIGNATION": "प्रधान तकनीकी अधिकारी\nPrincipal Technical Officer",
        "EMAIL": "edward.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री मनोज कुमार बान\nShri Manoj Kumar Ban",
        "DESIGNATION": "प्रधान तकनीकी अधिकारी\nPrincipal Technical Officer",
        "EMAIL": "mkban.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री टीएसवीसी राव\nShri TSVC Rao",
        "DESIGNATION": "प्रधान तकनीकी अधिकारी\nPrincipal Technical Officer",
        "EMAIL": "tsvc.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. प्रभा पद्माकरण\nDr. Prabha Padmakaran",
        "DESIGNATION": "प्रधान तकनीकी अधिकारी\nPrincipal Technical Officer",
        "EMAIL": "prabha.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री अनवर अहमद बख्श\nShri Anwar Ahmed Bakhsh",
        "DESIGNATION": "PTO / Suptd Engineer",
        "EMAIL": "aabakhsh.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्रीमती संगीत गामड\nMrs. Sangeeta Gamad",
        "DESIGNATION": "वरिष्ठ तकनीकी अधिकारी\nSenior Technical Officer (2)",
        "EMAIL": "sangeeta.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री ओ पी चोरसिया\nMr. O P Chourasia",
        "DESIGNATION": "वरिष्ठ तकनीकी अधिकारी\nSenior Technical Officer (2)",
        "EMAIL": "opchaurasia.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. सत्यम सैनी\nDr. Satyam Saini",
        "DESIGNATION": "ARMO",
        "EMAIL": "satyam.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री डी के कश्यप\nMr. D K Kashyap",
        "DESIGNATION": "Senior Technical Officer\nवरिष्ठ तकनीकी अधिकारी",
        "EMAIL": "deepak.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. मो. शफीक म\nDr. Mohd Shafeeq M",
        "DESIGNATION": "Senior Technical Officer\nवरिष्ठ तकनीकी अधिकारी",
        "EMAIL": "shafeeq.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री बलवंत बरखानिया\nMr. Balwant Barkhaniya",
        "DESIGNATION": "Senior Technical Officer\nवरिष्ठ तकनीकी अधिकारी",
        "EMAIL": "balwant.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री अनुप खरे\nMr. Anup Khare",
        "DESIGNATION": "Senior Technical Officer\nवरिष्ठ तकनीकी अधिकारी",
        "EMAIL": "anup.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री एन प्रशांत\nMr. N Prashant",
        "DESIGNATION": "Senior Technical Officer\nवरिष्ठ तकनीकी अधिकारी",
        "EMAIL": "nprasanth.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "श्री के के नाकतोडे\nMr. K K Naktode",
        "DESIGNATION": "Technical Officer",
        "EMAIL": "kknaktode.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "img": "",
        "NAME": "डॉ. राहुल पिप्पल\nDr. Rahul Pippal",
        "DESIGNATION": "Technical Officer",
        "EMAIL": "rahul.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    }
];

// Sample data for Group III (Senior Scientists)
const group3Data = [
    {
        "NAME": "डॉ. अमित पाटील\nDr. Amit Patil",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "amit.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "NAME": "डॉ. प्रिया सिंह\nDr. Priya Singh",
        "DESIGNATION": "वरिष्ठ वैज्ञानिक\nSenior Scientist",
        "EMAIL": "priya.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    }
];

// Sample data for Group IV (Scientists)
const group4Data = [
    {
        "NAME": "डॉ. राहुल वर्मा\nDr. Rahul Verma",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "rahul.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "NAME": "डॉ. नीतू गुप्ता\nDr. Neetu Gupta",
        "DESIGNATION": "वैज्ञानिक\nScientist",
        "EMAIL": "neetu.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    }
];

// Sample data for Administration
const adminData = [
    {
        "NAME": "श्री राजेश मिश्रा\nMr. Rajesh Mishra",
        "DESIGNATION": "प्रशासनिक अधिकारी\nAdministrative Officer",
        "EMAIL": "admin.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    },
    {
        "NAME": "सुश्री सरिता यादव\nMs. Sarita Yadav",
        "DESIGNATION": "वित्त अधिकारी\nFinance Officer",
        "EMAIL": "finance.ampri@csir.res.in",
        "PROFILE": "[Click to View Profile]"
    }
];

// Define tabs for the staff page
const staffTabs = [
    {
        key: "group1",
        label: "Group I",
        data: group1Data
    },
    {
        key: "group2",
        label: "Group II",
        data: group2Data
    },
    {
        key: "group3",
        label: "Group III",
        data: group3Data
    },
    {
        key: "group4",
        label: "Group IV",
        data: group4Data
    },
    {
        key: "admin",
        label: "Administration",
        data: adminData
    }
];

const staffColumns = [
    "img",
    "NAME",
    "DESIGNATION",
    "EMAIL",
    "PROFILE"
];

function StaffPage({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                title="CSIR-AMPRI Staff Directory"
                columns={staffColumns}
                tabs={staffTabs}
                entriesPerPageOptions={[10, 25, 50]}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default StaffPage;