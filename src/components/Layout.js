import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from './Navbar';
import Table from './Table';
export default function Layout() {
    return (
        <>
        
        
        <div className="container-fluid">
            <div className="row">
            <Navbar/>
            </div>
            <div className="row">
                {/* <div className="col-2"></div> */}
                <div className="col">
                <Outlet />

                </div>
            </div>

        </div>
            
          
        </>
      )
}
