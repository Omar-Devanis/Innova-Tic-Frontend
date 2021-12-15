import { useQuery } from '@apollo/client'
import React, {useEffect,useState} from 'react'
import {useUser} from '../../context/userContext';
import { GET_USUARIO } from "../../graphql/usuarios/queries";
import avatarU from "../../assets/img/avatarU.png"
import Modal from '../../components/Modal'
import EditarPerfil from './editarPerfil'


const IndexPerfil = () => {
    const[estado,setEstado] = useState(false)
    const{userData} = useUser()
    const _id = userData._id
    console.log(userData._id)
    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(GET_USUARIO,{
        variables:{_id}
    });

    useEffect(() => {
        console.log('data servidor', queryData)
      }, [queryData])
    
    if (queryLoading) return <div>Cargando....</div>;
    return (
        <>
        <Modal estado={estado} setEstado={setEstado} title={"Actualizar Perfil"}>
            <EditarPerfil/>
        </Modal>
        <div className='perfil'>
        
            <div className='contenedorPerfil'>
                <div className='headerPerfil'>
                    <div className='picture'>
                        <img src={avatarU} alt='Usuario'/>
                    </div>
                    <h3>{(queryData.Usuario.nombre).toUpperCase()} {(queryData.Usuario.apellido).toUpperCase()}</h3>
                </div>
                <div className='bodyPerfil'>
                    <h4>Correo</h4>
                    <p>{queryData.Usuario.correo}</p>
                    <h4>Rol</h4>
                    <p>{queryData.Usuario.rol}</p>
                    <button onClick={()=>setEstado(!estado)}>Actualizar</button>
                </div>  
            </div>
            
        </div>
        </>
    )
}

export {IndexPerfil};
