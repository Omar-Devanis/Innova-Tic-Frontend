import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react/cjs/react.development'
import { useFormData } from "../../../hooks/useFormData.jsx";
import { ButtonLoading } from "../../../components/botonRe.jsx";
import { useMutation } from "@apollo/client";
import { CREAR_PROYECTO } from "../../../graphql/proyectos/mutations.jsx"
import { useUser } from '../../../context/userContext.js'
import { Input } from "../../../components/input.jsx";
import { Link } from "react-router-dom";

const CrearProyecto = () => {
    const [encendido, setEncendido] = useState(true)
    const [id, setId] = useState("")
    const { userData } = useUser();
    const { form, formData, updateFormData } = useFormData();
    const lider = userData._id
    
    const [crearProyecto, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("formData", formData)
        crearProyecto({ variables:{lider,...formData} });
    };
    useEffect(()=>{
        if(dataMutation){
            if(dataMutation.crearProyecto._id){
                setEncendido(false)
                setId(dataMutation.crearProyecto._id)
                toast.success("Informacion enviada correctamente")
                
            }
        }
    }, [dataMutation])

    useEffect(()=>{
        if(errorMutation){
            toast.error("Error creando el proyecto")
        }
    })

    return (
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                    <h3>Crea un proyecto</h3>
                    <Link to='/lider/misProyectos' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link> 
                </div>
                <div > 
                    <form className='' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                        <div className='interno'>              
                            <Input label='Nombre' name='nombre' type='text' placeholder='nombre' required={true} />
                            <Input label='Presupuesto' name='presupuesto' type='number' placeholder='presupuesto' required={true} />
                            <Input label='Fecha de inicio' name='fechaInicio' type='date' placeholder='fecha de inicio' required={true} />
                            <Input label='Fecha de fin' name='fechaFin' type='date' placeholder='fecha de inicio' required={true} />
                            
                            <ButtonLoading
                            disabled={Object.keys(formData).length === 0} 
                            loading={loadingMutation}
                            text='Enviar'
                            clase='boton botonProy'
                            />
                            <Link to={`objetivos/${id}`}className='botonProy'>
                                <button className='botonProy' disabled={encendido} >Agregar objetivos</button>
                            </Link>
                            
                            
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    )
}

export {CrearProyecto};


const boton = (()=>{
    return (
        <button>boton</button>
    )
})
