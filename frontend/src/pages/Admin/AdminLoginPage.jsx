// @ts-nocheck
// src/pages/LoginPage.jsx
import React, { useState, useRef } from "react";
import { api } from "../../api/axios"; // adjust path if needed
import { useNavigate } from "react-router-dom";

import { useUserData } from "../../context/UserDataContext";
import StructureRoleRoute from "../../utils/StructureRoleRoute";

import { VerifyTwoFA } from "../../api/axios";

import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const AdminLogin = ({ setIsAdmin }) => {
  const { updateUserData, UserData } = useUserData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [is2FAEnabled, setIs2FAEnabled] = useState(UserData?.is2FAEnabled);
  const [otp, setOtp] = useState("");

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
        console.log("Login response user data:", res.data.user);
        setIsAdmin(true);
        if (res.data.user.is2FAEnabled) {
          setIs2FAEnabled(true);
        } else {
          const role = StructureRoleRoute(res.data.user);
          navigate(`/${role}`);
        }

      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
      recaptchaRef.current.reset(); // reset for next attempt
    }
  };

  const handleVerify2FA = async () => {
    try {
      console.log("Verifying OTP:", otp);
      const res = await VerifyTwoFA({
        email: UserData.email,
        token: otp
      });
      console.log("2FA response:", res);
      if (res.data) {
        updateUserData(res.data.user);
        setOtp("");
        const role = StructureRoleRoute(res.data.user);
        navigate(`/${role}`);

      } else {
        alert(res.error.message)
      }

    } catch (err) {
      alert("Couldn't verify, try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 relative">
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

        {
          is2FAEnabled && <div className="bg-white w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg gap-4">
            <p className="text-gray-700 font-semibold text-xl mb-3">
              Enter 2FA Code from your app
            </p>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg px-3 py-2 w-48 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              onClick={handleVerify2FA}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-fit"
            >
              Verify Code
            </button>
          </div>
        }

      </div>
    </div>
  );
};

export default AdminLogin;
