import React,{useEffect} from "react";
import { useParams } from "react-router";
import { useQuery} from '@apollo/client';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { GET_USUARIO } from "../../../graphql/usuarios/queries";
import {EDITAR_ESTADO_U} from "../../../graphql/usuarios/mutations"
import { useFormData } from "../../../hooks/useFormData";
import { DropDown } from "../../../components/dropDown";
import {Enum_EstadoUsuario} from "../../../utils/enums.js"

const EditarUsuario = ( )=>{
    const {_id} = useParams()
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

   
    
    const submitForm = (e)=>{
        e.preventDefault();
        console.log("fd",formData)
        editarUsuario({
            variables:{_id,...formData}
        })
    }

    useEffect(()=>{
        if(mutationData){
            toast.success("Usuario Modificado")
        }
    },[mutationData])

    if (queryLoading) return <div>Cargando....</div>;
    return(
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                        <h3>Actulizar Estado Usuario</h3>
                </div>
                <div className="bodyUA">
                <h3>Nombre Usuario: </h3>
                <p>{queryData.Usuario.nombre} {queryData.Usuario.apellido}</p>
                <h3>Estado Actual: </h3>
                <p>{queryData.Usuario.estado}</p>
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="formularioAU"
                >
                <DropDown
                    label={"Estado de la persona"}
                    name={"estado"}
                    defaultValue={queryData.Usuario.estado}
                    required={true}
                    options={Enum_EstadoUsuario}
                />
                <input type='submit'/>
            </form>
                </div>
            
            </div>
        </div>
    )
}

export {EditarUsuario} 