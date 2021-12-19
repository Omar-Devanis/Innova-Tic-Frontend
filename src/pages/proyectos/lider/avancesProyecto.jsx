import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import { toast } from 'react-toastify';
import { useQuery} from '@apollo/client';
import { GET_AVANCE_PROY } from "../../../graphql/avances/queries";
import { Input } from "../../../components/input.jsx"
import { useMutation } from "@apollo/client";
import { EDITAR_OBSERVACIONES } from "../../../graphql/avances/mutation.jsx"
import { useFormData } from "../../../hooks/useFormData";
import { ButtonLoading } from "../../../components/botonRe"



const AvancesProyecto = () => {
    const {_id} = useParams()
    const idProyecto = _id
    
    const {data, error, loading} = useQuery(GET_AVANCE_PROY,{variables:{idProyecto}});
   
    useEffect(() => {
        if (error) {
            toast.error('Error consultando la informacion');
        }
    }, [error]);

    if (loading) return <div>Cargando...</div>
    return (
        <div className="">
            <div className="actualizacionUA avance">
                <div className='headerUA'>
                    <h3>Avances del proyecto</h3>
                </div>
                {data && data.filtrarAvance ?(
                <>
                    {data.filtrarAvance.map((f) =>{
                        if(f.observaciones.length === 0){
                        return(
                            <div className="bodyUA cajaAvance" key={f._id}>
                                <h3>Fecha: </h3>
                                <p>{f.fecha}</p>
                                <h3>Descripcion: </h3>
                                <p>{f.descripcion}</p>
                                <h3>Estudiante: </h3>
                                <p>{f.creadoPor.nombre} {f.creadoPor.apellido}</p>
                                <h3>Correo: </h3>
                                <p>{f.creadoPor.correo}</p>
                                <Observaciones id={f._id} text='Agregar observacion'/>
                            </div>
                        )}else{
                            return(
                                <div className="bodyUA cajaAvance" key={f._id}>
                                    <h3>Fecha: </h3>
                                    <p>{f.fecha}</p>
                                    <h3>Descripcion: </h3>
                                    <p>{f.descripcion}</p>
                                    <h3>Estudiante: </h3>
                                    <p>{f.creadoPor.nombre} {f.creadoPor.apellido}</p>
                                    <h3>Correo: </h3>
                                    <p>{f.creadoPor.correo}</p>
                                    <h3>observaciones: </h3>
                                    <p>{f.observaciones}</p>
                                    <Observaciones id={f._id} text='Actualizar observacion'/>
                                </div>
                            )
                        }
                    }
                )}
                </>
                ):(
                    <div>No se encontraron avances</div>
                )}    
            </div>
        </div>
    )
}

export  {AvancesProyecto};

const Observaciones = (({id, text}) =>{
    const { form, formData, updateFormData } = useFormData()

    const [editAvance, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(EDITAR_OBSERVACIONES);

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
    return (
        <div>
            <form 
            onSubmit={submitForm}
            onChange={updateFormData}
            ref={form}
            id='formulario'
            className="formObser"
            >
            <label htmlFor='observaciones' className="labelOb">
                <h5>Agregar observacion:</h5>
                <input 
                type='text'
                name='observaciones'
                className='inpuOb' 
                />
            </label>
                <ButtonLoading
                disabled={Object.keys(formData).length === 0}
                loading={loadingMutation}
                text={text}
                clase='boton2'
                />               
            </form>
        </div>
    )
})

