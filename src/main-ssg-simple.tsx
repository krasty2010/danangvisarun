import { StrictMode } from 'react';
import { ViteSSG } from 'vite-ssg';
import App from './App';
import AppEn from './App-en';
import './index.css';

// Простая версия SSG без роутера
export const createApp = ViteSSG(
  ({ route }) => {
    return (
      <StrictMode>
        {route === '/en' ? <AppEn /> : <App />}
      </StrictMode>
    );
  },
  {
    routes: [
      { path: '/', name: 'home' },
      { path: '/en', name: 'en' },
    ],
  }
);