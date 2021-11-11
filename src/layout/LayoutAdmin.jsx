import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBarAdmin from '../components/NavBarAdmin';

const LayoutAdmin = () => {
    return (
        <div>
            <NavBarAdmin/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutAdmin
