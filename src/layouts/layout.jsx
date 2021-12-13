import React, {useEffect, useState} from 'react'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar.jsx";
import { useAuth } from '../context/authContext.js';
import { VALIDATE_TOKEN } from '../graphql/auth/mutations.js';
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    const navigate = useNavigate();
    const {authToken, setToken, loadingAuth} = useAuth();
    //const {loadingAuth, setLoadingAuth} = useState(true);

    const [validateToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(VALIDATE_TOKEN);

    useEffect(() => {
        validateToken();
    }, [validateToken])

    useEffect(() => { 
        console.log('DM', dataMutation);
        if(dataMutation){
            if(dataMutation.validateToken.token){
                setToken(dataMutation.validateToken.token);
            } else {
                setToken(null);
                navigate('/auth/login');
            }
            //setLoadingAuth(false);
        }
    }, [dataMutation, setToken, navigate]);

    useEffect(() => {
       console.log('toke actual:', authToken);
        console.log('LD:', loadingMutation);
    }, [authToken]);

    if (loadingMutation || loadingAuth) return <div>Loading...</div>

    //if(!authToken){
    //    navigate('/login');
    //}


    return (
        <div className="layout">
            <Sidebar />                 
            <main className="Outlet">
                <Navbar />
                <div className='main'>
                <Outlet />
                </div>
            </main>
            <ToastContainer />    
        </div>
    )
}

export {Layout};
