// @ts-nocheck
import { useState } from "react";
import Sidebar from "../../../components/Admin Dashboard/Sidebar";
import Header from "../../../components/Admin Dashboard/Header";
import Overview from "./Overview";
import Users from "./Users";

const AdminDashboard = () => {
    const [active, setActive] = useState("overview");

    const renderContent = () => {
        switch (active) {
            case "overview":
                return <Overview />;
            case "Users":
                return <Users />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar active={active} setActive={setActive} />
            <div className="flex-1 flex flex-col overflow-y-auto">
                <Header />
                <main className="flex-1">{renderContent()}</main>
            </div>
        </div>
    );
};

export default AdminDashboard;
