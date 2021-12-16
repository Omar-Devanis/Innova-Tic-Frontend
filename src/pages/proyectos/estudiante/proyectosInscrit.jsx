import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS_EST } from '../../../graphql/inscripciones/queries';
import { toast } from 'react-toastify';
import {useUser} from '../../../context/userContext' 

const ProyectosInscrit = () => {

    const{userData} = useUser()

    const {data, error, loading} = useQuery(GET_PROYECTOS_EST,{
        variables:{estudiante:userData._id}
    });


    useEffect(() => {
       console.log("esto devuelve ",data)
        }, [data]); 

    useEffect(()=>{
        if(error){
            toast.error("Error Consultando tus proyectos")
        }
    })
    
    if (loading) return <div>Cargando....</div>;
    return(<div className='proyectoEst'>
        {data && data.inscripcionEstudiante ?(
            <>
                {data.inscripcionEstudiante.map((e) =>{
                        console.log('data servidor',data)
                        return(
                            <div className="tarjeta" key={e.proyecto._id}>
                                <div className='Info'>
                                    <h3>{e.proyecto.nombre}</h3>
                                    <p>Lider: {e.proyecto.lider.nombre} {e.proyecto.lider.apellido}</p>
                                    <p>{e.proyecto.fechaInicio}</p>
                                    <p>{e.proyecto.estado}</p>
                                    <p>{e.proyecto.fase}</p>
                                </div>
                                <div className='btns only'>
                                    <button className='btn-vermas '>Mas informacion.</button>
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

export {ProyectosInscrit};
