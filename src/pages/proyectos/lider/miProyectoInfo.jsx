import React,{useEffect} from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { GET_PROYECTO } from '../../../graphql/proyectos/queries.jsx'
import { useQuery} from '@apollo/client';
import { PrivateRoute } from '../../../components/PrivateRoute.jsx';


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
        <PrivateRoute roleList={
            ["LIDER"]
        }>
        <div className="contenedorAU">
            <div className="actualizacionUA continf2">
                <div className='headerUA'>
                        <h3>Informacion del proyecto</h3>
                        <Link to='/lider/misProyectos' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </Link>
                </div>
                    <div className="bodyUA cajaAvance">
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
                    <Link to={`/lider/misProyectos/info/avances/${queryData.proyectoEspecifico._id}`}>
                        <button className="boton3">Avances</button>
                    </Link>
                </div>
            
            </div>
        </div>
        </PrivateRoute>
    )
}

export {MiProyectoInfo};

