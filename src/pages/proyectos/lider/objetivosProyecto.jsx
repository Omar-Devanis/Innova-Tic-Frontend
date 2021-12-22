import React from 'react'
import { OBJETIVO_PROYECTO } from '../../../graphql/objetivos/queries.jsx'
import { useQuery} from '@apollo/client';
import { useParams } from "react-router";


const ObjetivosProyecto = () => {
    const {_id} = useParams()
    const proyecto = _id

    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(OBJETIVO_PROYECTO,{variables:{proyecto}});
    return (
        <div>
            <div>
            <div>
                <h3>Objetivos</h3>
            </div>
            {queryData && queryData.objetivosProyecto ?(
                <>
                    {queryData.objetivosProyecto.map((o) =>{
                        return(
                            <div className="contOnjet" key={o._id}>
                                <h4>{o.tipo}</h4>
                                <h5>Descripcion:</h5>
                                <p>{o.descripcion}</p>
                            </div>
                        )
                    }
                )}
                </>
                ):(
                    <div>No se encontraron objetivos</div>
                )}
        </div>
        </div>
    )
}

export default ObjetivosProyecto
