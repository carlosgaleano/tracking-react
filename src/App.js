import React from "react";
//import Datatable from "./components/DataTable";

//import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from './pages/LoginPage';
import { Blog } from "./routes/Blog";
import { ExportExcel } from "./routes/ExporExcel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Login from "./components/login/login";
import'./styles.css'
 function App() {
  return ( 
    <BrowserRouter>
    <Navbar />
        <Routes>
       
            <Route path="/" element={<LoginPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="excel" element={<ExportExcel />} />
         
        </Routes>
    </BrowserRouter>
   
  
 
    
  );
}

export default App;
