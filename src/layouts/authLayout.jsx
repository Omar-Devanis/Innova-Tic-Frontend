import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className=' div1'>
      <div className='div2'>
        <div >
            <Link to='/'>
                <i class=" icon fas fa-home"></i>
            </Link>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export {AuthLayout};