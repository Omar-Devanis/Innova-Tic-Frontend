import React,{useEffect} from "react";
import { useParams } from "react-router";
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
                </div>
                <div className="bodyUA">
                
            <form 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                id='formulario'
                className="formularioAU"
                >
                <Input label='Nombre Proyecto:' name='nombre' type='text' defaultValue={queryData.proyectoEspecifico.nombre} />
                <Input label='Presupuesto Proyecto:' name='presupuesto' type='number' step="any" defaultValue={queryData.proyectoEspecifico.presupuesto} />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='actualizar'
                    clase='boton'
                    />
            </form>
                </div>
            
            </div>
        </div>
        
    )
}

export {EditProyectoLider};
