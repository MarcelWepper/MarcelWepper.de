// src/analytics.js
import ReactGA from "react-ga4";

// Initialize GA4 with your Measurement ID
export const initializeGA = () => {
  ReactGA.initialize("G-N2TYNCLNVL"); // Replace with your Measurement ID
};

// Track Page Views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};