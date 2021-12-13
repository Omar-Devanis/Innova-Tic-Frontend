import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS_EST } from '../../../graphql/inscripciones/queries';
import { toast } from 'react-toastify';

const ProyectosInscrit = () => {
    const {data, error, loading} = useQuery(GET_PROYECTOS_EST);


    useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
        }, [error]); 
    
    if (loading) return <div>Cargando....</div>;
    return (
        <div className='proyectoEst'>
        {data && data.inscripcionEstudiante ?(
            <>
                {data.inscripcionEstudiante.map(
                    (e) =>{
                        console.log('data servidor',data)
                        return(
                            <div className="tarjeta" key={e._id}>
                <h3>{e.nombre}</h3>
                <p>Lider: {e.lider.nombre} {e.lider.apellido}</p>
                <p>{e.fechaInicio}</p>
                <p>{e.estado}</p>
                <p>{e.fase}</p>
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
