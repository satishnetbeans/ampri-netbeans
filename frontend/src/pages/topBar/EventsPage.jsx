import React from "react";
import Navbar from "../../components/ui/Navbar";
import Topbar from "../../components/ui/Topbar";
import Footer from "../../components/ui/Footer";
import DataTable from "../../components/ui/DataTableRender";

// Current events data
const EventsData = [
    {
        "Event Date": "15-17 June 2025",
        "Title": `Phenome India – CSIR Health Cohort Knowledgebase(PI-CHeCK) 'Phase-II'`,
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "05 June 2025",
        "Title": "Phenome India – CSIR Health Cohort Knowledgebase(PI-CHeCK) 'Phase-II Awareness Program'",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "05 June 2025",
        "Title": "World Environmental Day 2025 Celebrations @CSIR-AMPRI, Bhopal 'Theme: Combating Plastic Pollution'",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "28 May 2025",
        "Title": "Rashtriya Boudhik Sampada Mahotsav 2025 celebrations on 28/05/2025 by organizing the event themed 'Viksit Bharat 2047 and the role of Intellectual Property'. 'Intellectual Property (IP) Awareness Programme'",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "19-23 May 2025",
        "Title": "Summer Camp for School Kids under the outreach program CSIR-JIGYASA from 19 to 23 May 2025.",
        "More Details": ""
    },
    {
        "Event Date": "14 May 2025",
        "Title": "National Technology Day and 45th CSIR-AMPRI Foundation Day.",
        "More Details": "[Flyer]"
    }
];

