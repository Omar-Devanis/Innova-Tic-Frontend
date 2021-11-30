import React from 'react'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar.jsx";

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <main className="Outlet"><Outlet /></main>
        </div>
    )
}

export {Layout};
