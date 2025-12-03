import { ViteSSG } from 'vite-ssg';
import App from './App';
import AppEn from './App-en';
import './index.css';

// Определяем маршруты для статической генерации
const routes = [
  { path: '/', component: App },
  { path: '/en', component: AppEn },
];

// Создаем SSG приложение
export const createApp = ViteSSG(
  // Корневой компонент (будет переключаться в зависимости от маршрута)
  ({ route }) => {
    if (route === '/en') {
      return <AppEn />;
    }
    return <App />;
  },
  {
    routes: [
      { path: '/', name: 'home' },
      { path: '/en', name: 'en' },
    ],
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Здесь можно добавить дополнительную конфигурацию
    // например, глобальные плагины или состояние
  }
);