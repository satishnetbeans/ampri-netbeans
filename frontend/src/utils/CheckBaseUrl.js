// @ts-nocheck

export default function checkBaseURL() {
  const BaseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:4001"
      : import.meta.env.VITE_BASE_URL;
  return BaseURL;
}
