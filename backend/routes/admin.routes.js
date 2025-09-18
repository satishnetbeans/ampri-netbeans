// routes/adminRoutes.js

// @ts-nocheck

import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";

import { authAdmin } from "../middlewares/jwtAuth.js";

const adminRouter = express.Router();

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
adminRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", req.body);
 
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
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents JS access (XSS safe)
      secure: process.env.NODE_ENV === "production", // only https in prod
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 1000 * 24, // 24 hour
    });

    res.json({
      message: "Login successful",
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
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
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ message: "Logged out successfully" });
});

// Check if admin is logged in
adminRouter.get("/check-auth", authAdmin, (req, res) => {
  res.json({ isAdmin: true, admin: req.user });
});

export default adminRouter;
