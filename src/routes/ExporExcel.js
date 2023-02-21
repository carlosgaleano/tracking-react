import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar';
//import Test from '../components/Excel/ExampleExport'
import {JsonToExcel} from '../components/Excel/ExportJosn';

export const ExportExcel =()=>{


    return(
    <>
    
    <h1>Exportar Datos a Excel </h1>
      <JsonToExcel />  
    </>

    
    )

}