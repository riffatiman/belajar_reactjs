import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Task from "./Task.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Task/>
        </StrictMode>
    )
