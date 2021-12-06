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
      <li>
        <NavLink to='/auth/login' className=''>
          <div className='' onClick={() => deleteToken()}>
            <button>Cerrar sesión</button>
          </div>
        </NavLink>
      </li>
    );
  };

export {Sidebar};
