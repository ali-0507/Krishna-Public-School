const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const staffRoute = require("./routes/staffRoutes"); 
const schoolInfoRoute = require("./routes/schoolInfoRoutes");
const disclosureRoute = require("./routes/disclosureRoutes");
const galleryRoute = require("./routes/galleryRoutes");
const dashboardRoutes = require("./routes/adminDashboardRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const achievementRoutes = require("./routes/achievementRoutes");

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/uploads", express.static("uploads"));
//routes
app.use("/api/auth",authRoutes);
app.use("/api/documents",documentRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/staff",staffRoute);
app.use("/api/school-info",schoolInfoRoute);
app.use("/api/disclosure",disclosureRoute);
app.use("/api/gallery",galleryRoute);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/contact", contactRoutes);


//APIS for testing
app.get("/api/test",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is running"
    });
});
module.exports = app;