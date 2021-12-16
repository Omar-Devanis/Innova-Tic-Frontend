import React from 'react'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react/cjs/react.development'
import { GET_PROYECTOS } from '../../../graphql/proyectos/queries'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProyectosUser = () => {

    const{data,error,loanding}=useQuery(GET_PROYECTOS);
    
    useEffect(()=>{
        console.log(data)
    },[data])

    useEffect(()=>{
        if(error){
            toast.error("Error al mostrar los proyectos")
        }
    })
    
    if (loanding) return <div>Cargando...</div>
    return (<div className='proyectoEst'>
    {data && data.Proyectos ?(
        <>
            {data.Proyectos.map((p) =>{
                    console.log('data servidor',data)
                    return(
                        <div className="tarjeta" key={p._id}>
                        <Link to={`solicitudP/${p._id}`} >                            
                            <div className='Info'>
                                <h3>{p.nombre}</h3>
                                <p><span>Lider: </span>{p.lider.nombre} {p.lider.apellido}</p>
                                <p><span>Contacto: </span>{p.lider.correo}</p>
                                <p>{p.estado}</p>
                                <p>{p.fase}</p>
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
