import React,{Component} from 'react';
import DataDespachos from "../components/DataTable3";
import Navbar from '../components/NavBar/Navbar';

export const Blog=()=>{


    return(
        <>
         <Navbar />
        <div>Blog</div>

        <DataDespachos />
        </>
    )

}