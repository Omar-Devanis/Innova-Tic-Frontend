import React, {useEffect}from "react";
import { useParams } from "react-router";
import { useQuery} from '@apollo/client';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { GET_USUARIO } from "../../graphql/usuarios/queries";
import {EDITAR_ESTADO_U} from "../../graphql/usuarios/mutations"
import {useUser} from '../../context/userContext';
import { useFormData } from "../../hooks/useFormData";
import { Input } from "../../components/input";

const EditarPerfil=()=>{

    const{userData} = useUser()
    const _id = userData._id
    console.log(userData._id)
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

    const submitForm = (e)=>{
        e.preventDefault();
        console.log("fd",formData)
        editarUsuario({
            variables:{_id,...formData}
        })
    }

    useEffect(() => {
        console.log('data servidor', queryData)
      }, [queryData])

    useEffect(()=>{
        if(mutationData){
            toast.success("Usuario Modificado")
        }
    },[mutationData])

    if (queryLoading) return <div>Cargando....</div>;

    return(
        <div>
            <div>
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="formularioEp"
                >
                <Input 
                    type={'text'}
                    name={'nombre'}
                    required={true}
                    defaultValue={queryData.Usuario.nombre}
                    label={'Nombre:'}
                />
                <Input 
                    type={'text'}
                    name={'apellido'}
                    required={true}
                    defaultValue={queryData.Usuario.apellido}
                    label={'Apellido:'}
                />
                <Input 
                    type={'text'}
                    name={'identificacion'}
                    required={true}
                    defaultValue={queryData.Usuario.identificacion}
                    label={'Identificacion:'}
                />

                <Input 
                    type={'text'}
                    name={'correo'}
                    required={true}
                    defaultValue={queryData.Usuario.correo}
                    label={'Correo:'}
                />

                <input type='submit' className="inputEp"/>
            </form>                
            </div>
        </div>
    )

}

export default EditarPerfil;