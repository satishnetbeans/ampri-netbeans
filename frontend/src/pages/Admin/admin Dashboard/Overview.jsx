// @ts-nocheck
import Card from "../../../components/Admin Dashboard/Card";
import { useSiteData } from "../../../context/siteDataContext";
import { useUserData } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

import { ArrowBigRight } from "lucide-react";

const Overview = () => {
    const navigate = useNavigate()
    const { SiteData } = useSiteData();
    const { UserData } = useUserData();

    const stats = [
        { label: "Total Users", value: SiteData?.totalUsers ?? "-" },
        {
            label: "Last Modified",
            value: SiteData?.lastModified
        }
    ];

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
                <div onClick={() => navigate("/admin")} className="cursor-pointer shadow rounded-2xl p-5 hover:shadow-lg transition flex items-center justify-center bg-slate-800 hover:bg-slate-500">
                    <div className="flex items-center gap-2 text-xl pr-3">
                        <div className="text-white font-semibold">Edit Site</div>
                        <div className="text-white text-2xl font-bold">
                            <ArrowBigRight></ArrowBigRight>
                        </div>
                    </div>
                </div>

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

