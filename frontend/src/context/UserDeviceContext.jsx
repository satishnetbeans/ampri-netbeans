
import { createContext, useContext, useState } from "react";

// 1. Create Context
const UserDeviceContext = createContext(null);

// 2. Provider Component
export const UserDeviceProvider = ({ children }) => {
  const [userDevice, setUserDevice] = useState(null);

  // function to update device info
  const updateUserDevice = (device) => setUserDevice(device);

  return (
    <UserDeviceContext.Provider value={{ userDevice, updateUserDevice }}>
      {children}
    </UserDeviceContext.Provider>
  );
};

// 3. Custom hook for easier consumption
export const useUserDevice = () => useContext(UserDeviceContext);
