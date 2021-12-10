import { useUser } from '../context/userContext.js';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <div >No estás autorizado para ver este sitio.</div>;
};

export {PrivateRoute};