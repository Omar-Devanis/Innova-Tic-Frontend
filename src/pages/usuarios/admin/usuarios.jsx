import React, {useEffect,useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from "../../../graphql/usuarios/queries.jsx";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from '../../../utils/enums.js';
import { PrivateRoute } from '../../../components/PrivateRoute.jsx';
import Modal from "../../../components/Modal";


const IndexUsuarios = () => {
    const {data, error, loading} = useQuery(GET_USUARIOS);
    
    const[estadoModal,setModal] = useState(false)

    useEffect(() => {
      console.log('data servidor', data)
    }, [data])

    useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
        }, [error]);
    
    if (loading) return <div>Cargando....</div>;
    
    return( 
        <PrivateRoute roleList={["ADMINISTRADOR"]}>
        <div>
          Datos Usuarios:
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Identificación</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {data && data.Usuarios ? (
                <>
                  {data.Usuarios.map((u) => {
                    return (
                      <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.correo}</td>
                        <td>{u.identificacion}</td>
                        <td>{Enum_Rol[u.rol]}</td>
                        <td>{Enum_EstadoUsuario[u.estado]}</td>
                        <td>
                          <div>
                            <Link to={`editar/${u._id}`}>
                              <i className="fas fa-user-edit"/>
                            </Link>
                          </div>    
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <div>No autorizado</div>
              )}
            </tbody>
          </table>
        </div>
        </PrivateRoute>
    );
  };

export {IndexUsuarios};
