import React, {useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";
import {CREAR_INSCRIPCION} from "../../../graphql/inscripciones/mutation"
import { GET_PROYECTOS } from "../../../graphql/proyectos/queries" 
import { useQuery } from '@apollo/client';
import { useMutation } from "@apollo/client";
import {useUser} from '../../../context/userContext';
import { toast } from 'react-toastify';
import {ButtonLoading} from '../../../components/botonRe'

const SolicitudInscripcionProyecto = () =>{

    const{_id}=useParams()

    
    
    const {data,
        error,
        loading} = useQuery(GET_PROYECTO,{variables:{_id}});


    useEffect(()=>{
        console.log("La data es ",data )
    },[data])


    if (loading) return <div></div>;
    return (
            <div className="overlay">
                <div className='contenedorModal'>
                    <div className='headerModal'>
                        <h3>{"Informacion Proyecto"}</h3>
                    </div>
                    <div className='bodyC'>
                        <h4>Nombre Proyecto: {data.proyectoEspecifico.nombre}</h4>
                        <h4>Lider del Proyecto: {data.proyectoEspecifico.lider.nombre} {data.proyectoEspecifico.lider.apellido}</h4>
                        <h4>Correo: {data.proyectoEspecifico.lider.correo}</h4>
                        <h4>Fecha Inicio: {(data.proyectoEspecifico.fechaInicio).slice(0,10)}</h4>
                        <h4>Presupuesto:$ {data.proyectoEspecifico.presupuesto}</h4>
                        <h4>Fase: {data.proyectoEspecifico.fase}</h4>
                        <h4>Estado: {data.proyectoEspecifico.estado}</h4>
                        <div className='contenedorBtn'>
                            <InscripcionProyecto idProyecto={_id} estado={data.proyectoEspecifico.estado} inscripciones={data.proyectoEspecifico.inscripciones}/>
                        </div>
                            
                    </div>
                    <Link to={`/user/todosLosProyectos`}>
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

const InscripcionProyecto = ({idProyecto,estado,inscripciones}) =>{

    const [estadoInscripcion, setEstadoInscripcion] = useState("")

    console.log("esto",inscripciones)

    const{userData} = useUser()

    const [crearInscripcion,{data,error,loading}] = useMutation(CREAR_INSCRIPCION);
    
    console.log(inscripciones)

    useEffect(()=>{
        if(userData&&inscripciones){
            const ftl = inscripciones.filter((el)=> el.estudiante._id === userData._id)
            if(ftl.length > 0){
                setEstadoInscripcion(ftl[0].estado)
            }
            
            console.log("filter",ftl)
        }
    },[userData,inscripciones])

    useEffect(()=>{
        if(data){
            console.log(data)
        }
    },[data])

    const confirmarInscripcion = () =>{
        crearInscripcion({variables:{proyecto:idProyecto,estudiante:userData._id}})
        toast.success("Solicitud enviada")
    }

    return(
        <>
            {estadoInscripcion !== "" ? (
                <span>Tu solicitud ya fue enviada</span>
            ):(<ButtonLoading
            loading={loading}
            text={'Aplicar'}
            disabled={estado === 'INACTIVO'}
            onClick={()=>{confirmarInscripcion()}}/>
            )}
        </>
        
          
    );
};



export default SolicitudInscripcionProyecto;