// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"

import DataTable from "../../../components/ui/DataTableRender"


const data = [
    {
        order: 1,
        NFNO: "0088NF2016/IN",
        country: "IN",
        title: "A novel multifunctional material for workability of geopolymeric system and its process thereof.",
        inventors:
            "Amritphale Sudhir Sitaram, Chouhan Ramesh Kumar, Mudgal Manish, Verma Sarika, Das Satyabrata",
    },
    {
        order: 2,
        NFNO: "0181NF2016/IN",
        country: "IN",
        title: "A composition for polymeric foam structure without using foaming agents and process thereof",
        inventors:
            "Syed Azhar Rasheed Hashmi, Satyabrata Das, Prasanth Narayanannair, Ajay Naik",
    },
    {
        order: 3,
        NFNO: "0193NF2015/IN",
        country: "IN",
        title:
            "A novel process for making “advanced cement free concrete and panels” by utilizing sea sand and sea water.",
        inventors:
            "Amritphale Sudhir Sitaram, Verma Sarika, Khan Mohammed Akram, Padmakaran Prabha, Anshul Avneesh, Das Satyabrata",
    },
    {
        order: 4,
        NFNO: "0056NF2016/IN",
        country: "IN",
        title:
            "Low cost process of preaparing nanoparticles of gamma alumina useful for the defluoridation of drinking water",
        inventors: "Indra Bhushan Singh, Archana Singh",
    },
    {
        order: 5,
        NFNO: "0214NF2016/IN",
         country: "IN",
        title:
            "Advanced non-toxic Red Mud based Nano gel type functional radiation shielding materials and the process thereof",
        inventors: "Amritphale Sudhir Sitaram, Verma Sarika, Das Satyabrata",
    },
    {
        order: 6,
        NFNO: "0014NF2017/IN",
         country: "IN",
        title:
            "Lock-unlock Shape Memory Alloy (SMA) actuator device for Latch assembly",
        inventors:
            "Bhargaw Hari Narayan, Dasgupta Rupa, Das Satyabrata, Hashmi Syed Azhar Rasheed",
    },
    {
        order: 7,
        NFNO: "0059NF2016/IN",
         country: "IN",
        title:
            "Process for making non-toxic, homogeneous, radiation shielding glass utilizing of brine sludge and fly ash",
        inventors: "Amritphale Sudhir Sitaram, Verma Sarika, Das Satyabrata",
    },
];

const data2 = [
    {
        order: 1,
        NFNO: "0201NF2014/IN",
        country: "IN",
        title: "????",
        inventors:
            "Asokan Pappu, Goel Manmohan Dass, Morchhale Rajesh Kumar, Murali Shiramdas, Khan Mohammed Akram, Mishra Deepti, Kulshreshth Ajay, Amritphale Sudhir Sitaram, Lahiri Swati",
        detail: "download",
    },
    {
        order: 2,
        NFNO: "0018NF2016/IN",
        country: "IN",
        title:
            "A novel process for making advanced nano phosphatic hybrid inorganic – organic geopolymeric corrosion resistant coating material for mild steel substrate",
        inventors:
            "Amritphale Sudhir Sitaram, Mishra Deepti, Singh Archana, Anshul Avneesh, Das Satyabrata",

    },
];



const data3 = [
    {
        order: 1,
        NFNO: "0070NF2014/US",
        country: "US",
        title: "An apparatus for testing shape memory effects in liquid bath",
        inventors: "Hashmi Syed Azhar Rasheed, Bhargaw Hari Narayan, Ajay Naik, Pandey Jagdish Prasad, Yadav Mulayam Singh, Navin Chand",
        detail: "download"
    },
    {
        order: 2,
        NFNO: "0176NF2015/US",
        country: "US",
        title: "Functionalized brine sludge material and a process for the preparation thereof",
        inventors: "Amritphale Sudhir Sitaram, Verma Sarika, Das Satyabrata",
        detail: "download"
    },
    {
        order: 3,
        NFNO: "0209NF2015/US",
        country: "US",
        title: "Advanced non-toxic radiation shielding materials from tailored brine sludge and a process for the prepration thereof",
        inventors: "Amritphale Sudhir Sitaram, Anshul Avneesh, Verma Sarika, Khan Mohammed Akram, Das Satyabrata",
        detail: "download"
    },
    {
        order: 4,
        NFNO: "0018NF2016/US",
        country: "US",
        title: "A novel process for making advanced nano phosphatic hybrid inorganic – organic geopolymeric corrosion resistant coating material for mild steel substrate",
        inventors: "Amritphale Sudhir Sitaram, Mishra Deepti, Singh Archana, Anshul Avneesh, Das Satyabrata",
        detail: "download"
    }
];

const columns = ["order", "NFNO", "country", "title", "inventors"];




function Patents({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {data && <DataTable
                columns={columns}
                data={data}
                entriesPerPageOptions={[10, 25, 50]}
                title="Patents Filed in India"
                from="IndianPatents"

                isAdmin={false}
            />}

            {data2 && <DataTable
                columns={columns}
                data={data2}
                entriesPerPageOptions={[10, 25, 50]}
                title="Complete after Provisional cases filed in India"
                from="IndianProvisionalCasesPatents"

                isAdmin={false}
            />}

            {data3 && <DataTable
                columns={columns}
                data={data3}
                entriesPerPageOptions={[10, 25, 50]}
                title="Patents Filed in Foreign Countries"
                from="IndianProvisionalCasesPatents"

                isAdmin={false}
            />}


            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default Patents