// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export const getPhotos = (params) =>
//   API.get("/gallery", { params });

// export const uploadPhoto = (formData) =>
//   API.post("/gallery", formData);

// export const deletePhoto = (id) =>
//   API.delete(`/gallery/${id}`);