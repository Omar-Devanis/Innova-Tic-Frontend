import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react/cjs/react.development'
import { GET_MIS_PROYECT } from '../../../graphql/proyectos/queries'
import { toast } from 'react-toastify';
import { useUser } from '../../../context/userContext.js'


const MisProyectos = () => {
    const { userData } = useUser();

    const {data,error,loanding}=useQuery(GET_MIS_PROYECT, {
        variables: {lider: userData._id}
    });

    
    useEffect(()=>{
        console.log(data)
    },[data])

    useEffect(()=>{
        if(error){
            toast.error("Error al mostrar los proyectos")
        }
    })
    
    if (loanding) return <div>Cargando...</div>
    return (
    <div className='proyectoEst'>
    {data && data.proyectosLiderados ?(
        <>
            {data.proyectosLiderados.map((p) =>{
                    console.log('data servidor',data)
                    if (p.estado === "ACTIVO") {
                    return(
                        <div className="tarjeta" key={p._id}>
                            <div className='Info'>
                                <Link to={`info/${p._id}`}>
                                    <h3>{p.nombre}</h3>
                                </Link>
                                <p><span>Lider: </span>{p.lider.nombre}</p>
                                <p><span>Contacto: </span>{p.lider.correo}</p>
                                <p><span>Presupuesto: </span>{p.presupuesto}</p>
                                <p>{p.estado}</p>
                                <p>{p.fase}</p>
                            </div>
                            
                            <div className='btns'>
                                <Link to={`actualizar/${p._id}`}>
                                    <button className='btn-inscripcion'>Actualizar</button>
                                </Link>
                                <Link to={`inscripciones/${p._id}`}>
                                    <button className='btn-vermas'>inscritos</button>
                                </Link>
                                <Link to={`solicitudes/${p._id}`}>
                                    <button className='btn-vermas'>solicitudes</button>
                                </Link>
                            </div>
                        </div>
                    )}else {
                        return(
                            <div className="tarjeta" key={p._id}>
                            <div className='Info'>
                                <h3>{p.nombre}</h3>
                                <p><span>Lider: </span>{p.lider.nombre}</p>
                                <p><span>Contacto: </span>{p.lider.correo}</p>
                                <p><span>Presupuesto: </span>{p.presupuesto}</p>
                                <p>{p.estado}</p>
                                <p>{p.fase}</p>
                            </div>
                            
                            <div className='btns'>
                                <Link to={`inscripciones/${p._id}`}>
                                    <button className='btn-vermas'>inscritos</button>
                                </Link>
                                <Link to={`solicitudes/${p._id}`}>
                                    <button className='btn-vermas'>solicitudes</button>
                                </Link>
                            </div>
                            </div>
                        )
                    }
                }
            )}
        </>
    ):(
        <div>No autorizado</div>
    )}
                    
    </div>
)
}

export {MisProyectos};
