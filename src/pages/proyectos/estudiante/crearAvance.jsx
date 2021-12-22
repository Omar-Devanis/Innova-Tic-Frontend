import React from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router";
import { useUser } from "../../../context/userContext";
import { useEffect } from "react/cjs/react.development";
import { useFormData } from "../../../hooks/useFormData";
import { toast } from "react-toastify";
import { CREAR_AVANCE } from "../../../graphql/avances/mutation";
import { Link } from "react-router-dom";


const CrearAvance = ()=>{
    const{_id}=useParams()
    console.log(_id)

    const { form, formData, updateFormData } = useFormData(null)
    const {userData} = useUser()

    const[crearAvance,{data,error,loading}] = useMutation(CREAR_AVANCE)

    useEffect(()=>{
        console.log(">>>",data)
    },[data])

    const submitForm = (e)=>{
        e.preventDefault();
        console.log("fd",formData)
        crearAvance({
            variables:{proyecto:_id,creadoPor:userData._id,...formData}
        })} 
    if(loading) return <div>Cargando...</div>
    return (
        <div className="overlay">
            <div className="contenedorModal">
                <div className="headerModal">
                    <h3>Crear Avance</h3>
                </div>
                <div className="bodyC">
                    <form 
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}
                        id='formulario'
                        className="formularioAU"
                        >
                        <label>Ingrese la descripcion del avance</label>
                        <textarea name="descripcion" rows="5" cols="60"></textarea>
                        <input type='submit'onClick={()=>{toast.success("Avance Modificado")}}/>
                    </form>

                </div>
                <Link to={`/user/ProyectosInscrit/masInformacion/${_id}`}>
                    <button className='botonCerrarM'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                </Link>

            </div>

        </div>
    )
}

export {CrearAvance}