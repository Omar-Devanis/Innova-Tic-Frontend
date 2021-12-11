import React from 'react'
import { useAuth } from '../context/authContext.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <input className='inputnav' type="text" placeholder='buscar' />
            <Logout/>
        </nav>
    )
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/login' >
          <div className='' >
            <button className='boton'>Cerrar sesión</button>
          </div>
        </NavLink>
      </li>
    );
  };

export {Navbar};
