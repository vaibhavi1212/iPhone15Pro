import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import Sentry and the necessary integrations
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Initialize Sentry
Sentry.init({
  dsn: "https://bf99fb3aa80ffb34ba044afb7482f03a@o4507955175424000.ingest.us.sentry.io/4507955178045440",
  integrations: [
    Sentry.browserTracingIntegration({
      // Automatically captures route changes with React Router v6
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
  ],

  // Performance monitoring
  tracesSampleRate: 1.0, // Adjust this value based on your needs
});

// Render the React application
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
