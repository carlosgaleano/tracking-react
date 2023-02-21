import React from "react";
//import Datatable from "./components/DataTable";

//import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from './pages/LoginPage';
import {ProfilePage} from './pages/ProlifePage'
import { Blog } from "./routes/Blog";
import { ExportExcel } from "./routes/ExporExcel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Login from "./components/login/login";
import'./styles.css'
import { ProtecteRoute } from "./components/login/ProtectedRoute";
 function App() {
  return ( 
    <BrowserRouter>
    <Navbar />
        <Routes>
       
            <Route path="/" element={<LoginPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="excel" element={<ExportExcel />} />

            <Route element={<ProtecteRoute isAllowed={true} />} >
              <Route path="/profile" element={
                  <ProfilePage />
              }/>
            
            </Route>
         
         {/*    <Route path="/profile" element={
               <ProtecteRoute isAllowed={true}>
                <ProfilePage />
               </ProtecteRoute> 
            }/> */}
        </Routes>
        

       
    </BrowserRouter>
   
  
 
    
  );
}

export default App;
