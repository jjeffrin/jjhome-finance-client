import { Root } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { SalaryPage } from "./pages/salary";
import App from "./App";
import { DashboardPage } from "./pages/dashboard";
import { NotFoundPage } from "./pages/notFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage />
    },
    {
        path: '/salary',
        element: <SalaryPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])