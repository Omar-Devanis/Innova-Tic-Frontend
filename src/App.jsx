
import './App.css';
import Index from './pages/Index.jsx';
import Contacto from './pages/Contacto.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexAdmin from './pages/admin/Index.jsx';
import Usuarios from './pages/admin/Usuarios.jsx';
import LayoutAdmin from './layout/LayoutAdmin.jsx';
import Layout from './layout/Layout.jsx';
import UsuarioGenerico from './pages/usuarios/UsuarioGenerico.jsx';
import { UserContext } from './context/user';

function App() {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider value = {{userData,setUserData}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Index/>}/>
          <Route path='contacto' element={<Contacto/>}/>
        </Route>
        <Route path='usuarios' element={<Layout/>}>
          <Route path='' element={<Index/>}/>
          <Route path=':nombreusuario' element={<UsuarioGenerico/>}/>
        </Route>         
        <Route path = 'admin' element= {<LayoutAdmin/>}>
        <Route path='' element={<IndexAdmin/>}/>
        <Route path=' usuarios' element={<Usuarios/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
    </UserContext>

  );
}

export default App;
