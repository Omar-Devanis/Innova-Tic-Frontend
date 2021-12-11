import { useUser } from '../context/userContext.js';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <></>;
};

export {PrivateComponent};