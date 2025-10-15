
import { createContext, useContext, useState } from "react";

// 1. Create Context
const SiteDataContext = createContext(null);

// 2. Provider Component
export const SiteDataProvider = ({ children }) => {
    const [SiteData, setSiteData] = useState(null);

    // function to update device info
    const updateSiteData = (data) => setSiteData(data);

    return (
        <SiteDataContext.Provider value={{ SiteData, updateSiteData }}>
            {children}
        </SiteDataContext.Provider>
    );
};

// 3. Custom hook for easier consumption
export const useSiteData = () => useContext(SiteDataContext);
