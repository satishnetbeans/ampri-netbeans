// @ts-nocheck
import { useState } from "react";
import Sidebar from "../../../components/Admin Dashboard/Sidebar";
import Header from "../../../components/Admin Dashboard/Header";
import Overview from "./Overview";
import Users from "./Users";

import { useSiteData } from "../../../context/siteDataContext";
import { useUserData } from "../../../context/UserDataContext";
const AdminDashboard = () => {
    const [active, setActive] = useState("overview");

     const { SiteData } = useSiteData();
    const { UserData , updateUserData} = useUserData();

    const renderContent = () => {
        switch (active) {
            case "overview":
                return <Overview UserData={UserData} updateUserData={updateUserData} SiteData={SiteData} />;
            case "Users":
                return <Users UserData={UserData} updateUserData={updateUserData} SiteData={SiteData}/>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar active={active} setActive={setActive} UserData={UserData} SiteData={SiteData} />
            <div className="flex-1 flex flex-col overflow-y-auto">
                <Header UserData={UserData} />
                <main className="flex-1">{renderContent()}</main>
            </div>
        </div>
    );
};

export default AdminDashboard;
