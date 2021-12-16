import React from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react/cjs/react.development'
import { useFormData } from "../../../hooks/useFormData.jsx";
import { ButtonLoading } from "../../../components/botonRe.jsx";
import { useMutation } from "@apollo/client";
import { CREAR_PROYECTO } from "../../../graphql/proyectos/mutations.jsx"
import { useUser } from '../../../context/userContext.js'
import { Input } from "../../../components/input.jsx";

const CrearProyecto = () => {
    const { userData } = useUser();
    const { form, formData, updateFormData } = useFormData();
    
    const [crearProyecto, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("formData", formData)
        crearProyecto({ variables:{lider: userData._id,...formData} });
    };

    useEffect(()=>{
        if(errorMutation){
            toast.error("Error creando el proyecto")
        }
    })

    useEffect(()=>{
        console.log("proyecto creado", dataMutation)
        if(dataMutation){
            toast.success("Proyecto creado con exito")
        }
    })
    return (
        <div className='caja'>
            <h1 className='h1'>Crea un proyecto</h1> 
            <form className='formulario' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <div className='interno'>              
                    <Input label='Nombre' name='nombre' type='text' placeholder='nombre' required={true} />
                    <Input label='Presupuesto' name='presupuesto' type='number' placeholder='presupuesto' required={true} />
                    <Input label='Fecha de inicio' name='fechaInicio' type='date' placeholder='fecha de inicio' required={true} />
                    <Input label='Fecha de fin' name='fechaFin' type='date' placeholder='fecha de inicio' required={true} />
                    <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={loadingMutation}
                    text='Crear'
                    clase='boton'
                    />
                </div>    
            </form>
        </div>
    )
}

export {CrearProyecto};
