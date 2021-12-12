import React from 'react'
import { PrivateComponent } from "./PrivateComponent";
import { Ruta } from './ruta.jsx'

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <Ruta ruta='/perfil' nombre='Perfil' />
            <PrivateComponent roleList={["ADMINISTRADOR"]}>
              <Ruta ruta='/admin/usuarios' nombre='Usuarios'/>
              <Ruta ruta='/admin/proyectos' nombre='Proyectos' />
            </PrivateComponent>
            <PrivateComponent roleList={["LIDER"]}>
                <Ruta ruta='/lider/misProyectos' nombre='Mis proyectos' />
                <Ruta ruta='/lider/estudiantes' nombre='Estudiantes' />
                <Ruta ruta='/lider/crearProyecto' nombre='Crear proyecto' />
            </PrivateComponent>
            <PrivateComponent roleList={["ESTUDIANTE"]}>
                <Ruta ruta='/user/todosLosProyectos' nombre='Proyectos' />
                <Ruta ruta='/user/ProyectosInscrit' nombre='Proyectos inscritos' />

            </PrivateComponent>
        </nav> 

    );
};


export {Sidebar};
