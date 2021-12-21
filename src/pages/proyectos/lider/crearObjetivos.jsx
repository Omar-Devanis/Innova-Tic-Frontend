import React from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router"
import { useEffect } from 'react/cjs/react.development'
import { useFormData } from "../../../hooks/useFormData.jsx";
import { ButtonLoading } from "../../../components/botonRe.jsx";
import { useMutation } from "@apollo/client";
import { CREAR_OBJETIVO } from "../../../graphql/objetivos/mutations.jsx"
import { Link } from 'react-router-dom'
import { Input } from "../../../components/input.jsx";
import { DropDown } from "../../../components/dropDown.js";
import { Enum_Objetivos } from "../../../utils/enums.js";


const CrearObjetivos = () => {
    const {_id} = useParams()
    const { form, formData, updateFormData } = useFormData();
    const proyecto = _id
    
    const [crearObjetivo, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(CREAR_OBJETIVO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("formData", formData)
        crearObjetivo({ variables:{proyecto,...formData} });
    };

    useEffect(()=>{
        if(errorMutation){
            toast.error("Error creando el objetivo")
        }
    })

    useEffect(()=>{
        console.log("proyecto creado", dataMutation)
        if(dataMutation){
            toast.success("objetivo creado")
        }
    },[dataMutation])
    return (
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                    <h3>coloca tus objetivos</h3>
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
                            <DropDown label='elige un objetivo' name='tipo' required={true} options={Enum_Objetivos} />              
                            <Input label='Descripcion' name='descripcion' type='text'  required={true} />
                            <ButtonLoading
                            disabled={Object.keys(formData).length === 0} 
                            loading={loadingMutation}
                            text='Crear objetivo'
                            clase='boton botonProy'
                            />
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    )
}

export {CrearObjetivos};
