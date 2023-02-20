import React from "react";
//import Datatable from "./components/DataTable";

//import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";

import LoginPage from './pages/LoginPage'
//import Login from "./components/login/login";
import'./styles.css'
 function App() {
  return (
    <>
    <div>
            <Navbar />
              <div className="container">
                <h1>App</h1>
                <LoginPage />
            
            </div>
            
            
        </div>
    
    </>
    
  );
}

export default App;
