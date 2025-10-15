
import { createContext, useContext, useState } from "react";

// 1. Create Context
const UserDataContext = createContext(null);

// 2. Provider Component
export const UserDataProvider = ({ children }) => {
  const [UserData, setUserData] = useState(null);

  // function to update device info
  const updateUserData = (data) => setUserData(data);

  return (
    <UserDataContext.Provider value={{ UserData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// 3. Custom hook for easier consumption
export const useUserData = () => useContext(UserDataContext);