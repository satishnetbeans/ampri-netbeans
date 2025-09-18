import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoose.config.js";

import uploadrouter from "./routes/uploads.routes.js";
import directorrouter from "./routes/director.routes.js";
import newsrouter from "./routes/news.routes.js";
import notificationrouter from "./routes/notification.routes.js";
import adminRouter from "./routes/admin.routes.js";
import visionMandaterouter from "./routes/visionMandate.routes.js";

import divisionPageRouter from "./routes/divisionPage.routes.js";

dotenv.config();
const app = express();

// ✅ Proper CORS setup
app.use(
  cors({
    origin: [
      "https://c4w7qdh8-5173.inc1.devtunnels.ms", 
      "http://localhost:5173",
    ],
    credentials: true, // allow cookies & Authorization headers
  })
);


app.use(express.json());
app.use(cookieParser()); // ✅ to read cookies from requests
app.use("/uploads", express.static("uploads"));

// Connect DB
connectDB();

// Routes
app.use("/upload", uploadrouter);
app.use("/director", directorrouter);
app.use("/news", newsrouter);
app.use("/notification", notificationrouter);
app.use("/admin", adminRouter);
app.use("/vision-mandate", visionMandaterouter);

app.use("/division-page", divisionPageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
