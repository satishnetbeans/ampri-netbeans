// @ts-nocheck
import { useState } from "react";
import { LayoutDashboard, User, Menu } from "lucide-react";

const Sidebar = ({ active, setActive, UserData, SiteData }) => {
  const [isOpen, setIsOpen] = useState(true);

  let menuItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { id: "Users", label: "Users", icon: <User size={18} /> }
  ];
  if (UserData) {
    if (UserData.role === "Member" || UserData.role === "Editor") {
      menuItems = [
        { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> }
      ];
    }
  }
  else {
    menuItems = [
      { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
      { id: "Users", label: "Users", icon: <User size={18} /> }
    ];
  }

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-20"
        } bg-gray-900 text-gray-200 flex flex-col transition-all duration-300 min-h-screen`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <h1 className={`${!isOpen && "hidden"} text-lg font-semibold`}>{UserData && UserData.role}</h1>
        <button
          className="p-1 hover:bg-gray-800 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={18} />
        </button>
      </div>

      <nav className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition ${active === item.id
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
