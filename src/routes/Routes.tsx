import { createBrowserRouter, Navigate } from "react-router-dom";
import OshiPage from "../pages/Oshi/OshiPage";
import MobileLayout from "../Layouts/MobileLayout";
import OshiDetailPage from "../pages/Oshi/OshiDetailPage";
import HomePage from "../pages/Home/HomePage";
import TimelinePage from "../pages/Timeline/TimelinePage";
import LoginPage from "../pages/Auth/LoginPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MobileLayout />,
    children: [
      { path: "", element: <Navigate to={"home"} /> },
      {
        path: "auth",
        children: [
          { path: "", element: <Navigate to={"login"} /> },
          { path: "login", element: <LoginPage /> },
        ],
      },
      { path: "home", element: <HomePage /> },
      { path: "timeline", element: <TimelinePage /> },
      {
        path: "oshi",
        children: [
          {
            path: "",
            element: <OshiPage />,
          },
          { path: ":id", element: <OshiDetailPage /> },
        ],
      },
    ],
  },
]);
