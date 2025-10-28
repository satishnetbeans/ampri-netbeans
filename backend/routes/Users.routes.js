// routes/AllUsers.js

// @ts-nocheck

import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Users.model.js";

import speakeasy from "speakeasy";
import QRCode from "qrcode";

import { authAdmin } from "../middlewares/jwtAuth.js";
import { generateAndSetCookieToken } from "../utils/genrateAndSetCookieToken.js";

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

// disable 2FA
adminRouter.post("/disable-2fa", async (req, res) => {
  console.log("disable 2FA bodyyyyyyy :", req.body);
  const { email } = req.body;

  const user = await Admin.findOneAndUpdate(
    { email },
    { $unset: { twoFASecret: "" }, $set: { is2FAEnabled: false } },
    { new: true } // ✅ returns updated user
  );

  const token = generateAndSetCookieToken(res, user);
  res.json({
    message: "2FA disabled successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      title: user.title,
      access: user.access,
      accessModules: user.accessModules,
      is2FAEnabled: user.is2FAEnabled,
    },
  });
});

// create secrete for 2FA of Google Authenticator
adminRouter.post("/setup-2fa", async (req, res) => {
  const { email } = req.body;
  console.log("bodyyyyyyy :", req.body);
  const secret = speakeasy.generateSecret({ name: "MyApp (" + email + ")" });

  // Save secret.base32 in user's DB
  await Admin.updateOne({ email }, { $set: { twoFASecret: secret.base32 } });

  // Generate QR code for Google Authenticator
  QRCode.toDataURL(secret.otpauth_url, (err, data_url) => {
    res.json({ qrCode: data_url });
  });
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

    const token = generateAndSetCookieToken(res, admin);

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
        is2FAEnabled: admin.is2FAEnabled,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
});
// verify 2FA Using Google Authenticator
adminRouter.post("/verify-2fa", async (req, res) => {
  const { email, token } = req.body;

  console.log("verifyyyyyyyyyy  : ", req.body);
 
  const user = await Admin.findOne({ email });

  const verified = speakeasy.totp.verify({
    secret: user.twoFASecret,
    encoding: "base32",
    token,
    window: 1, // allows ±30s window
  });

  console.log("verifyyyyyyyyyy  : ", verified);

  if (verified) {
    const admin = await Admin.findOneAndUpdate(
      { email },
      { $set: { is2FAEnabled: true } },
      { new: true } // ✅ returns updated user
    );

    const token = generateAndSetCookieToken(res, admin);
    res.json({
      message: "2FA verified, login success",
      success: verified,
      user: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        title: admin.title,
        access: admin.access,
        accessModules: admin.accessModules,
        is2FAEnabled: admin.is2FAEnabled,
      },
    });
  } else {
    res.status(400).json({ message: "Invalid 2FA code" });
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
