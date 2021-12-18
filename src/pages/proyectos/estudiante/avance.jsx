import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useUser } from "../../../context/userContext";
import { useQuery } from "@apollo/client";
import { FILTRAR_PROYECTOS } from "../../../graphql/avances/queries";
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";
import plus from "../../../assets/img/plus.png"
import { Link } from 'react-router-dom';

const MasInformacion = () =>{
 
    const {_id} = useParams()
    const {userData} = useUser()

    const{data:dataQ,error:errorQ,loading:loadingQ} = useQuery(GET_PROYECTO,{variables:{
        _id
    }})

    const{data,error,loading} = useQuery(FILTRAR_PROYECTOS,{variables:{
        idProyecto:_id
    }}) 

    useEffect(()=>{
        console.log(">>>",data)
    },[data])

    useEffect(()=>{            
        console.log("La info del pro: ",dataQ)
    },[dataQ])

    if(loadingQ)return(<div>Cargando...</div>)
    return(
        <div className="avances">
            <header className="Head">
            <h2>Nombre Proyecto: {dataQ.proyectoEspecifico.nombre}</h2>
            <p><span>Liderado Por:</span> {dataQ.proyectoEspecifico.lider.nombre} {dataQ.proyectoEspecifico.lider.apellido}</p>
            <p><span>Correo:</span> {dataQ.proyectoEspecifico.lider.correo}</p>
            <p><span>Fecha Inicio:</span> {dataQ.proyectoEspecifico.fechaInicio}</p>
            <p><span>Fase del Proyecto:</span> {dataQ.proyectoEspecifico.fase}</p>
            <p><span>Presupuesto</span>: ${dataQ.proyectoEspecifico.presupuesto}</p>
            </header>
            <section>
                <h3>Avances del proyecto</h3>
                <div className="nuevoAvance">
                    <img src={plus} title="Añadir Nuevo Avance"/>
                </div>
                <ListaAvances avances={data.filtrarAvance} />

            </section>
            
        </div>
    )
}

const ListaAvances = (avances)=>{
    console.log("---",avances.avances.length)

    let descripcion;
    if(avances.avances.length > 0){
        descripcion = <>
        {avances.avances.map((a)=>{
            console.log("este es el id",a._id)
            return(
            <div className="positive" key={a._id}>
                <div className="informacionA"> 
                    <p>Descripcion: {a.descripcion}</p>
                    <p>creado por {a.creadoPor.nombre} {a.creadoPor.apellido} el {(a.fecha).slice(0,10)}</p>
                </div>
                
                <div className='iconEdit'>
                    <Link to={`editarAvance/${a._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                    </Link>                           
                </div>
                
            </div>)        
        })
    
        }
    </>;
    }else{
        descripcion =<div className="negative"> <span className="noAvances">No hay avances</span></div>
    }
    return(
        <div>
            {descripcion}
        </div>
    )

}

export {MasInformacion};