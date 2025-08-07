import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactUI from "./ReactUI.jsx";
import "./index.css";


createRoot(document.getElementById("ui")).render(
    <StrictMode>
        <ReactUI />
    </StrictMode>
);