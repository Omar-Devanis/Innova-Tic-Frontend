import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import { toast } from 'react-toastify';
import { useQuery} from '@apollo/client';
import { GET_AVANCE_PROY } from "../../../graphql/avances/queries";
import { Input } from "../../../components/input.jsx"
import { useMutation } from "@apollo/client";
import { EDITAR_OBSERVACIONES } from "../../../graphql/avances/mutation.jsx"
import { useFormData } from "../../../hooks/useFormData";
import { ButtonLoading } from "../../../components/botonRe"



const AvancesProyecto = () => {
    const {_id} = useParams()
    const idProyecto = _id
    
    const {data, error, loading} = useQuery(GET_AVANCE_PROY,{variables:{idProyecto}});
   
    useEffect(() => {
        if (error) {
            toast.error('Error consultando la informacion');
        }
    }, [error]);

    if (loading) return <div>Cargando...</div>
    return (
        <div className="">
            <div className="actualizacionUA avance">
                <div className='headerUA'>
                    <h3>Avances del proyecto</h3>
                    <Link to='/lider/misProyectos' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link>
                </div>
                {data && data.filtrarAvance ?(
                <>
                    {data.filtrarAvance.map((f) =>{
                        if(f.observaciones.length === 0){
                        return(
                            <div className="bodyUA cajaAvance" key={f._id}>
                                <h3>Fecha: </h3>
                                <p>{f.fecha}</p>
                                <h3>Descripcion: </h3>
                                <p>{f.descripcion}</p>
                                <h3>Estudiante: </h3>
                                <p>{f.creadoPor.nombre} {f.creadoPor.apellido}</p>
                                <h3>Correo: </h3>
                                <p>{f.creadoPor.correo}</p>
                                <Link to={`observacion/${f._id}`} >
                                    <button className="boton3">crear observacion</button>
                                </Link>
                            </div>
                        )}else{
                            return(
                                <div className="bodyUA cajaAvance" key={f._id}>
                                    <h3>Fecha: </h3>
                                    <p>{f.fecha}</p>
                                    <h3>Descripcion: </h3>
                                    <p>{f.descripcion}</p>
                                    <h3>Estudiante: </h3>
                                    <p>{f.creadoPor.nombre} {f.creadoPor.apellido}</p>
                                    <h3>Correo: </h3>
                                    <p>{f.creadoPor.correo}</p>
                                    <h3>observaciones: </h3>
                                    <p>{f.observaciones}</p>
                                    <Link to={`observacion/${f._id}`} >
                                        <button className="boton3">Actualizar observacion</button>
                                    </Link>
                                </div>
                            )
                        }
                    }
                )}
                </>
                ):(
                    <div>No se encontraron avances</div>
                )}    
            </div>
        </div>
    )
}

export  {AvancesProyecto};


