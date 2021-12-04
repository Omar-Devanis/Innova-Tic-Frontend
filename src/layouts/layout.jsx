import React, {useEffect} from 'react'
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar.jsx";
import { useAuth } from '../context/authContext.js';
import { VALIDATE_TOKEN } from '../graphql/auth/mutations.js';

const Layout = () => {
    const {authToken, setToken, loadingAuth} = useAuth();

    const [validateToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(VALIDATE_TOKEN);

        useEffect(() => {
            validateToken()
        }, [])

    return (
        <div className="layout">
            <Sidebar />
            <main className="Outlet"><Outlet /></main>
        </div>
    )
}

export {Layout};
