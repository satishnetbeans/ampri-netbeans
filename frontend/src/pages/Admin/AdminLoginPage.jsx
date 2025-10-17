// @ts-nocheck
// src/pages/LoginPage.jsx
import React, { useState , useRef} from "react";
import { api } from "../../api/axios"; // adjust path if needed
import { useNavigate } from "react-router-dom";

import { useUserData } from "../../context/UserDataContext";
import StructureRoleRoute from "../../utils/StructureRoleRoute";

import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY; 

const AdminLogin = ({ setIsAdmin }) => {
  const { updateUserData, UserData } = useUserData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const recaptchaRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const token = recaptchaRef.current.getValue(); // get recaptcha token
    console.log("captcha token ............. : ", token)
    if (!token) {
      setError("Please verify you are human!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/admin/login", { email, password, recaptchaToken: token });

      if (res.data) {
        updateUserData(res.data.user);
        setIsAdmin(true);
        const role = StructureRoleRoute(res.data.user);
        navigate(`/${role}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
      recaptchaRef.current.reset(); // reset for next attempt
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* reCAPTCHA */}
          <ReCAPTCHA sitekey={SITE_KEY} ref={recaptchaRef} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
