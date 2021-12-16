import React, {useEffect} from 'react'
import { toast } from 'react-toastify';
import { PrivateRoute } from '../../../components/PrivateRoute.jsx';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS_ES } from "../../../graphql/usuarios/queries.jsx";
import { ACEPTAR_USUARIO } from "../../../graphql/usuarios/mutations.jsx";
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from '../../../utils/enums.js';
import { useMutation } from "@apollo/client";
import { ButtonLoading } from "../../../components/botonRe.jsx";


const UsuariosEst = () => {
    const {data, error, loading} = useQuery(GET_USUARIOS_ES);
    

    useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
        }, [error]);
    
    if (loading) return <div>Cargando....</div>;
    
    return( 
        <PrivateRoute roleList={["LIDER"]}>
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
                <th>Autorizacion</th>
              </tr>
            </thead>
            <tbody>
              {data && data.listaEstudiante ? (
                <>
                  {data.listaEstudiante.map((u) => {
                    return (
                      <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.correo}</td>
                        <td>{u.identificacion}</td>
                        <td>{Enum_Rol[u.rol]}</td>
                        <td>{Enum_EstadoUsuario[u.estado]}</td>
                        <td>
                          <AceptarEst idEst={u._id}/>
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

  export {UsuariosEst};


const AceptarEst = (({ idEst }) =>{
  console.log("estId", idEst)
  const [aceptarUser, {data: dataMutation, error: errorMutation, loading: loadingMutation}] = 
    useMutation(ACEPTAR_USUARIO);

  useEffect(() => {
    if (dataMutation) {
      toast.success('Usuario autorizado');
    }
  }, [dataMutation]);  

  useEffect(() => {
    if (errorMutation) {
      toast.error('Error autorizando al estudiante');
    }
  }, [errorMutation]);

  const aceptar = () =>{
    aceptarUser({variables: {id: idEst} });
  }

  return (
    <ButtonLoading 
    onClick={() => aceptar()}
    disabled={false}
    loading={loadingMutation}
    text='Autorizar'
    clase='botAuth'

    />
  )
});
