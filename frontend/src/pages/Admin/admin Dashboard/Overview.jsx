// @ts-nocheck
import Card from "../../../components/Admin Dashboard/Card";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { ArrowBigRight } from "lucide-react";

import { SetUpTwoFA, VerifyTwoFA, DisableTwoFA } from "../../../api/axios";

const Overview = ({ UserData, updateUserData, SiteData }) => {
    const navigate = useNavigate()


    const [is2FAEnabled, setIs2FAEnabled] = useState(UserData?.is2FAEnabled);
    const [qrCode, setQrCode] = useState(null);
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    console.log("UserData in Overview:", UserData);
    console.log("is2FAEnabled in Overview:", is2FAEnabled);

    const stats = [
        { label: "Total Users", value: SiteData?.totalUsers ?? "-" },
        {
            label: "Last Modified",
            value: SiteData?.lastModified
        }
    ];

    const handleEnable2FA = async () => {
        try {
            setMessage("Generating QR code...");
            const res = await SetUpTwoFA({ email: UserData.email });
            console.log("2FA response:", res);
            if (res.data) {

                setQrCode(res.data.qrCode);
                setMessage("Scan the QR with Google Authenticator and enter the code below.");
            }
        } catch (err) {
            setMessage("Error setting up 2FA.");
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
                setMessage(res.data.message);
                setQrCode(null);
                setOtp("");
                setIs2FAEnabled(true);
                alert("2FA enabled successfully.");
            } else{
                alert(res.error.message);
            }

        } catch (err) {
            setMessage(err.response?.data?.message || "Invalid code, try again.");
        }
    };

    const handleDisable2FA = async () => {
        try {
            const res = await DisableTwoFA({ email: UserData.email });
            console.log("2FA response:", res);
            if (res.data) {
                setIs2FAEnabled(false);
                updateUserData(res.data.user);
                setMessage("2FA disabled successfully.");

            }

        } catch (err) {
            setMessage("Failed to disable 2FA.");
        }
    };


    return (
        <div className="p-6 space-y-8">
            {/* ===== Top Stats ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((s, i) => (
                    <Card key={i} className="bg-white shadow-md rounded-2xl p-5 border">
                        <h3 className="text-gray-500 text-sm font-medium">{s.label}</h3>
                        <p className="text-3xl font-semibold text-gray-900 mt-2">
                            {s.value}
                        </p>
                    </Card>
                ))}

                <div onClick={() => UserData && navigate(`/${UserData.role}`)} className="cursor-pointer shadow rounded-2xl p-5 hover:shadow-lg transition flex items-center justify-center bg-slate-800 hover:bg-slate-500">
                    <div className="flex items-center gap-2 text-xl pr-3">
                        <div className="text-white font-semibold">Edit Site</div>
                        <div className="text-white text-2xl font-bold">
                            <ArrowBigRight></ArrowBigRight>
                        </div>
                    </div>
                </div>

            </div>

            {/* ===== Two-Factor Authentication Settings ===== */}
            <div className="bg-white shadow-md rounded-2xl p-6 border mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Two-Factor Authentication (2FA)
                </h2>

                {message && (
                    <p className="text-sm text-blue-600 font-medium mb-3">{message}</p>
                )}

                {is2FAEnabled ? (
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-700">
                            ✅ 2FA is currently <span className="font-semibold">Enabled</span>.
                        </p>
                        <button
                            onClick={handleDisable2FA}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-fit"
                        >
                            Disable 2FA
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {!qrCode ? (
                            <button
                                onClick={handleEnable2FA}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-fit"
                            >
                                Enable 2FA
                            </button>
                        ) : (
                            <>
                                <div>
                                    <img src={qrCode} alt="2FA QR Code" className="w-48 h-48" />
                                    <p className="text-gray-600 text-sm mt-2">
                                        Scan this QR with Google Authenticator, then enter the 6-digit code below:
                                    </p>
                                </div>

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
                            </>
                        )}
                    </div>
                )}
            </div>


            {/* ===== Login Logs ===== */}
            <div className="bg-white shadow-md rounded-2xl p-6 border">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Recent Login Logs
                    </h2>
                    <span className="text-sm text-gray-700 font-semibold">
                        Total: {SiteData?.logs?.length ?? 0}
                    </span>
                </div>

                {SiteData?.logs?.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 border-b">
                                        s.no.
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 border-b">
                                        Device Info
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 border-b">
                                        IP Address
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 border-b">
                                        Login Time
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {SiteData.logs.slice().reverse().map((log, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-50 transition duration-150 border-b"
                                    >
                                        <td className="px-4 py-2 text-sm text-gray-600">
                                            {SiteData.logs.length - i}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-800 max-w-xs truncate">
                                            {log.deviceInfo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-800">
                                            {log.ipAddress}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {log.loginTime
                                                ? new Date(log.loginTime).toLocaleString()
                                                : "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm text-center py-6">
                        No login logs found yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Overview;
