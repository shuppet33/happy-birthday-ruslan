import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactUI from "./ReactUI.jsx";
import "./index.css";

const ui = document.getElementById("ui");


createRoot(document.getElementById("ui")).render(
    <StrictMode>
        <ReactUI />
    </StrictMode>
);