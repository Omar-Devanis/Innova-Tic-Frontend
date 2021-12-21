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
import { Link } from 'react-router-dom'


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
                        <Link to='/admin/proyectos' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </Link>
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