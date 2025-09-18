import React, { useState } from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

const RnDampri = {
  title: "R&D Management at CSIR-AMPRI",
  pageContent: {
    tabs: [
      {
        title: "Planning & Performance",
        content: [
          {
            type: 'image',
            src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/wow_background2.jpg', alt: 'planning'
          },
          { type: 'heading', para: "Project Planning & Monitoring" },
          { type: 'paragraph', para: "Planning & Performance Division (PPD) works as a focal point for monitoring and evaluation of the scientific projects and programs of the institute. PPD work as bridge between lab and CSIR HQ for management of research and development activities. Coordination for Intellectual Property Right Management, International collaboration, Business Development activities, drafting of agreements related with Research and Development, Technology/Knowhow transfer is being done through PPD." },
          { type: 'paragraph', para: "PPD acts as central repository of the project documents, progress reports, and utilization reports, project completion reports. PPD is the central agency for monitoring and evaluation of the projects for the committed deliverables in a time bound manner and progress of utilization of the funds to meet the mandated objectives of the project." },
          { type: 'paragraph', para: "PPD is also a key player in framing projects for five year plans / short term projects of CSIR through transparent consultative process among the CSIR-AMPRI scientists and other interested appropriate network project partners." },
          { type: 'paragraph', para: "Facilitation and implementation of the programmes by release/ rephrasing and re-appropriation of funds and issue of the new project numbers. Participation in project review meetings, implementation of mid course corrections, organizing the Research Council meetings, Preparation of Agenda and Minutes of the meeting and Coordination with Audit related with R&D activities, are the other activities of the Division." }
        ]
      },
      {
        title: "Information Technology",
        content: [
          { type: 'image', src: 'https://ampri.res.in/en/wp-content/uploads/2018/04/Information-Technology-Wallpaper-HD.jpg', alt: 'Info-Tech' },
          { type: 'heading', para: "INFORMATION TECHNOLOGY CENTRE" },
          { type: 'paragraph', para: "The Information Technology group looks after the day-to-day operation of internet, intranet, web and email services in the institute with a view to smooth and effective operation of the system. The network utilizes a mixture of optical fibre, UTP cables and switches. The access to internet is provided through a gateway to the external world via a 10 Mbps leased line from BSNL.  A local Area Network has been set up which connects together approximately 150 computers spread over the AMPRI campus. Migration to a more efficient infrastructure with new servers to improve the quality of service has already been done. Multi-layered firewall, anti-spam engine, antivirus solution has also been implemented to enhance the overall network security." },
          { type: 'paragraph', para: "The group also helps the Institute to plan for improving the quality of the services in terms of increasing the capacity and speed of the internet system. This has been done keeping in mind the growing demand of the institute in view of its increasing activities and manpower, and establishing a less paper working system for more effective monitoring of the progress of various activities. " },
          { type: 'list', para: "The major activities of the Information Technology (IT) Centre are:", items: ["Utilization of ICT tools for effective and efficient R&D Management along with other requirement of the institute.", "Showcasing the niche areas, expertise and knowledge of the institute through institutional website.", "Support to  CSIR-AMPRI  scientists  IT savvy", "Utilize IT to realize economy of scales in common functions in transparent manner.", "Establishment and maintenance of digital document-based decision support system", "State –of- the -art data centre"] },
          { type: 'image', src: 'https://ampri.res.in/en/wp-content/uploads/2018/06/datcenit-1024x428.jpg', alt: 'data-centre' },
          { type: 'heading', para: "Major Programmes" },
          { type: 'paragraph', para: "The major programme of the IT centre is: \"Building a scientific knowledge grid, ICT infrastructure and services for CSIR-AMPRI.\" The centre is providing support to high-end technology in developing scientific Management Grid solutions for enhancing the productivity of scientists through computing facilities to increase the pace of R&D activities. The group also rendering services to provide accurate, efficient, relevant information to the citizens in timely manner.  To set up minimum benchmark for institute's website \"Guidelines for Indian Government websites\" formulated by National Informatics Centre adopted by the Department of  Administrative reform and public grievances which are mandatory are being implemented to make the institute's website conform to the UUU trilogy i.e., user centric, user friendly and universally accessible.  To implement these GIGW guidelines, the group is ensuring a consistent and tested framework for maintaining the uniformity to meet the citizen expectation at all times; authentic, accurate easily accessible website.  The centre has also developed \"Online Application submission\" system application for calling online applications for recruitment of various positions/vacancies needed by the institute time to time." }
        ]
      },
      {
        title: "Business Development",
        content: [
          { type: 'image', src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/1vision-business.jpg', alt: 'buisness-vision' },
          { type: 'heading', para: "Business Development" },
          { type: 'paragraph', para: "The  Business Development (BD) Group of AMPRI Bhopal was established on the behest of CSIR with an aim to provide services to enhance financial resources of the institute by coordinating business activities. The division provides a bridge between the institute and the outside agencies by supporting in existing areas of proven technologies and attracting new companies towards the technological development.  BD identifies and analyzes new areas of business in a planned and systematic manner for commercialization of technologies to public sector and private entrepreneurs. The institute lays considerable emphasis on the quality of its services to the stakeholders, mainly on deliverable against the externally funded projects. This activity is a measure to determine to what level the service or product meets the customer expectations, considering requirements in terms of both quality and service." },
          { type: 'list', para: "The activities of BD group are primarily focused in following areas:", items: ["Intellectual Property Management"] },
          { type: 'list', para: "The IPR system encourages creativity to maintain the technological superiority to sustain and enhance the economic benefits. The intellectual property includes patents, copy rights and design. The activities involve:", items: ["Motivating researchers for strong IP culture.", "Drafting patent specifications.", "Liaison with IPMD, CSIR for updating records.", "Development and maintenance of knowledgebase of patents filedTechnology Transfer"] },
          { type: 'list', para: "The activities regarding transfer of technologies developed at CBRI involve:", items: ["Preparation of technology profiles for a view at glance.", "Liaison with NRDC, PPD, CSIR.", "Negotiations, exchanges and feedbacks from entrepreneurs showing interest in CBRI technologies.", "Drafting and finalizing license agreement.", "Establishing license fee of processes.", "Royalty collection.", "Development of database of potential technologies for commercialization."] },
          { type: 'list', para: "Customer Satisfaction Evaluation", items: ["Preparation of questionnaire to get the customer feedback on the quality of service provided.", "Liaison with the customer to get their valuable feedback.", "Providing necessary feedback to scientists in laboratory to improve the processes, wherever required.", "Interaction with Customer Satisfaction Evaluation Unit (CSEU), CSIR for Customer Satisfaction Index (CSI) determination"] }
        ]
      }
    ]
  }
}

function RnDPage({ isAdmin }) {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'image':
          return (
            <div key={index} className="h-[62vh] w-full overflow-hidden my-6 flex justify-center bg-amber-200">
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
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      {/* Use the reusable ContentRenderer component */}
      <ContentRenderer contentData={RnDampri} />

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default RnDPage