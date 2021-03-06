import './styles/style.css';
import { useState } from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { Login } from "./pages/auth/login.jsx";
import { Register } from "./pages/auth/register.jsx";
import { IndexPrinciPal } from "./pages/index.jsx";
import { Layout } from "./layouts/layout.jsx";
import { AuthLayout } from "./layouts/authLayout.jsx";
import { IndexUsuarios } from "./pages/usuarios/admin/usuarios.jsx";
import {EditarUsuario} from "./pages/usuarios/admin/editarUsuario"
import { AdminProyectos } from "./pages/proyectos/admin/proyectos.jsx"
import { setContext } from '@apollo/client/link/context';
import { AuthContext } from './context/authContext.js'
import { IndexPerfil } from "./pages/perfil/index"
import { UserContext } from './context/userContext.js'
import { useEffect } from 'react/cjs/react.development';
import jwt_decode from "jwt-decode";
import { MisProyectos } from "./pages/proyectos/lider/misProyectos.jsx"
import { CrearProyecto } from "./pages/proyectos/lider/crearProyecto.jsx"
import { EditProyectoLider } from "./pages/proyectos/lider/editProyecto.jsx"
import { UsuariosEst } from "./pages/usuarios/lider/usuariosEst.jsx"
import { ProyectosUser } from "./pages/proyectos/estudiante/proyectosUser.jsx"
import { ProyectosInscrit } from "./pages/proyectos/estudiante/proyectosInscrit.jsx"
import EditarProyecto from './pages/proyectos/admin/editarProyecto';
import SolicitudInscripcionProyecto from './pages/proyectos/estudiante/inscribirProyecto'
import { MasInformacion} from './pages/proyectos/estudiante/avance';
import { EditarAvance } from './pages/proyectos/estudiante/editarAvance';
import { InscriProyecto } from "./pages/inscripciones/inscriProyecto.jsx"
import { SolicituProyecto } from "./pages/inscripciones/solicituProyecto.jsx"
import { MiProyectoInfo } from "./pages/proyectos/lider/miProyectoInfo.jsx"
import { AvancesProyecto } from "./pages/proyectos/lider/avancesProyecto.jsx"
import { CrearObjetivos } from "./pages/proyectos/lider/crearObjetivos.jsx"
import { CrearObservacion } from "./pages/proyectos/lider/crearObservacion"
import { CrearAvance } from './pages/proyectos/estudiante/crearAvance';

// import PrivateRoute from 'components/PrivateRoute';

const httpLink = createHttpLink({
  uri: 'https://servidor-gql-innovatic.herokuapp.com/graphql',
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
              <Route path='auth' element={<AuthLayout />} >
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
              </Route>
              <Route path='' element={<Layout />} >
                <Route path='perfil' element={<IndexPerfil />} />
                <Route path='admin/usuarios' element={<IndexUsuarios />} />
                <Route path='admin/usuarios/editar/:_id' element={<EditarUsuario />} />
                <Route path='admin/proyectos' element={<AdminProyectos />} />
                <Route path='admin/proyectos/editar/:_id' element={<EditarProyecto />} />
                <Route path='lider/misProyectos' element={<MisProyectos />} />
                <Route path='lider/crearProyecto' element={<CrearProyecto />} />
                <Route path='lider/editarProyecto' element={<EditProyectoLider />} />
                <Route path='lider/estudiantes' element={<UsuariosEst />} />
                <Route path='lider/crearProyecto/objetivos/:_id' element={<CrearObjetivos />} />
                <Route path='lider/misProyectos/inscripciones/:_id' element={<InscriProyecto/>} />
                <Route path='lider/misProyectos/solicitudes/:_id' element={<SolicituProyecto/>} />
                <Route path='lider/misProyectos/actualizar/:_id' element={<EditProyectoLider />} />
                <Route path='lider/misProyectos/info/:_id' element={<MiProyectoInfo />} />
                <Route path='lider/misProyectos/info/avances/:_id' element={<AvancesProyecto />} />
                <Route path='lider/misProyectos/info/avances/:_id/observacion/:_id' element={<CrearObservacion />} />
                <Route path='user/todosLosProyectos' element={<ProyectosUser />} />
                <Route path='user/todosLosProyectos/solicitudP/:_id' element={<SolicitudInscripcionProyecto />} />
                <Route path='user/proyectosInscrit' element={<ProyectosInscrit />} />
                <Route path='user/ProyectosInscrit/masInformacion/:_id' element={<MasInformacion />} />
                <Route path='user/ProyectosInscrit/masInformacion/:_id/editarAvance/:_id' element={<EditarAvance/>} />
                <Route path='user/ProyectosInscrit/masInformacion/:_id/crearAvance' element={<CrearAvance/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
