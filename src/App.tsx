import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "./styles/styles.scss";
import "swiper/css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
