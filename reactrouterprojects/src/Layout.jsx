import React from "react";
import Header from "./components/head/header";
import Footer from "./components/foot/footer";
import {Outlet} from 'react-router-dom';

function Layout(){

//the outlet feature of react help us to update the details 
//the dynamic features will be kept inside outlet

    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;