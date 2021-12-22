import React from 'react'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react/cjs/react.development'
import { GET_PROYECTOS } from '../../../graphql/proyectos/queries'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProyectosUser = () => {

    const{data,error,loading}=useQuery(GET_PROYECTOS);
    
    useEffect(()=>{
        console.log(data)
    },[data])

    useEffect(()=>{
        if(error){
            toast.error("Error al mostrar los proyectos")
        }
    })
    
    if (loading) return <div>Cargando...</div>
    return (<div className='proyectoEst'>
                <div className="title">Proyectos</div>
    {data && data.Proyectos ?(
        <>
            {data.Proyectos.map((p) =>{
                    console.log('data servidor',data)
                    return(
                        <div className="tarjeta" key={p._id}>
                        <Link to={`solicitudP/${p._id}`} >                            
                            <div className='Info'>
                                <h3>{p.nombre} - {p.estado}</h3>
                            </div>
                        </Link>

                        </div>)
                }
            )}
        </>
    ):(
        <div>No autorizado</div>
    )}
                    
    </div>
)
}

export {ProyectosUser}
