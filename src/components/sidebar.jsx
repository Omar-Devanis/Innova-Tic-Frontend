import React from 'react'
import { useAuth } from '../context/authContext.js';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <button>Perfil</button>
            <button>Proyectos</button>
            <button>Usuarios</button>
            <Logout/>
        </nav> 

    );
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/login' className=''>
          <div className='' >
            <button>Cerrar sesión</button>
          </div>
        </NavLink>
      </li>
    );
  };

export {Sidebar};
