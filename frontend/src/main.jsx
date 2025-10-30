// main.jsx

// @ts-nocheck

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { UserDeviceProvider } from './context/UserDeviceContext.jsx';
import { SiteDataProvider } from "./context/siteDataContext.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserDeviceProvider>
        <SiteDataProvider>
          <UserDataProvider>
            <App />
          </UserDataProvider>
        </SiteDataProvider>
      </UserDeviceProvider>
    </BrowserRouter>
  </StrictMode>
)

