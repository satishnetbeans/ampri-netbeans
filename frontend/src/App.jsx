// App.jsx
// @ts-nocheck
import { useEffect, useState } from 'react';

import { useUserDevice } from './context/UserDeviceContext.jsx';
import { useSiteData } from './context/siteDataContext.jsx';
import { useUserData } from './context/UserDataContext.jsx';

import StructureRoleRoute from './utils/StructureRoleRoute.js';

import { Routes, Route, useLocation } from "react-router-dom";


import { checkAdmin } from './api/axiosAPIs.js';

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

// gallery
import GalleryPage from './pages/gallery/PhotoGalleryPage.jsx';
import VideoGalleryPage from './pages/gallery/VideoGalleryPage.jsx';

import AdminDashboard from './pages/Admin/admin Dashboard/AdminDashboard.jsx';

import {
  fetchUploads,
  fetchDirector,
  fetchNews,
  fetchnotification,
  fetchVisionMandate,  // 👈 import it
  fetchDivisionPages,
  fetchSiteData
} from "./api/axios.js";

import checkBaseURL from './utils/CheckBaseUrl.js';

function App() {
  const CheckBaseURL = checkBaseURL()
  const currentURL = useLocation();

  const [Role, setRole] = useState(null);
  const [restrictedRoutes, setrestrictedRoutes] = useState(null);

  const { updateUserDevice } = useUserDevice();
  const { updateUserData, UserData } = useUserData();
  const { updateSiteData } = useSiteData();


  console.log("baseeeeeeeeeee : ", CheckBaseURL)
  console.log("UserDataaaaaaa & role : ", UserData, Role)

  useEffect(() => {
    if (UserData && UserData.role) {
      const role = StructureRoleRoute(UserData)
      setRole(role)
    }
    if (UserData && UserData.role === "Member" && UserData.accessModules.length > 0) {
      setrestrictedRoutes(UserData.accessModules)
    }
  }, [UserData])


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


  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [uploadsRes, directorRes, newsRes, notificationRes, visionRes, divisionPagesRes, sitedataRes] = await Promise.all([
          fetchUploads(),
          fetchDirector(),
          fetchNews(),
          fetchnotification(),
          fetchVisionMandate(),  // 👈 fetch vision/mandate
          fetchDivisionPages(),
          fetchSiteData()
        ]);

        if (uploadsRes.data) {
          const data = uploadsRes.data.map(item => ({
            ...item,
            fileUrl: item.fileUrl.startsWith("uploads/")
              ? `${CheckBaseURL}/${item.fileUrl}`
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

        if (directorRes.data) {
          const data = {
            ...directorRes.data,
            image: directorRes.data.image.startsWith("uploads/")
              ? `${CheckBaseURL}/${directorRes.data.image}`
              : directorRes.data.image
          };
          setDirector(data);
        }

        if (newsRes.data) setNews(newsRes.data);
        if (notificationRes.data) setnotifications(notificationRes.data);
        if (visionRes.data) setVisionMandate(visionRes.data); // 👈 store in state
        if (divisionPagesRes.data) setdivisionPages(divisionPagesRes.data);

        if (sitedataRes.data) {
          let data = sitedataRes.data
          data.lastModified = new Date(data.lastModified).toLocaleString()

          updateSiteData(data);
        }

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };


    const verifyAdmin = async () => {
      console.log("currentURL : ", currentURL)
      let userVisited = false
      if (currentURL.pathname === "/") {
        userVisited = true
      }
      const res = await checkAdmin(userVisited);
      console.log("checkUser : ", res)
      const { isAdmin, user, deviceInfo } = res
      setIsAdmin(isAdmin);
      updateUserDevice(deviceInfo)
      updateUserData(user)
    }
    verifyAdmin();

    fetchAllData();

  }, []);

  const [checkedRoutes, setcheckedRoutes] = useState(null)

  useEffect(() => {
    const routeAvailabilityChaeckForMember = (restricted) => {
      let checked = {
        "Events": false,
        "career": false,
        "Office Memorandum": false,

        "HomePage": false,
        "About Pages": false,
        "Research Pages": false,
        "R&D Management": false,
        "Tender": false,
        "Directory": false,
        "Gallery": false,
        "Services": false,
        "CSR": false,
      }
      if (restricted && restricted.length > 0) {
        restricted.map((obj) => {
          if (obj.title === "topBar") {
            obj.routes.map((route) => {
              checked[route] = true
            })
          }
          else if (obj.title === "Main Navigations") {
            obj.routes.map((route) => {
              checked[route] = true
            })
          }
        })
        console.log("check...... ", checked)
        setcheckedRoutes(checked)
      } else {
        setcheckedRoutes(checked)
      }

    }
    routeAvailabilityChaeckForMember(restrictedRoutes)
  }, [restrictedRoutes])




  return (
    <>
      {
        Role ?
          <Routes>

            {restrictedRoutes ?

              <>

                {console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", checkedRoutes)}

                <Route
                  path={`/${Role}`}
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
                      isAdmin={checkedRoutes.HomePage}
                      setIsAdmin={setIsAdmin}
                    />
                  }
                />

                {/* topbar routes */}
                <Route path={`/${Role}/events`} element={<EventsPage isAdmin={checkedRoutes.Events} />} />
                <Route path={`/${Role}/career`} element={<CareerPage isAdmin={checkedRoutes.career} />} />
                <Route path={`/${Role}/RTI`} element={<RTIPage isAdmin={false} />} />
                <Route path={`/${Role}/officeMemorandum`} element={<OfficeMemorandumPage isAdmin={checkedRoutes["Office Memorandum"]} />} />
                <Route path={`/${Role}/SRA`} element={<ScreenReaderAccess isAdmin={false} />} />

                {/* about pages */}
                <Route path={`/${Role}/about`} element={<AboutPage isAdmin={checkedRoutes["About Pages"]} />} />
                <Route path={`/${Role}/Organization`} element={<Organisation isAdmin={checkedRoutes["About Pages"]} />} />
                <Route path={`/${Role}/research-council`} element={<ResearchCouncil isAdmin={checkedRoutes["About Pages"]} />} />
                <Route path={`/${Role}/management-council`} element={<ManagementCouncilPage isAdmin={checkedRoutes["About Pages"]} />} />
                <Route path={`/${Role}/staff-page`} element={<StaffPage isAdmin={checkedRoutes["About Pages"]} />} />
                <Route path={`/${Role}/former-directors`} element={<FormerDirectorsPage isAdmin={checkedRoutes["About Pages"]} />} />

                {/* research pages */}
                <Route path={`/${Role}/research/LWMD`} element={<LightWeightMaterials isAdmin={checkedRoutes["Research Pages"]} />} />
                <Route path={`/${Role}/research/FMCD`} element={<FunctionalMaterialsComposites isAdmin={checkedRoutes["Research Pages"]} />} />
                <Route path={`/${Role}/research/SCMD`} element={<SustainableConstructionMaterials isAdmin={checkedRoutes["Research Pages"]} />} />
                <Route path={`/${Role}/research/EESD`} element={<EnergyEnvironmentalSolutions isAdmin={checkedRoutes["Research Pages"]} />} />
                <Route path={`/${Role}/research/IMDD`} element={<IntelligentMaterialsDevices isAdmin={checkedRoutes["Research Pages"]} />} />
                <Route path={`/${Role}/research/IMPD`} element={<InnovativeMaterialsProcesses isAdmin={checkedRoutes["Research Pages"]} />} />

                {/* r&d pages */}
                <Route path={`/${Role}/r&d-Management`} element={<RnDPage isAdmin={checkedRoutes["R&D Management"]} />} />
                <Route path={`/${Role}/r&d-Management/Technology-Knowhow`} element={<TechnologyKnowhowPage isAdmin={checkedRoutes["R&D Management"]} />} />
                <Route path={`/${Role}/r&d-Management/MOU`} element={<MouPage isAdmin={checkedRoutes["R&D Management"]} />} />

                {/* tender page */}
                <Route path={`/${Role}/tender`} element={<TenderPage isAdmin={checkedRoutes.Tender} />} />

                {/* Admins Pages */}
                <Route path="/adminLogin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

                <Route path={`/${Role}/directory`} element={<DirectoryPage isAdmin={checkedRoutes.Directory} />} />

                <Route path={`/${Role}/gallery`} element={<GalleryPage isAdmin={checkedRoutes.Gallery} />} />
                <Route path={`/${Role}/video-gallery`} element={<VideoGalleryPage isAdmin={checkedRoutes.Gallery} />} />

                <Route path={`/${Role}/csr`} element={<CSR isAdmin={checkedRoutes.CSR} />} />

                {/* services pages */}
                <Route path={`/${Role}/services/HR`} element={<HumanResourcePage isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/ISTAG`} element={<ISTAG isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/Dispensary`} element={<Dispensary isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/guest-house`} element={<GuestHouse isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/rajbhasha-cell`} element={<RajbhashaCell isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/director-secretariat`} element={<DirectorSecretariat isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/administration`} element={<Administration isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/Workshop`} element={<Workshop isAdmin={checkedRoutes.Services} />} />
                <Route path={`/${Role}/services/engineering-services`} element={<EngineeringServices isAdmin={checkedRoutes.Services} />} />

                {(Role === "Super-Admin" || Role === "Admin") && <Route path={`/${Role}/dashboard`} element={<AdminDashboard isAdmin={true} />} />}

                {/* homepage edits*/}
                <Route path={`/${Role}/edituploads/:section`} element={<EditSectionPage sectionUploads={uploads} isAdmin={checkedRoutes.HomePage} />} />
                <Route path={`/${Role}/editdirector`} element={<EditDirectorPage director={director} isAdmin={checkedRoutes.HomePage} />} />
                <Route path={`/${Role}/editnews`} element={<EditNewsPage news={news} isAdmin={checkedRoutes.HomePage} />} />
                <Route path={`/${Role}/editnotification`} element={<EditNotificationPage notifications={notifications} isAdmin={checkedRoutes.HomePage} />} />

                {/* division */}
                <Route
                  path={`/${Role}/editvision`}
                  element={<EditVisionMandatePage visionMandate={visionMandate} isAdmin={isAdmin} />}
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

              </>

              :

              <>
                <Route
                  path={`/${Role}`}
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
                      setIsAdmin={setIsAdmin}
                    />
                  }
                />

                {/* topbar routes */}
                <Route path={`/${Role}/events`} element={<EventsPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/career`} element={<CareerPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/RTI`} element={<RTIPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/officeMemorandum`} element={<OfficeMemorandumPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/SRA`} element={<ScreenReaderAccess isAdmin={isAdmin} />} />

                {/* about pages */}
                <Route path={`/${Role}/about`} element={<AboutPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/Organization`} element={<Organisation isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research-council`} element={<ResearchCouncil isAdmin={isAdmin} />} />
                <Route path={`/${Role}/management-council`} element={<ManagementCouncilPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/staff-page`} element={<StaffPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/former-directors`} element={<FormerDirectorsPage isAdmin={isAdmin} />} />

                {/* research pages */}
                <Route path={`/${Role}/research/LWMD`} element={<LightWeightMaterials isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research/FMCD`} element={<FunctionalMaterialsComposites isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research/SCMD`} element={<SustainableConstructionMaterials isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research/EESD`} element={<EnergyEnvironmentalSolutions isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research/IMDD`} element={<IntelligentMaterialsDevices isAdmin={isAdmin} />} />
                <Route path={`/${Role}/research/IMPD`} element={<InnovativeMaterialsProcesses isAdmin={isAdmin} />} />


                {/* r&d pages */}
                <Route path={`/${Role}/r&d-Management`} element={<RnDPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/r&d-Management/Technology-Knowhow`} element={<TechnologyKnowhowPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/r&d-Management/MOU`} element={<MouPage isAdmin={isAdmin} />} />

                {/* tender page */}
                <Route path={`/${Role}/tender`} element={<TenderPage isAdmin={isAdmin} />} />

                {/* Admins Pages */}
                <Route path="/adminLogin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

                <Route path={`/${Role}/directory`} element={<DirectoryPage isAdmin={isAdmin} />} />

                <Route path={`/${Role}/gallery`} element={<GalleryPage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/video-gallery`} element={<VideoGalleryPage isAdmin={isAdmin} />} />

                <Route path={`/${Role}/csr`} element={<CSR isAdmin={isAdmin} />} />

                {/* services pages */}
                <Route path={`/${Role}/services/HR`} element={<HumanResourcePage isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/ISTAG`} element={<ISTAG isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/Dispensary`} element={<Dispensary isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/guest-house`} element={<GuestHouse isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/rajbhasha-cell`} element={<RajbhashaCell isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/director-secretariat`} element={<DirectorSecretariat isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/administration`} element={<Administration isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/Workshop`} element={<Workshop isAdmin={isAdmin} />} />
                <Route path={`/${Role}/services/engineering-services`} element={<EngineeringServices isAdmin={isAdmin} />} />

                {(Role === "Super-Admin" || Role === "Admin") && <Route path={`/${Role}/dashboard`} element={<AdminDashboard isAdmin={isAdmin} />} />}

                {/* homepage edits*/}
                <Route path={`/${Role}/edituploads/:section`} element={<EditSectionPage sectionUploads={uploads} isAdmin={isAdmin} />} />
                <Route path={`/${Role}/editdirector`} element={<EditDirectorPage director={director} isAdmin={isAdmin} />} />
                <Route path={`/${Role}/editnews`} element={<EditNewsPage news={news} isAdmin={isAdmin} />} />
                <Route path={`/${Role}/editnotification`} element={<EditNotificationPage notifications={notifications} isAdmin={isAdmin} />} />

                {/* division */}
                <Route
                  path={`/${Role}/editvision`}
                  element={<EditVisionMandatePage visionMandate={visionMandate} isAdmin={isAdmin} />}
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

              </>

            }

          </Routes>
          :
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
                  setIsAdmin={setIsAdmin}
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
            <Route path={"/about"} element={<AboutPage isAdmin={isAdmin} />} />
            <Route path={"/Organization"} element={<Organisation isAdmin={isAdmin} />} />
            <Route path="/research-council" element={<ResearchCouncil isAdmin={isAdmin} />} />
            <Route path="/management-council" element={<ManagementCouncilPage isAdmin={isAdmin} />} />
            <Route path="/staff-page" element={<StaffPage isAdmin={isAdmin} />} />
            <Route path="/former-directors" element={<FormerDirectorsPage isAdmin={isAdmin} />} />

            {/* research pages */}
            <Route path="/research/LWMD" element={<LightWeightMaterials isAdmin={isAdmin} />} />
            <Route path="/research/FMCD" element={<FunctionalMaterialsComposites isAdmin={isAdmin} />} />
            <Route path="/research/SCMD" element={<SustainableConstructionMaterials isAdmin={isAdmin} />} />
            <Route path="/research/EESD" element={<EnergyEnvironmentalSolutions isAdmin={isAdmin} />} />
            <Route path="/research/IMDD" element={<IntelligentMaterialsDevices isAdmin={isAdmin} />} />
            <Route path="/research/IMPD" element={<InnovativeMaterialsProcesses isAdmin={isAdmin} />} />


            {/* r&d pages */}
            <Route path={"/r&d-Management"} element={<RnDPage isAdmin={isAdmin} />} />
            <Route path="/r&d-Management/Technology-Knowhow" element={<TechnologyKnowhowPage isAdmin={isAdmin} />} />
            <Route path="/r&d-Management/MOU" element={<MouPage isAdmin={isAdmin} />} />

            {/* tender page */}
            <Route path={"/tender"} element={<TenderPage isAdmin={isAdmin} />} />

            {/* Admins Pages */}
            <Route path="/adminLogin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

            <Route path={"/directory"} element={<DirectoryPage isAdmin={isAdmin} />} />

            <Route path={"/gallery"} element={<GalleryPage isAdmin={isAdmin} />} />
            <Route path={"/video-gallery"} element={<VideoGalleryPage isAdmin={isAdmin} />} />

            <Route path={"/csr"} element={<CSR isAdmin={isAdmin} />} />

            {/* services pages */}
            <Route path="/services/HR" element={<HumanResourcePage isAdmin={isAdmin} />} />
            <Route path="/services/ISTAG" element={<ISTAG isAdmin={isAdmin} />} />
            <Route path="/services/Dispensary" element={<Dispensary isAdmin={isAdmin} />} />
            <Route path="/services/guest-house" element={<GuestHouse isAdmin={isAdmin} />} />
            <Route path="/services/rajbhasha-cell" element={<RajbhashaCell isAdmin={isAdmin} />} />
            <Route path="/services/director-secretariat" element={<DirectorSecretariat isAdmin={isAdmin} />} />
            <Route path="/services/administration" element={<Administration isAdmin={isAdmin} />} />
            <Route path="/services/Workshop" element={<Workshop isAdmin={isAdmin} />} />
            <Route path="/services/engineering-services" element={<EngineeringServices isAdmin={isAdmin} />} />

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
      }


    </>
  );
}
export default App;
