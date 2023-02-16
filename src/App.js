import React from "react";
//import Datatable from "./components/DataTable";

import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import'./styles.css'
 function App() {
  return (
    <>
    <div>
            <Navbar />
              <div className="container">
                <h1>App</h1>
            </div>
            
            
        </div>
    
    </>
    
  );
}

export default App;
