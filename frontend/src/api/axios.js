import axios from "axios";

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://c4w7qdh8-3000.inc1.devtunnels.ms";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Helper function to handle requests with error handling
const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return { data: response.data, error: null };
  } catch (error) {
    console.error("API Error:", error);
    return {
      data: null,
      error: error.response?.data?.message || error.message || "Unknown error",
    };
  }
};

// API Calls
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
export const updateDirector = (id, formData) =>
  handleRequest(() =>
    api.put(`/director/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );

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
