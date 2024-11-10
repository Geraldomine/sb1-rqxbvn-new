import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './api/axios'; // Initialize axios interceptors

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);