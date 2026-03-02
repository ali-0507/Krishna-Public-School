require("dotenv").config();


const app = require("./App.js");
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;
connectDB();



app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});

