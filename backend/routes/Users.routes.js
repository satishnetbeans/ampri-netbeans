// routes/AllUsers.js

// @ts-nocheck

import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Users.model.js";

import { authAdmin } from "../middlewares/jwtAuth.js";

import { createLog } from "../utils/getClientInfo.js";
import { getClientInfo } from "../utils/getClientInfo.js";

import {
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.controllers.js";

const adminRouter = express.Router();

adminRouter.post("/", createUser);
adminRouter.put("/:id", updateUser);
adminRouter.delete("/:id", deleteUser);

adminRouter.get("/", async (req, res) => {
  try {
    console.log("fetching ..........");
    const users = await Admin.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Developer-only route to create an Admin
adminRouter.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = new Admin({ username, email, password });
    await admin.save();

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(500).json({ message: "Error creating admin", error });
  }
});

// Admin login route
adminRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // compare password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate JWT token
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        title: admin.title,
        access: admin.access,
        accessModules: admin.accessModules,
      },
      process.env.JWT_SECRET,
      { expiresIn: "36h" }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents JS access (XSS safe)
      secure: process.env.NODE_ENV === "production", // only https in prod
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // CSRF protection
      maxAge: 60 * 60 * 1000 * 24, // 24 hour
    });

    const siteData = await createLog(req);

    console.log("siteData   : ", siteData);

    res.json({
      message: "Login successful",
      user: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        title: admin.title,
        access: admin.access,
        accessModules: admin.accessModules,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
});

adminRouter.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // same settings as when you set it
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });
  res.json({ message: "Logged out successfully" });
});

// Check if admin is logged in
adminRouter.get("/check-auth/:userVisited", authAdmin, (req, res) => {
  const { userAgent, ip } = getClientInfo(req);

  res.json({ isAdmin: true, user: req.user, deviceInfo: { userAgent, ip } });
});

export default adminRouter;
