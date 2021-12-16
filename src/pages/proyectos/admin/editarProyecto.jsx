import React,{useEffect} from "react";
import { useParams } from "react-router";
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";
import { EDITAR_PROYECTO } from '../../../graphql/proyectos/mutations';
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
        loading:queryLoading} = useQuery(GET_PROYECTO,{variables:{_id}});

    const [editarProyecto,{
        data:mutationData,
        error:mutationError,
        loading:mutationLoading}] = useMutation(EDITAR_PROYECTO);

    useEffect(() => {
        console.log('data servidor2', queryData)
      }, [queryData])   
    useEffect(() => {
        if (queryData) {
          toast.success('Proyecto encontrado');
        }
    }, [queryData]);

    useEffect(() => {
        if (queryError) {
            toast.error('Error consultando este usuario');
        }
    }, [queryError]);
  

    const submitForm = (e)=>{
       e.preventDefault();
       console.log("fd",formData)
       editarProyecto({
           variables:{_id,...formData}
       })} 

  
    
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
                <h3>Nombre Proyecto: </h3>
                <p>{queryData.proyectoEspecifico.nombre} {}</p>
                <h3>Lider Proyecto: </h3>
                <p>{queryData.proyectoEspecifico.lider.nombre} {queryData.proyectoEspecifico.lider.apellido}</p>
                <h3>Contacto Lider: </h3>
                <p>{queryData.proyectoEspecifico.lider.correo}</p>
                <h3>Presupuesto Proyecto: </h3>
                <p>$ {queryData.proyectoEspecifico.presupuesto}</p>
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="formularioAU"
                >
                <DropDown
                    label={"Etapa Proyecto"}
                    name={"fase"}
                    required={true}
                    options={Enum_FaseProyecto}
                    defaultValue={queryData.proyectoEspecifico.fase}
                />
                <DropDown
                    label={"Estado Proyecto"}
                    name={"estado"}
                    required={true}
                    options={Enum_EstadoProyecto}
                    defaultValue={queryData.proyectoEspecifico.estado}
                />
                
                <input type='submit'/>
            </form>
                </div>
            
            </div>
        </div>
        
    )
}

export default EditarProyecto;