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

const InscriProyecto = () => {
    const { _id } = useParams();
    const proyecto = _id
    console.log("id params", _id)

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
          Datos inscripciones:
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>inscripcion</th>
              </tr>
            </thead>
            <tbody>
              {data && data.inscripcionProyecto ? (
                <>
                  {data.inscripcionProyecto.map((i) => {
                      console.log('data servidor i', data)
                    if (i.estado === "ACEPTADO"){
                    return (
                      <tr key={i._id}>
                        <td>{i.estudiante.nombre}</td>
                        <td>{i.estudiante.apellido}</td>
                        <td>{i.estudiante.correo}</td>
                        <td>{Enum_Rol[i.estudiante.rol]}</td>
                        <td>{Enum_EstadoInscripcion[i.estado]}</td>
                      </tr>
                    )};
                  })}
                </>
              ) : (
                <div>No se encontraron inscritos</div>
              )}
            </tbody>
          </table>
        </div>
        </PrivateRoute>
    );
  };

export {InscriProyecto};
