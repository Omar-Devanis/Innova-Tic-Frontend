import React,{useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";
import { ACTUALIZAR_PROYECTO } from '../../../graphql/proyectos/mutations';
import { useQuery} from '@apollo/client';
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { useFormData } from "../../../hooks/useFormData";
import { Input } from "../../../components/input.jsx"
import { ButtonLoading } from "../../../components/botonRe"


const EditProyectoLider = () => {
    const {_id} = useParams()
    const id = _id
    const { form, formData, updateFormData } = useFormData()
    
    const {data:queryData,
        error:queryError,
        loading:queryLoading} = useQuery(GET_PROYECTO,{variables:{_id}});

    const [actualizarProyecto,{
        data:mutationData,
        error:mutationError,
        loading:mutationLoading}] = useMutation(ACTUALIZAR_PROYECTO);

    useEffect(() => {
        console.log('data servidor2', queryData)
      }, [queryData])   

    useEffect(() => {
        if (queryError) {
            toast.error('Error consultando este usuario');
        }
    }, [queryError]);
  

    const submitForm = (e)=>{
       e.preventDefault();
       console.log("fd",formData)
       actualizarProyecto({
           variables:{id,...formData}
       })} 

  
    
    useEffect(() => {
      if (queryError) {
        toast.error('Error no se pudo actualizar');
      }
      }, [queryError]);
    
    useEffect(()=>{
        if(mutationData){
            toast.success("Proyecto actualizado")
        }
    },[mutationData])

    if (queryLoading) return <div>Cargando....</div>;

    return(
        
            <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                        <h3>Actualizar proyecto</h3>
                        <Link to='/lider/misProyectos' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </Link>
                </div>
                <div className="bodyUA">
                
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="interno"
                >
                <Input label='Nombre Proyecto:' name='nombre' type='text' defaultValue={queryData.proyectoEspecifico.nombre} />
                <Input label='Presupuesto Proyecto:' name='presupuesto' type='number' step="any" defaultValue={queryData.proyectoEspecifico.presupuesto} />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='actualizar'
                    clase='boton botonProy'
                    />
            </form>
                </div>
            
            </div>
        </div>
        
    )
}

export {EditProyectoLider};
