// App.jsx
// @ts-nocheck
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/Admin/AdminLoginPage.jsx";

import EditDirectorPage from "./pages/Admin/EditDirectorPage.jsx";
import EditNewsPage from "./pages/Admin/EditNewsPage.jsx";
import EditNotificationPage from './pages/Admin/EditNotificationPage.jsx';
import EditSectionPage from "./pages/Admin/EditSectionPage.jsx";
import EditVisionMandatePage from './pages/Admin/EditVisonMandatePage.jsx';
import DivisionDynamicPage from './pages/Admin/DivisionBoilerPlatePage.jsx'; // For dynamic

import DemoDivisionPage from './pages/Admin/DivisionBoilerPlatePage.jsx';
import ContentEditor from './components/Admin Edits/ContentEditor.jsx';

// topBar Page
import EventsPage from './pages/topBar/EventsPage.jsx';
import CareerPage from './pages/topBar/Career@CSIR-AMPRI.jsx';
import RTIPage from './pages/topBar/RTI.jsx';
import OfficeMemorandumPage from './pages/topBar/OfficeMemorandum.jsx';
import ScreenReaderAccess from './pages/topBar/SRA.jsx';

// about pages
import AboutPage from './pages/about/AboutPage.jsx';
import Organisation from './pages/about/Organisation.jsx';
import ResearchCouncil from './pages/about/ResearchCouncil.jsx';
import ManagementCouncilPage from './pages/about/ManagementCouncilPage.jsx';
import StaffPage from './pages/about/StaffInformationPage.jsx';
import FormerDirectorsPage from './pages/about/FormerDirectorsPage.jsx';

// research pages
import LightWeightMaterials from './pages/research/LightWeightMaterials.jsx';
import FunctionalMaterialsComposites from './pages/research/FunctionalMaterialsComposites.jsx';
import SustainableConstructionMaterials from './pages/research/SustainableConstructionMaterials.jsx';
import EnergyEnvironmentalSolutions from './pages/research/EnergyEnvironmentalSolutions.jsx';
import IntelligentMaterialsDevices from './pages/research/IntelligentMaterialsDevices.jsx';
import InnovativeMaterialsProcesses from './pages/research/InnovativeMaterialsProcesses.jsx';


import CSR from './pages/CSRpage.jsx';

// r&d  pages
import RnDPage from './pages/R&D/R&DmanagementPage.jsx';
import TechnologyKnowhowPage from './pages/R&D/Technology-Knowhow.jsx';
import MouPage from './pages/R&D/MemorandumOfUnderstanding.jsx';

// services pages
import HumanResourcePage from './pages/services/HumanResource.jsx';
import ISTAG from './pages/services/ISTAG.JSX';
import Dispensary from './pages/services/Dispensary.JSX';
import GuestHouse from './pages/services/Guesthouse.JSX';
import RajbhashaCell from './pages/services/RajbhashaCell.JSX';
import DirectorSecretariat from './pages/services/DirectorSecretariat.JSX';
import Workshop from './pages/services/Workshop.JSX';
import EngineeringServices from './pages/services/EngineeringServices.JSX';
import Administration from './pages/services/Administration.JSX';

import TenderPage from './pages/TenderPage.jsx';
import DirectoryPage from './pages/DirectoryPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';

import {
  fetchUploads,
  fetchDirector,
  fetchNews,
  fetchnotification,
  fetchVisionMandate,  // 👈 import it
  fetchDivisionPages
} from "./api/axios.js";

import api from "./api/axios.js";

