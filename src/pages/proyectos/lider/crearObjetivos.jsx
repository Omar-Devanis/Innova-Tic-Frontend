import React from 'react'
import { toast } from 'react-toastify';
import { useParams } from "react-router"
import { useEffect } from 'react/cjs/react.development'
import { useFormData } from "../../../hooks/useFormData.jsx";
import { ButtonLoading } from "../../../components/botonRe.jsx";
import { useMutation } from "@apollo/client";
import { CREAR_OBJETIVO } from "../../../graphql/objetivos/mutations.jsx"
import { useUser } from '../../../context/userContext.js'
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
            toast.error("Error creando el proyecto")
        }
    })

    useEffect(()=>{
        console.log("proyecto creado", dataMutation)
        if(dataMutation){
            toast.success("objetivo creado")
        }
    })
    return (
        <div className="contenedorAU">
            <div className="actualizacionUA">
                <div className='headerUA'>
                    <h3>coloca tus objetivos</h3>
                </div>
                <div > 
                    <form className='' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                        <div className='interno'>
                            <DropDown label='elige un objetivo' name='tipo' required={true} options={Enum_Objetivos} />              
                            <Input label='Nombre' name='descripcion' type='text' placeholder='nombre' required={true} />
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
