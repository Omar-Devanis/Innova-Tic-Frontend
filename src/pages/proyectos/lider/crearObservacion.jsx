import React from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router";
import { useUser } from "../../../context/userContext";
import { useEffect } from "react/cjs/react.development";
import { useFormData } from "../../../hooks/useFormData";
import { toast } from "react-toastify";
import { EDITAR_OBSERVACIONES } from "../../../graphql/avances/mutation.jsx"
import { Link } from "react-router-dom";

const CrearObservacion = () => {
    const{_id}=useParams()
    const id = _id

    const { form, formData, updateFormData } = useFormData(null)

    const[editAvance,{data: dataMutation, loading: loadingMutation, error: errorMutation}] = useMutation(EDITAR_OBSERVACIONES)


    const submitForm = (e) => {
        e.preventDefault();
        console.log("formData", formData)
        editAvance({ variables:{id,...formData} });
    };

    useEffect(() => {
        if (dataMutation) {
            toast.success('observacion agregada');
        }
    }, [dataMutation]);
    useEffect(() => {
        if (errorMutation) {
            toast.error('Error agregando observacion');
        }
    }, [errorMutation]);

    if (loadingMutation) return <div>Cargando...</div>
    return (
        <div className="overlay">
            <div className="contenedorModal">
                <div className="headerModal">
                    <h3>Crear Observacion</h3>
                </div>
                <div className="bodyC">
                    <form 
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}
                        id='formulario'
                        className="formularioAU"
                        >
                        <label>Ingrese la observacion</label>
                        <textarea name="observaciones" rows="5" cols="60" required ></textarea>
                        <input type='submit'/>
                    </form>

                </div>

            </div>

        </div>
    )

}

export {CrearObservacion};
