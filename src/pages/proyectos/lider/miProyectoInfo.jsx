import React,{useEffect} from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { GET_PROYECTO } from '../../../graphql/proyectos/queries.jsx'
import { useQuery} from '@apollo/client';

const MiProyectoInfo = () => {
    const {_id} = useParams()
    
    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(GET_PROYECTO,{variables:{_id}});

    useEffect(() => {
        if (queryError) {
            toast.error('Error consultando la informacion');
        }
    }, [queryError]);

    if (queryLoading) return <div>Cargando...</div>

    return (
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                        <h3>Actualizar estado y fase del proyecto</h3>
                </div>
                    <div className="bodyUA">
                    <h3>Nombre Proyecto: </h3>
                    <p>{queryData.proyectoEspecifico.nombre} {}</p>
                    <h3>Lider Proyecto: </h3>
                    <p>{queryData.proyectoEspecifico.lider.nombre} {queryData.proyectoEspecifico.lider.apellido}</p>
                    <h3>Contacto Lider: </h3>
                    <p>{queryData.proyectoEspecifico.lider.correo}</p>
                    <h3>Presupuesto Proyecto: </h3>
                    <p>$ {queryData.proyectoEspecifico.presupuesto}</p>
                    <h3>Fecha de inicio: </h3>
                    <p>{queryData.proyectoEspecifico.fechaInicio}</p>
                    <h3>Fecha fin: </h3>
                    <p>{queryData.proyectoEspecifico.fechaFin}</p>
                    <h3>Estado: </h3>
                    <p>{queryData.proyectoEspecifico.estado}</p>
                    <h3>fase: </h3>
                    <p>{queryData.proyectoEspecifico.fase}</p>
                </div>
                <Link to={`avances/${queryData.proyectoEspecifico._id}`}>
                    <button>Avances</button>
                </Link>
            
            </div>
        </div>
    )
}

export {MiProyectoInfo};
