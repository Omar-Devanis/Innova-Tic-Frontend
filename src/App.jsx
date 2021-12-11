import './styles/style.css';
import { useState } from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { Login } from "./pages/auth/login.jsx";
import { Register } from "./pages/auth/register.jsx";
import { IndexPrinciPal } from "./pages/index.jsx";
import { Layout } from "./layouts/layout.jsx";
import { IndexUsuarios } from "./pages/usuarios/index.jsx";
import { setContext } from '@apollo/client/link/context';
import { AuthContext } from './context/authContext.js'
import { IndexPerfil } from "./pages/perfil/index"
import { UserContext } from './context/userContext.js'
import { useEffect } from 'react/cjs/react.development';
import jwt_decode from "jwt-decode";

// import PrivateRoute from 'components/PrivateRoute';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(true);

  const setToken = (token) => {
    setAuthToken(token);
    console.log('dt token', token); 
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    }else {
      localStorage.removeItem('token');
    }
    setLoadingAuth(false);
  };

  useEffect(() =>{ 
    if(authToken){
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken])

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken, loadingAuth }}>
        <UserContext.Provider value={{userData, setUserData}}>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<IndexPrinciPal />} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='admin' element={<Layout />} >
                <Route path='usuarios' element={<IndexUsuarios />} />
                <Route path='perfil' element={<IndexPerfil />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
