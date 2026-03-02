import axios from "axios";
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Attach JWT token to every request 
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


// Auth 
export const loginUser = (data) => API.post("/auth/login", data);
export const getMe = () => API.get("/auth/me");
export const registerUser = (data) => API.post("/auth/register", data);


// Gallery 
export const getGallery = (category) =>
    API.get(`/gallery${category ? `?category=${category}` : ""}`);
export const uploadPhoto = (formData) =>
    API.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const deletePhoto = (id) => API.delete(`/gallery/${id}`);


// Documents 
export const getDocuments = () => API.get("/documents");
export const uploadDocument = (formData) =>
    API.post("/documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updateDocument = (id, data) => API.put(`/documents/${id}`,
    data);
export const deleteDocument = (id) => API.delete(`/documents/${id}`);


// Achievements 
export const getAchievements = () => API.get("/achievements");
export const createAchievement = (formData) =>
    API.post("/achievements", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updateAchievement = (id, data) => API.put(`/achievements/${id}`,
    data);
export const deleteAchievement = (id) => API.delete(`/achievements/${id}`);


// Staff 
export const getStaff = () => API.get("/staff");
export const createStaff = (formData) =>
    API.post("/staff", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updateStaff = (id, data) => API.put(`/staff/${id}`, data);
export const deleteStaff = (id) => API.delete(`/staff/${id}`);


// School Info 
export const getSchoolInfo = () => API.get("/school-info");
export const updateSchoolInfo = (data) => API.put("/school-info", data);


// Disclosure 
export const getDisclosure = () => API.get("/disclosure");
export const updateDisclosure = (data) => API.put("/disclosure", data); 