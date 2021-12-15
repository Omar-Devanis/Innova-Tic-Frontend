import { useQuery } from '@apollo/client'
import React, {useEffect} from 'react'
import {useUser} from '../../context/userContext';
import { GET_USUARIO } from "../../graphql/usuarios/queries";


const IndexPerfil = () => {
    

    const {data,error,loading} = useQuery(GET_USUARIO)

    useEffect(()=>{
        console.log("Estos son los datos",data)
    },[data])

    return (
        <div>
            <div>
                <div className='headerPerfil'>
                    <div className='picture'></div>
                    <h3>Nombre Completo</h3>
                </div>
                <div className='bodyPerfil'>
                    <h4>Identificacion</h4>
                    <h4>Correo</h4>
                    <h4>Rol</h4>
                </div>
            </div>
        </div>
    )
}

export {IndexPerfil};
