import React from 'react'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar.jsx";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export {Layout};