function App() {
  const [uploads, setUploads] = useState([]);
  const [banner, setBanner] = useState([]);
  const [facility, setFacility] = useState([]);
  const [recentDevelopments, setRecentDevelopments] = useState([]);
  const [foundationDay, setFoundationDay] = useState([]);
  const [printMedia, setprintMedia] = useState([]);
  const [updates, setupdates] = useState([]);


  const [director, setDirector] = useState({});
  const [news, setNews] = useState([]);
  const [notifications, setnotifications] = useState([]);

  const [visionMandate, setVisionMandate] = useState([]); // 👈 new state

  const [isAdmin, setIsAdmin] = useState(false);

  const [divisionPages, setdivisionPages] = useState([]);

  console.log("divisionPages : ", divisionPages)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [uploadsRes, directorRes, newsRes, notificationRes, visionRes, divisionPagesRes] = await Promise.all([
          fetchUploads(),
          fetchDirector(),
          fetchNews(),
          fetchnotification(),
          fetchVisionMandate(),  // 👈 fetch vision/mandate
          fetchDivisionPages()
        ]);

        if (uploadsRes.data) {
          const data = uploadsRes.data.map(item => ({
            ...item,
            fileUrl: item.fileUrl.startsWith("uploads/")
              ? `http://localhost:3000/${item.fileUrl}`
              : item.fileUrl
          }));

          setUploads(data);
          setBanner(data.filter(item => item.section === 'banner'));
          setFacility(data.filter(item => item.section === 'facility'));
          setRecentDevelopments(data.filter(item => item.section === 'Recent Developments'));
          setFoundationDay(data.filter(item => item.section === 'foundation day'));
          setprintMedia(data.filter(item => item.section === 'Print Media'));
          setupdates(data.filter(item => item.section === 'updates @'));
        }

        if (directorRes.data) setDirector(directorRes.data);
        if (newsRes.data) setNews(newsRes.data);
        if (notificationRes.data) setnotifications(notificationRes.data);
        if (visionRes.data) setVisionMandate(visionRes.data); // 👈 store in state
        if (divisionPagesRes.data) setdivisionPages(divisionPagesRes.data);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    const checkAdmin = async () => {
      try {
        const res = await api.get("/admin/check-auth");
        if (res.data.isAdmin) {
          setIsAdmin(true);
        }
      } catch {
        setIsAdmin(false);
      }
    };

    fetchAllData();
    checkAdmin();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              uploads={uploads}
              banner={banner}
              facility={facility}
              recentDevelopments={recentDevelopments}
              foundationDay={foundationDay}
              printMedia={printMedia}
              updates={updates}
              director={director}
              notifications={notifications}
              news={news}
              visionMandate={visionMandate}   // 👈 pass to homepage
              isAdmin={isAdmin}
            />
          }
        />
        
        {/* topbar routes */}
        <Route path="/events" element={<EventsPage isAdmin={isAdmin} />} />
        <Route path="/career" element={<CareerPage isAdmin={isAdmin} />} />
        <Route path="/RTI" element={<RTIPage isAdmin={isAdmin} />} />
        <Route path="/officeMemorandum" element={<OfficeMemorandumPage isAdmin={isAdmin} />} />
        <Route path="/SRA" element={<ScreenReaderAccess isAdmin={isAdmin} />} />

        {/* about pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/Organization" element={<Organisation />} />
        <Route path="/about/research-council" element={<ResearchCouncil />} />
        <Route path="/about/management-council" element={<ManagementCouncilPage />} />
        <Route path="/about/staff-page" element={<StaffPage />} />
        <Route path="/about/former-directors" element={<FormerDirectorsPage />} />

        {/* research pages */}
        <Route path="/research/LWMD" element={<LightWeightMaterials isAdmin={isAdmin} />} />
        <Route path="/research/FMCD" element={<FunctionalMaterialsComposites isAdmin={isAdmin} />} />
        <Route path="/research/SCMD" element={<SustainableConstructionMaterials isAdmin={isAdmin} />} />
        <Route path="/research/EESD" element={<EnergyEnvironmentalSolutions isAdmin={isAdmin} />} />
        <Route path="/research/IMDD" element={<IntelligentMaterialsDevices isAdmin={isAdmin} />} />
        <Route path="/research/IMPD" element={<InnovativeMaterialsProcesses isAdmin={isAdmin} />} />

        <Route path="/csr" element={<CSR />} />

        {/* r&d pages */}
        <Route path="/r&d-Management" element={<RnDPage />} />
        <Route path="/r&d-Management/Technology-Knowhow" element={<TechnologyKnowhowPage />} />
        <Route path="/r&d-Management/MOU" element={<MouPage />} />

        <Route path="/tender" element={<TenderPage />} />

        <Route path="/adminLogin" element={<AdminLogin />} />

        <Route path="/directory" element={<DirectoryPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        {/* services pages */}
        <Route path="/services/HR" element={<HumanResourcePage />} />
        <Route path="/services/ISTAG" element={<ISTAG />} />
        <Route path="/services/Dispensary" element={<Dispensary />} />
        <Route path="/services/guest-house" element={<GuestHouse />} />
        <Route path="/services/rajbhasha-cell" element={<RajbhashaCell />} />
        <Route path="/services/director-secretariat" element={<DirectorSecretariat />} />
        <Route path="/services/administration" element={<Administration />} />
        <Route path="/services/Workshop" element={<Workshop />} />
        <Route path="/services/engineering-services" element={<EngineeringServices />} />


        <Route
          path="/admin"
          element={
            <HomePage
              uploads={uploads}
              banner={banner}
              facility={facility}
              recentDevelopments={recentDevelopments}
              foundationDay={foundationDay}
              printMedia={printMedia}
              updates={updates}
              director={director}
              notifications={notifications}
              news={news}
              visionMandate={visionMandate}  // 👈 also here
              isAdmin={isAdmin}
            />
          }
        />

        <Route path="admin/edituploads/:section" element={<EditSectionPage sectionUploads={uploads} />} />
        <Route path="/admin/editdirector" element={<EditDirectorPage director={director} />} />
        <Route path="/admin/editnews" element={<EditNewsPage news={news} />} />
        <Route path="/admin/editnotification" element={<EditNotificationPage notifications={notifications} />} />
        <Route
          path="/admin/editvision"
          element={<EditVisionMandatePage visionMandate={visionMandate} />}
        />

        <Route path="/division" element={<DemoDivisionPage />} />

        {divisionPages.length > 0 && divisionPages.map((page) => {
          const path = `/admim/division/${encodeURIComponent(page.pageTitle.toLowerCase().replace(/\s+/g, '-'))}`;
          return (
            <Route
              key={page._id}
              path={path}
              element={<DivisionDynamicPage pageData={page} />}
            />
          );
        })}
      </Routes>

    </>
  );
}

export default App;
