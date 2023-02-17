import React,{component} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Inicio } from "./components/Inicio";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NoEncontrada from "./components/NoEncontrada";
import { Blog } from "./routes/Blog";
import { ExportExcel } from "./routes/ExporExcel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.Suspense>
<BrowserRouter>
        <Routes>
       
            <Route path="/" element={<App />} />
            <Route path="blog" element={<Blog />} />
            <Route path="excel" element={<ExportExcel />} />
         
        </Routes>
    </BrowserRouter>

  // </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
