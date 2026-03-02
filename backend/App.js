const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const achievementRoute = require("./routes/achievementRoutes");
const staffRoute = require("./routes/staffRoutes"); 
const schoolInfoRoute = require("./routes/schoolInfoRoutes");
const disclosureRoute = require("./routes/disclosureRoutes");
const galleryRoute = require("./routes/galleryRoutes");

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//routes
app.use("/api/auth",authRoutes);
app.use("/api/documents",documentRoutes);
app.use("/api/achievement",achievementRoute);
app.use("api/staff",staffRoute);
app.use("/api/school-info",schoolInfoRoute);
app.use("/api/disclosure",disclosureRoute);
app.use("/api/galery",galleryRoute);

//APIS for testing
app.get("/api/test",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is running"
    });
});
module.exports = app;