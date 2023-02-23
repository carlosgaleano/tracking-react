import React from "react";
//import Datatable from "./components/DataTable";

//import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import LoginPage from './pages/LoginPage';
import {ProfilePage} from './pages/ProlifePage'
import { Blog } from "./routes/Blog";
import { ExportExcel } from "./routes/ExporExcel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import'./styles.css'
import { ProtecteRoute } from "./components/login/ProtectedRoute.tsx";
import {useAuthStore} from './store/auth.ts';

import {LogOut2} from './components/Mui/LogOut';

function App() {

  const isAuth=useAuthStore(state=>state.isAuth);
  return ( 
    <BrowserRouter>
    <Navbar />
    <LogOut2 />
        <Routes>
       
            <Route path="/" element={<LoginPage />} />
          
            <Route path="excel" element={<ExportExcel />} />

          {/*   <Route path="profile" element={
               <ProtecteRoute isAllowed={isAuth}>
               <ProfilePage />
               </ProtecteRoute> 
           }/> */}

            <Route  element={ <ProtecteRoute isAllowed={isAuth} />}  >
            <Route path="profile" element={<ProfilePage />}/>
              <Route path="blog" element={<Blog />} />
            </Route>
         
     
        </Routes>
        

       
    </BrowserRouter>
   
  
 
    
  );
}

export default App;