// Past events data
const PastEventsData = [
    {
        "Event Date": "20 Jan 2025",
        "Title": "Indo-Russia Conference on Advanced Nanostructures for Energy and Technological Applications (Online) Jointly organized by CSIR-Advanced Materials and Processes Research Institute, Bhopal and Saint Petersburg State University (SPBU), Russia.",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "05-06 Sept 2024",
        "Title": "CSIR-OWOT-CIE & CIDC-ICC CONCLAVE-2024 'EMPOWERING FUTURE INFRASTRUCTURE WITH INNOVATIVE TECHNOLOGIES & BRAND CONNECT' 05-06 September, 2024",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "30 Aug 2024",
        "Title": "Popular Lecture & Student-Scientist Interaction Programme on 'Geopolymer Technology: Research and Development' (Virtual mode)",
        "More Details": ""
    },
    {
        "Event Date": "30-31 July 2024",
        "Title": "राष्ट्रीय हिन्दी विज्ञान सम्मेलन 2024",
        "More Details": "[Brochure] [More Details]"
    },
    {
        "Event Date": "25 July 2024",
        "Title": "Seminar on 'Recent trends in Light Weight Materials' Jointly organized by IIM Bhopal chapter & CSIR-AMPRI Bhopal",
        "More Details": "[Brochure] [Registration]"
    },
    {
        "Event Date": "25 June 2024",
        "Title": "One Week One Theme (Energy and Energy Devices) at CSIR-AMPRI, Bhopal",
        "More Details": ""
    },
    {
        "Event Date": "03 May 2024",
        "Title": "INTELLECTUAL PROPERTY (IP) AWARENESS PROGRAMME- Celebrating the World IP Day 2024 Under 'Rashtriya Boudhik Sampada Mahotsav and Viksit Bharat' Programme (Online mode) Theme- Importance of IP in Scientific And Technological Interventions",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "29-30 April 2024",
        "Title": "Jigyasa Outreach Workshop for Students Under CSIR-Jigyasa and Viksit Bharat",
        "More Details": "[Program Schedule]"
    },
    {
        "Event Date": "16 April 2024",
        "Title": "Webinar on Technological Aspects of Bamboo with it's biological features and various products-towards sustainability under CSIR-Integrated Skill Initiative Program and Vikisit Bharat",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "05 March 2024",
        "Title": "National Science Day Celebration 2024",
        "More Details": "[Flyer] [Program Schedule]"
    },
    {
        "Event Date": "19 Feb 2024",
        "Title": "A Fusion of Technology and Art; Opening New Horizons for Artisans One-Day Hands-on Workshop/Training/Demonstration Funded by DST under the SYST scheme Organized by CSIR-AMPRI Bhopal",
        "More Details": "[Brochure]"
    },
    {
        "Event Date": "29-30 Jan 2024",
        "Title": "7th National Science Teachers Workshop",
        "More Details": ""
    },
    {
        "Event Date": "27 Dec 2023",
        "Title": "IISF 2023 Outreach Program @CSIR-AMPRI, Bhopal",
        "More Details": ""
    },
    {
        "Event Date": "18 Sept 2023",
        "Title": "World Bamboo Day 2023 Talk on 'Future with Bamboo' and 'AMPRI Bamboo Composite for Modern Housing Structure' under the CSIR-Jigyasa programme",
        "More Details": "[Flyer] [Program Schedule]"
    },
    {
        "Event Date": "14 Sept 2023",
        "Title": "हिंदी दिवस समारोह",
        "More Details": ""
    },
    {
        "Event Date": "13-14 Sept 2023",
        "Title": "Training cum Workshop on 'Future materials and their applications' under CSIR-Integrated Skill Initiative Program",
        "More Details": ""
    },
    {
        "Event Date": "26 July 2023",
        "Title": "INTELLECTUAL PROPERTY (IP) AWARENESS PROGRAMME- AZADI KA AMRIT MAHOTSAV- IP Campaign- Celebration of 'Rashtriya Boudhik Sampada Mahotsav' Theme – Versatility in Intellectual Property Rights",
        "More Details": "[Flyer] [Program Schedule]"
    },
    {
        "Event Date": "20 July 2023",
        "Title": "INTELLECTUAL PROPERTY (IP) AWARENESS PROGRAMME- AZADI KA AMRIT MAHOTSAV- IP Campaign- Celebration of 'Rashtriya Boudhik Sampada Mahotsav'",
        "More Details": "[Flyer] [Brochure] [Program Schedule]"
    },
    {
        "Event Date": "June – July 2023",
        "Title": "Training and Internship on 'Artificial Intelligence in Hydrological & Environmental Applications' Under Accelerate Vigyan Vritika at CSIR-AMPRI, Bhopal",
        "More Details": "[Brochure]"
    },
    {
        "Event Date": "14-18 May 2023",
        "Title": "ONE WEEK ONE LAB @CSIR-AMPRI",
        "More Details": "[More Detail]"
    },
    {
        "Event Date": "21-24 Jan 2023",
        "Title": "India International Science Festival 2022 (Event: 'Artisan's Technology Village – Vocal for Local')",
        "More Details": "[Click Here] [Event Brochure]"
    },
    {
        "Event Date": "01 Jan 2023",
        "Title": "Program on the occasion of New Year 2023 : Address by Prof. Avanish Kumar Srivastava, Director, CSIR-AMPRI & CSIR-NML followed by exchange of MoU Documents between NITTR, Bhopal and CSIR-AMPRI, Bhopal",
        "More Details": "[YouTube Live]"
    },
    {
        "Event Date": "18 Oct 2022",
        "Title": "81st CSIR Foundation Day celebration at CSIR-AMPRI, Bhopal",
        "More Details": "[Flyer] [OM] [YouTube Live] @ 01:45 PM"
    },
    {
        "Event Date": "23 Sept 2022",
        "Title": "Popular Lecture on 'Learn Unique and Amazing Science from Nature' and 'History of Science in India' & Student-Scientist Interaction under CSIR-JIGYASA Programme",
        "More Details": "[Flyer] [YouTube Live]"
    },
    {
        "Event Date": "22-23 Sept 2022",
        "Title": "Training cum Workshop on 'Basic Skills in Science Laboratory Techniques' under CSIR-Integrated Skill Initiative Programme",
        "More Details": "[Flyer]"
    },
    {
        "Event Date": "19-21 Sept 2022",
        "Title": "Hands-on Workshop on 'Additive Manufacturing and its Applications' under CSIR- Integrated Skill Initiative Programme",
        "More Details": "[Flyer] [Brochure] [Click here to Register]"
    },
    {
        "Event Date": "July 2022",
        "Title": "'i'-CONNECT: INDUSTRY MEET-2022 Waste to Wealth Civil Infrastructure and Engineering Theme",
        "More Details": "[Brochure] [Proceedings]"
    },
    {
        "Event Date": "28 Feb 2022",
        "Title": "National Science Day Celebration 2022",
        "More Details": "[Flyer] [Program Schedule] [YouTube Live]"
    },
    {
        "Event Date": "4th & 5th Feb 2022",
        "Title": "5th National Science Teachers Workshop-2022 on 'Self-Reliant India using Cutting Edge Science & Technology' Under CSIR-Jigyasa Programme",
        "More Details": "[Inaugural Session] [1st Session] [2nd Session] [3rd Session] [4th Session] [Valedictory Ceremony] [Brochure] [Program Schedule] [Inaugural Flyer] [Valedictory Flyer]"
    },
    {
        "Event Date": "27 Jan 2022",
        "Title": "Online Symposium on 'Advanced Techniques on Nanomaterials Characterization'",
        "More Details": "[Symposium Brochure]"
    },
    {
        "Event Date": "10-13 December, 2021",
        "Title": "India International Science Festival – IISF 2021 [TRADITIONAL CRAFTS AND ARTISANS FESTIVAL]",
        "More Details": "[Click Here]"
    },
    {
        "Event Date": "11 May 2021",
        "Title": "Celebrations of 'National Technology Day 2021'.",
        "More Details": "[YouTube Live]"
    },
    {
        "Event Date": "09-10 March 2021",
        "Title": "4th National Science Teachers Workshop.",
        "More Details": "[Flyer] [Brochure] [Program Schedule]"
    },
    {
        "Event Date": "28 Feb 2021",
        "Title": "National Science Day Celebration 2021",
        "More Details": "[Flyer] [Program Schedule] [Join us @ YouTube Live]"
    },
    {
        "Event Date": "24-25 Feb 2021",
        "Title": "SERB supported Workshop on 'Innovations in Material Science for Biomedical Applications'",
        "More Details": "[Download Brochure]"
    },
    {
        "Event Date": "22-25 Dec 2020",
        "Title": "The 6th edition of India International Science Festival (IISF-2020)",
        "More Details": "[Click Here]"
    }
];

// Define tabs for the events page
const eventsTabs = [
    {
        key: "events",
        label: "Events",
        data: EventsData
    },
    {
        key: "pastEvents",
        label: "Past Events",
        data: PastEventsData
    }
];

const eventsColumns = [
    "Event Date",
    "Title",
    "More Details"
];

function EventsPage({ isAdmin }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <DataTable
                title="CSIR-AMPRI Events"
                columns={eventsColumns}
                tabs={eventsTabs}
                entriesPerPageOptions={[10, 25, 50]}
            />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    );
}

export default EventsPage;
