import React,{useEffect} from "react";
import { useParams } from "react-router";
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";
import { EDITAR_PROYECTO } from "../../../graphql/proyectos/mutations";
import { useQuery} from '@apollo/client';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { useFormData } from "../../../hooks/useFormData";
import { DropDown } from "../../../components/dropDown";
import {Enum_EstadoProyecto,Enum_FaseProyecto} from "../../../utils/enums.js"

const EditarProyecto=()=>{
    
    const {_id} = useParams()
    const { form, formData, updateFormData } = useFormData(null)
    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(GET_PROYECTO,{
        variables:{_id}
    });

    const [editarUsuario,{
        data:mutationData,
        error:mutationError,
        loading:mutationLoading}] = useMutation(EDITAR_PROYECTO );

    const submitForm = (e)=>{
       e.preventDefault();
       console.log("fd",formData)
       editarUsuario({
           variables:{_id,...formData}
       })}
    

    useEffect(() => {
        console.log('data servidor', queryData)
      }, [queryData])
    
    useEffect(() => {
      if (queryError) {
        toast.error('Error consultando este usuario');
      }
      }, [queryError]);
    
    useEffect(()=>{
        if(mutationData){
            toast.success("Proyecto Modificado")
        }
    },[mutationData])

    if (queryLoading) return <div>Cargando....</div>;


    return(
        
            <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                        <h3>Actualizar estado y fase del proyecto</h3>
                </div>
                <div className="bodyUA">
                <h3>Nombre Usuario: </h3>
                <p>{} {}</p>
                <h3>Estado Actual: </h3>
                <p>{}</p>
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="formularioAU"
                >
                <DropDown
                    label={"Etapa Proyecto"}
                    name={"estado"}
                    required={true}
                    options={Enum_FaseProyecto}
                />
                <DropDown
                    label={"Estado Proyecto"}
                    name={"estado"}
                    required={true}
                    options={Enum_EstadoProyecto}
                />
                
                <input type='submit'/>
            </form>
                </div>
            
            </div>
        </div>
        
    )
}

export default EditarProyecto;