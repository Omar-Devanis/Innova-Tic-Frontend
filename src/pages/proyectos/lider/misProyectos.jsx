import React from 'react'
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
                    return(
                        <div className="tarjeta" key={p._id}>
                            <div className='Info'>
                                <h3>{p.nombre}</h3>
                                <p><span>Lider: </span>{p.lider.nombre}</p>
                                <p><span>Contacto: </span>{p.lider.correo}</p>
                                <p>{p.estado}</p>
                                <p>{p.fase}</p>
                            </div>
                            
                            <div className='btns'>
                                <button className='btn-vermas'>Ver</button>
                                <button className='btn-inscripcion'>Inscribirme</button>
                            </div>
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

export {MisProyectos};
