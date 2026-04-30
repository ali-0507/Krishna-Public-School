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


export const getDashboardStats = () => API.get("/dashboard");

// Gallery 
export const getGallery = (category) =>
    API.get(`/gallery${category ? `?category=${category}` : ""}`);

export const uploadPhoto = (formData) =>
    API.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });


export const addImagesToGallery = (id, formData) =>
  API.put(`/gallery/${id}/add-images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateGallery = (id, data) =>
  API.put(`/gallery/${id}`, data);

export const updateCaption = (id, data) =>
  API.put(`/gallery/${id}/update-caption`, data);

export const deletePhoto = (id) => API.delete(`/gallery/${id}`);





// Documents 
export const getDocuments = (category) =>
  API.get(`/documents${category ? `?category=${category}` : ""}`);

export const uploadDocument = (formData) =>
  API.post("/documents", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteDocument = (id) =>
  API.delete(`/documents/${id}`);



// Achievements 
export const getAchievements = () => API.get("/achievements");

export const uploadAchievement = (formData) =>
  API.post("/achievements", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const addAchievementImages = (id, formData) =>
  API.put(`/achievements/${id}/add-images`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  
  export const updateAchievement = (id, data) =>
  API.put(`/achievements/${id}`, data);

  export const deleteAchievement = (id) =>
  API.delete(`/achievements/${id}`);
  
export const deleteAchievementImage = (id, imageKey) =>
  API.delete(`/achievements/${id}/image`, {
    data: { imageKey },
  });


 
 

export default API;