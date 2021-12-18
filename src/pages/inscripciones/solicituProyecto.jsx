import { useQuery, useMutation } from '@apollo/client';
import React from 'react'
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import { GET_INSCRI_PROYECTO } from '../../graphql/inscripciones/queries.jsx'
import { ABROBAR_INSCRIP } from '../../graphql/inscripciones/mutation.jsx'
import { useEffect } from 'react/cjs/react.development'
import { ButtonLoading } from "../../components/botonRe.jsx";
import { PrivateRoute } from '../../components/PrivateRoute.jsx';
import { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoInscripcion } from '../../utils/enums.js';

const SolicituProyecto = () => {
    const { _id } = useParams();
    const proyecto = _id

    const {data, error, loading} = useQuery(GET_INSCRI_PROYECTO,{variables:{proyecto}})

    useEffect(()=>{
        console.log("data inscrip", data)
    },[data])

    useEffect(()=>{
        if(error){
            toast.error("Error mostrando las inscripciones")
        }
    })

    if (loading) return <div>Cargando...</div>
    return( 
        <PrivateRoute roleList={["LIDER"]}>
        <div>
          Solicitudes:
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado estudiante</th>
                <th>inscripcion</th>
                <th>Autorizacion</th>
              </tr>
            </thead>
            <tbody>
              {data && data.inscripcionProyecto ? (
                <>
                  {data.inscripcionProyecto.map((i) => {
                      console.log('data servidor i', data)
                    if (i.estado === "PENDIENTE"){
                    return (
                      <tr key={i._id}>
                        <td>{i.estudiante.nombre}</td>
                        <td>{i.estudiante.apellido}</td>
                        <td>{i.estudiante.correo}</td>
                        <td>{Enum_Rol[i.estudiante.rol]}</td>
                        <td>{Enum_EstadoUsuario[i.estudiante.estado]}</td>
                        <td>{Enum_EstadoInscripcion[i.estado]}</td>
                        <td>
                            <AceptORecInscrip idInscrip={i._id} estado="ACEPTADO" nombre="Aceptar" messg="rechazado" />
                            <AceptORecInscrip idInscrip={i._id} estado="RECHAZADO" nombre="Rechazar" messg="aceptado" />
                        </td>
                      </tr>
                    )};
                  })}
                </>
              ) : (
                <div>No se encontraron inscripciones</div>
              )}
            </tbody>
          </table>
        </div>
        </PrivateRoute>
    );
  };

export {SolicituProyecto};


const AceptORecInscrip = (({ idInscrip, estado, nombre, messg }) =>{
    const [aceptarUser, {data: dataMutation, error: errorMutation, loading: loadingMutation}] = 
      useMutation(ABROBAR_INSCRIP);
  
    useEffect(() => {
      if (dataMutation) {
        toast.success('Usuario ', messg);
      }
    }, [dataMutation]);  
  
    useEffect(() => {
      if (errorMutation) {
        toast.error('Error autorizando inscripcion');
      }
    }, [errorMutation]);
  
    const aceptar = () =>{
      aceptarUser({variables: {aprobarInscripcionId: idInscrip, estado: estado} });
    }
  
    return (
      <ButtonLoading 
      onClick={() => aceptar()}
      disabled={false}
      loading={loadingMutation}
      text={nombre}
      clase='botAuth'
  
      />
    )
  });