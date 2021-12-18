import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
//import { Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useQuery} from '@apollo/client';
import { GET_AVANCE_PROY } from "../../../graphql/avances/queries";

const AvancesProyecto = () => {
    const [openDialog, setOpenDialog] = useState(false); 
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
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                    <h3>Actualizar estado y fase del proyecto</h3>
                </div>
                {data && data.filtrarAvance ?(
                <>
                    {data.filtrarAvance.map((f) =>{
                        if(f.observaciones.length === 0){
                        return(
                            <div className="bodyUA" key={f._id}>
                                <h3>Fecha: </h3>
                                <p>{f.fecha}</p>
                                <h3>Descripcion: </h3>
                                <p>{f.descripcion}</p>
                                <h3>Estudiante: </h3>
                                <p>{f.creadoPor.nombre} {f.creadoPor.apellido}</p>
                                <h3>Correo: </h3>
                                <p>{f.creadoPor.correo}</p>
                                <button onClick={() => setOpenDialog(true)} >agregar observaciones</button>
                            </div>
                        )}else{
                            return(
                                <div className="bodyUA" key={f._id}>
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
                                    <button>actualizar observaciones</button>
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

const crear = (() =>{
    return (
        <div>
        <input type="text" />
        </div>
    )
})