import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './rutes/App';
import './styles/index.css';
import './styles/buttons.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/centers.css';
import './styles/class.css';
import './styles/footer.css';
import './styles/loader.css';
import './styles/navbar.css';
import ErrorPage from './rutes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
