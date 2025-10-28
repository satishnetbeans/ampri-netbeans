// @ts-nocheck
import Admin from "../models/Users.model.js";


// ==================== CREATE user ====================
export const createUser = async (req, res) => {
  try {
    const { username, email, title, role, access, password, accessModules } =
      req.body;

    console.log(" req.body : ", req.body);

    // Validation
    if (!username || !email || !title || !role || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (role === "Member" && (!accessModules || accessModules.length < 1))
      return res.status(400).json({ message: "Give access routes" });

    // Check if email already exists
    const existing = await Admin.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already in use" });

    const newAdmin = new Admin({
      username,
      email,
      title,
      role,
      access: access || "Restricted",
      password,
      accessModules: Array.isArray(accessModules) ? accessModules : [],
    });

    await newAdmin.save();
    res
      .status(201)
      .json({ message: "User created successfully", admin: newAdmin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Update  User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      email,
      title,
      role,
      access,
      oldPassword,
      password,
      accessModules,
    } = req.body;

    console.log("id , req.body : ", id, req.body);

    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: "User not found" });

    // 🔒 Super Admin cannot have role/access changed
    const isSuperAdmin = admin.role === "Super Admin";
    if (!isSuperAdmin) {
      if (role) admin.role = role;
      if (access) admin.access = access;
    }

    // Verify old password if user is editing their profile
    if (oldPassword) {
      const isMatch = await admin.comparePassword(oldPassword);
      if (!isMatch)
        return res.status(401).json({ message: "Incorrect old password" });
    }

    // Update basic fields
    if (username) admin.username = username;
    if (email) {
      // Check if email is taken by another user
      const existing = await Admin.findOne({ email });
      if (existing && existing._id.toString() !== id)
        return res.status(400).json({ message: "Email already in use" });
      admin.email = email;
    }
    if (title) admin.title = title;

    // Update accessModules (for Members / Restricted users)
    if (
      Array.isArray(accessModules) &&
      (admin.role === "Member" || admin.access === "Restricted")
    ) {
      admin.accessModules = accessModules;
    }

    // Update password if provided
    if (password) {
      if (!oldPassword)
        return res
          .status(400)
          .json({ message: "Old password is required to update password" });
      await admin.updatePassword(password);
    } else {
      await admin.save();
    }

    res.status(200).json({ message: "User updated successfully", admin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// ==================== DELETE User ====================
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: "User not found" });

    // Prevent deletion of Super Admin
    if (admin.role === "Super Admin")
      return res.status(403).json({ message: "Cannot delete Super Admin" });

    await Admin.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
