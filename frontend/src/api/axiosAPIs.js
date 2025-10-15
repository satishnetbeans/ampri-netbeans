// @ts-nocheck

import api from "./axios";

export const checkAdmin = async (userVisited) => {
  try {
    const res = await api.get(`/admin/check-auth/${userVisited}`);
    if (res.data) {
      return res.data;
    }
  } catch {
    return false;
  }
};

export const handleLogout = async () => {
  try {
    const res = await api.post("/admin/logout");

    if (res.status === 200 && res.data?.message) {
      console.log(res.data.message); // "Logged out successfully"
      return { success: true, message: res.data.message };
    } else {
      return { success: false, message: "Unexpected response from server" };
    }
  } catch (err) {
    console.error("Logout failed:", err);
    return {
      success: false,
      message: err.response?.data?.message || "Logout failed",
    };
  }
};
