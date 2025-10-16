// @ts-nocheck
import axios from "axios";
import checkBaseURL from "../utils/CheckBaseUrl";

const baseURL = checkBaseURL();

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Helper function to handle requests with error handling
const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    console.log("rrrrrrrrrrrrrrrrrrrr : ", response);
    return { data: response.data, error: null };
  } catch (error) {
    console.error("API Error:", error);
    return {
      data: null,
      error: error.response?.data || error.data || "Unknown error",
    };
  }
};

// API Calls

// file upload
export const fileUpload = (payload) =>
  handleRequest(() => api.post(`/contentRenderPages/upload`, payload));


/* -------------------  USER's API ------------------- */
export const fetchUsers = (payload) =>
  handleRequest(() => api.get(`/admin`, payload));
export const CreateUser = (payload) =>
  handleRequest(() => api.post(`/admin`, payload));
export const UpdateUser = (id,payload) =>
  handleRequest(() => api.put(`/admin/${id}`, payload));
export const DeleteUser = (id ,payload) =>
  handleRequest(() => api.delete(`/admin/${id}`, payload));


// homePage
export const fetchUploads = () =>
  handleRequest(() => api.get("/upload/getAllUploads"));
export const createUpload = (formData) =>
  handleRequest(() =>
    api.post("/upload/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
export const updateUpload = (id, formData) =>
  handleRequest(() =>
    api.put(`/upload/update/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
export const deleteUpload = (id) =>
  handleRequest(() => api.delete(`/upload/delete/${id}`));

// director
export const fetchDirector = () => handleRequest(() => api.get("/director"));
export const updateDirector = (id, formData) =>{
  console.log("formdata director ............." ,formData)

  handleRequest(() =>
    api.put(`/director/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

// news
export const fetchNews = () => handleRequest(() => api.get("/news"));
export const createNews = (payload) =>
  handleRequest(() => api.post("/news", payload));
export const updateNews = (id, payload) =>
  handleRequest(() => api.put(`/news/${id}`, payload));
export const deleteNews = (id) =>
  handleRequest(() => api.delete(`/news/${id}`));

// notifications
export const fetchnotification = () =>
  handleRequest(() => api.get("/notification"));
export const createNotification = (payload) =>
  handleRequest(() => api.post("/notification", payload));
export const updateNotification = (id, payload) =>
  handleRequest(() => api.put(`/notification/${id}`, payload));
export const deleteNotification = (id) =>
  handleRequest(() => api.delete(`/notification/${id}`));

// vision/mandate
export const fetchVisionMandate = () =>
  handleRequest(() => api.get("/vision-mandate"));

export const createVisionMandate = (payload) =>
  handleRequest(() => api.post("/vision-mandate", payload));

export const updateVisionMandate = (id, payload) =>
  handleRequest(() => api.put(`/vision-mandate/${id}`, payload));

/* -------------------  About  ------------------- */
export const fetchAboutPage = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/about-csirampri"));

/* -------------------  ORGNIZATION  ------------------- */
export const fetchOrganisation = () =>
  handleRequest(() => api.get("/organisation"));
export const UpdateOrganisation = (id, formdat) =>
  handleRequest(() =>
    api.put(`/organisation/${id}`, formdat, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );

/* -----------------------------   Gallery   ---------------------------- */
export const fetchGallery = () => handleRequest(() => api.get(`/galllery`));
export const UpdateGallery = (id, payload) =>
  handleRequest(() => api.put(`/galllery/${id}`, payload));

/* -----------------------------   Site Data   ---------------------------- */
export const fetchSiteData = () => handleRequest(() => api.get("/siteData"));
export const UpdateSiteData = (id, formdat) =>
  handleRequest(() => api.put(`/siteData`, formdat));

/* -------------------  LWMD  ------------------- */
export const fetchLWMD = () =>
  handleRequest(() =>
    api.get("/contentRenderPages/slug/light-weight-materials-division-lwmd")
  );
/* -------------------  SCMD  ------------------- */
export const fetchSCMD = () =>
  handleRequest(() =>
    api.get(
      "/contentRenderPages/slug/sustainable-construction-materials-division-scmd"
    )
  );
/* -------------------  FMCD  ------------------- */
export const fetchFMCD = () =>
  handleRequest(() =>
    api.get(
      "/contentRenderPages/slug/functional-materials-and-composites-division-fmcd"
    )
  );
/* -------------------  EESD  ------------------- */
export const fetchEESD = () =>
  handleRequest(() =>
    api.get(
      "/contentRenderPages/slug/energy-and-environmental-solutions-division-eesd"
    )
  );
/* -------------------  IMDD  ------------------- */
export const fetchIMDD = () =>
  handleRequest(() =>
    api.get(
      "/contentRenderPages/slug/intelligent-materials-and-devices-division-imdd"
    )
  );
/* -------------------  IMPD  ------------------- */
export const fetchIMPD = () =>
  handleRequest(() =>
    api.get(
      "/contentRenderPages/slug/innovative-materials-and-processes-division-impd"
    )
  );
/* -------------------  R&D  ------------------- */
export const fetchRnD = () =>
  handleRequest(() =>
    api.get("/contentRenderPages/slug/rd-management-at-csirampri")
  );
/* -------------------  SERVICES PAGES  ------------------- */
/* -------- HR Development  ----------- */
export const fetchHRdevelopment = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/human-resource"));

/* --------  ISTAG  ----------- */
export const fetchISTAG = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/istag"));

/* --------  Dispensary  ----------- */
export const fetchDispensary = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/dispensary"));

/* --------  rajbhasha-cell  ----------- */
export const fetchRajbhashaCell = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/rajbhasha-cell"));

/* --------  workshop  ----------- */
export const fetchWorkshop = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/workshop"));

/* --------  guest-house  ----------- */
export const fetchGuestHouse = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/guest-house"));
export const fetchGuestHouseContact = () =>
  handleRequest(() => api.get("/GuestHouseContact"));
export const createGuestHouseContact = (payload) =>
  handleRequest(() => api.post("/GuestHouseContact", payload));
export const updateGuestHouseContact = (id, payload) =>
  handleRequest(() => api.put(`GuestHouseContact/update/${id}`, payload));
export const deleteGuestHouseContact = (id) =>
  handleRequest(() => api.delete(`GuestHouseContact/delete/${id}`));

/* --------  Administrations  ----------- */
export const fetchAdministration = () =>
  handleRequest(() => api.get("/Administration"));
export const createAdministration = (payload) =>
  handleRequest(() => api.post("/Administration", payload));
export const updateAdministration = (id, payload) =>
  handleRequest(() => api.put(`Administration/update/${id}`, payload));
export const deleteAdministration = (id) =>
  handleRequest(() => api.delete(`Administration/delete/${id}`));

/* --------  engineering-services  ----------- */
export const fetchEngineeringServices = () =>
  handleRequest(() => api.get("/contentRenderPages/slug/engineering-services"));

/* --------  directors-secretariat  ----------- */
export const fetchDirectorsecretariat = () =>
  handleRequest(() =>
    api.get("/contentRenderPages/slug/directors-secretariat")
  );

/* ------------------- CSR Page   ------------------- */
export const fetchCSR = () =>
  handleRequest(() =>
    api.get("/contentRenderPages/slug/corporate-social-responsibility-csr")
  );

/* ------------------- Content Render Pages(about, all reasearch and many other pages) ------------------- */
export const updateContentRenderPage = (id, payload) =>
  handleRequest(() => api.put(`/contentRenderPages/${id}`, payload));
export const fileUploadContentRenderPage = (payload) =>
  handleRequest(() => api.post(`/contentRenderPages/upload`, payload));

/* ------------------- Research Council ------------------- */
export const fetchCouncils = () =>
  handleRequest(() => api.get("/researchCouncil"));

export const createCouncil = (payload) =>
  handleRequest(() => api.post("/researchCouncil", payload));

export const updateCouncil = (id, payload) =>
  handleRequest(() => api.put(`researchCouncil/update/${id}`, payload));

export const deleteCouncil = (id) =>
  handleRequest(() => api.delete(`researchCouncil/delete/${id}`));

/* ------------------- Management Council ------------------- */
export const fetchManagementCouncils = () =>
  handleRequest(() => api.get("/managementCouncil"));

export const createManagementCouncil = (payload) =>
  handleRequest(() => api.post("/managementCouncil", payload));

export const updateManagementCouncil = (id, payload) =>
  handleRequest(() => api.put(`managementCouncil/update/${id}`, payload));

export const deleteManagementCouncil = (id) =>
  handleRequest(() => api.delete(`managementCouncil/delete/${id}`));

/* ------------------- Staff Info ------------------- */
export const fetchStaff = () => handleRequest(() => api.get("/staff"));
export const createstaff = (payload) =>
  handleRequest(() =>
    api.post("/staff", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );

export const updatestaff = (id, payload) =>
  handleRequest(() => api.put(`staff/update/${id}`, payload));

export const deletestaff = (id) =>
  handleRequest(() => api.delete(`staff/delete/${id}`));

/* -------------------  Former Directors ------------------- */
export const fetchFormerDirectors = () =>
  handleRequest(() => api.get("/formerDirectors"));
export const createFormerDirector = (payload) =>
  handleRequest(() => api.post("/formerDirectors", payload));

export const updateFormerDirector = (id, payload) =>
  handleRequest(() => api.put(`formerDirectors/update/${id}`, payload));

export const deleteFormerDirector = (id) =>
  handleRequest(() => api.delete(`formerDirectors/delete/${id}`));

/* -------------------  Technology / Know-How Transferred ------------------- */
export const fetchTechnologyKnowHowTransferred = () =>
  handleRequest(() => api.get("/technologyKnowHow"));
export const createtechnologyKnowHow = (payload) =>
  handleRequest(() => api.post("/technologyKnowHow", payload));

export const updatetechnologyKnowHow = (id, payload) =>
  handleRequest(() => api.put(`technologyKnowHow/update/${id}`, payload));

export const deletetechnologyKnowHow = (id) =>
  handleRequest(() => api.delete(`technologyKnowHow/delete/${id}`));

/* -------------------  MOU ------------------- */
export const fetchMOU = () => handleRequest(() => api.get("/MOU"));
export const createMOU = (payload) =>
  handleRequest(() => api.post("/MOU", payload));

export const updateteMOU = (id, payload) =>
  handleRequest(() => api.put(`MOU/update/${id}`, payload));

export const deleteMOU = (id) =>
  handleRequest(() => api.delete(`MOU/delete/${id}`));

/* -------------------  tender ------------------- */
export const fetchTender = () => handleRequest(() => api.get("/tender"));
export const createtender = (payload) =>
  handleRequest(() => api.post("/tender", payload));

export const updatetender = (id, payload) =>
  handleRequest(() => api.put(`tender/update/${id}`, payload));

export const deletetender = (id) =>
  handleRequest(() => api.delete(`tender/delete/${id}`));

/* -------------------  ampriDirectory ------------------- */
export const fetchAmpriDirectory = () =>
  handleRequest(() => api.get("/ampriDirectory"));
export const createAmpriDirectory = (payload) =>
  handleRequest(() => api.post("/ampriDirectory", payload));

export const updateAmpriDirectory = (id, payload) =>
  handleRequest(() => api.put(`ampriDirectory/update/${id}`, payload));

export const deleteAmpriDirectory = (id) =>
  handleRequest(() => api.delete(`ampriDirectory/delete/${id}`));

/* ------------------- Table Pages (for Councils/Staff) ------------------- */
export const createTablePage = (payload) =>
  handleRequest(() => api.post("/table-pages", payload));

export const updateTablePage = (id, payload) =>
  handleRequest(() => api.put(`/table-pages/${id}`, payload));

/* -------------------  TOP BAR ------------------- */
/* -------------  Events --------------- */
export const fetchEvents = () => handleRequest(() => api.get("/events"));

export const createEvent = (payload) =>
  handleRequest(() => api.post("/events", payload));

export const updateEvent = (id, payload) =>
  handleRequest(() => api.put(`events/update/${id}`, payload));

export const deleteEvent = (id) =>
  handleRequest(() => api.delete(`events/delete/${id}`));

/* -------------  Career --------------- */
export const fetchCareer = () => handleRequest(() => api.get("/career"));

export const createCareer = (payload) =>
  handleRequest(() => api.post("/career", payload));

export const updateCareer = (id, payload) =>
  handleRequest(() => api.put(`career/update/${id}`, payload));

export const deleteCareer = (id) =>
  handleRequest(() => api.delete(`career/delete/${id}`));

/* -------------  Office Memorandum --------------- */
export const fetchOfficeMemorandum = () =>
  handleRequest(() => api.get("/officeMemorandum"));

export const createOfficeMemorandum = (payload) =>
  handleRequest(() => api.post("/officeMemorandum", payload));

export const updateOfficeMemorandum = (id, payload) =>
  handleRequest(() => api.put(`officeMemorandum/update/${id}`, payload));

export const deleteOfficeMemorandum = (id) =>
  handleRequest(() => api.delete(`officeMemorandum/delete/${id}`));

/* ------------------- Division Pages ------------------- */
// Pages
export const createDivisionPage = (payload) =>
  handleRequest(() => api.post("/division-page", payload));
export const fetchDivisionPages = () =>
  handleRequest(() => api.get("/division-page"));
export const fetchDivisionPageById = (pageId) =>
  handleRequest(() => api.get(`/division-page/${pageId}`));
export const updateDivisionPage = (pageId, payload) =>
  handleRequest(() => api.put(`/division-page/${pageId}`, payload));
export const deleteDivisionPage = (pageId) =>
  handleRequest(() => api.delete(`/division-page/${pageId}`));

// Divisions
export const addDivision = (pageId, payload) =>
  handleRequest(() => api.post(`/division-page/${pageId}/divisions`, payload));
export const deleteDivision = (pageId, divisionId) =>
  handleRequest(() =>
    api.delete(`/division-page/${pageId}/divisions/${divisionId}`)
  );

// Subdivisions
export const addSubdivision = (pageId, divisionId, payload) =>
  handleRequest(() =>
    api.post(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions`,
      payload
    )
  );
export const updateSubdivisionTitle = (
  pageId,
  divisionId,
  subdivisionId,
  payload
) =>
  handleRequest(() =>
    api.put(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}/title`,
      payload
    )
  );
export const deleteSubdivision = (pageId, divisionId, subdivisionId) =>
  handleRequest(() =>
    api.delete(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}`
    )
  );

// Content Items
export const addContentItem = (pageId, divisionId, subdivisionId, payload) =>
  handleRequest(() =>
    api.post(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}/content`,
      payload
    )
  );
export const updateContentItem = (
  pageId,
  divisionId,
  subdivisionId,
  contentItemId,
  payload
) =>
  handleRequest(() =>
    api.put(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}/content/${contentItemId}`,
      payload
    )
  );
export const deleteContentItem = (
  pageId,
  divisionId,
  subdivisionId,
  contentItemId
) =>
  handleRequest(() =>
    api.delete(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}/content/${contentItemId}`
    )
  );
export const reorderContentItems = (
  pageId,
  divisionId,
  subdivisionId,
  payload
) =>
  handleRequest(() =>
    api.post(
      `/division-page/${pageId}/divisions/${divisionId}/subdivisions/${subdivisionId}/content/reorder`,
      payload
    )
  );

export default api;
