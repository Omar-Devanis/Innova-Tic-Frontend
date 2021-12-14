import React,{useEffect} from "react";
import { useParams } from "react-router";
import { useQuery} from '@apollo/client';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { GET_USUARIO } from "../../../graphql/usuarios/queries";
import EDITAR_ESTADO_U from "../../../graphql/usuarios/mutations"
import { useFormData } from "../../../hooks/useFormData";
import Modal from "../../../components/Modal";

const EditarUsuario = ({_id})=>{
    /* const {_id} = useParams() */
    const { form, formData, updateFormData } = useFormData(null)
    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(GET_USUARIO,{
        variables:{_id}
    });

    const [editarUsuario,{
        data:mutationData,
        error:mutationError,
        loading:mutationLoading}] = useMutation(EDITAR_ESTADO_U);


    useEffect(() => {
        console.log('data servidor', queryData)
      }, [queryData])
  
      useEffect(() => {
          if (queryError) {
            toast.error('Error consultando este usuario');
          }
          }, [queryError]);

    if (queryLoading) return <div>Cargando....</div>;
    
    const submitForm = (e)=>{
        e.preventDefault();
        console.log("fd",formData)
        editarUsuario({
            variables:{_id,...formData}
        })
    }

    return(
        <div>
        <Modal>
            <h4>Editar Usuario </h4>
            <h6>Nombre Usuario</h6>
            <p>{queryData.Usuario.nombre} {queryData.Usuario.apellido}</p>
            <h6>Estado Actual</h6>
            <p>{queryData.Usuario.estado}</p>
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                >
                <select name='estado' form='formulario'>
                    <option value='AUTORIZADO'>
                        Autorizado
                    </option>
                    <option value='PENDIENTE'>
                        Pendiente
                    </option>
                </select>
                <input type='submit'/>
            </form>
            </Modal>
        </div>
    )
}

export {EditarUsuario} 