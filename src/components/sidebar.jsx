import React from 'react'
import { PrivateComponent } from "./PrivateComponent";

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <button>Perfil</button>
            <PrivateComponent roleList={["ADMINISTRADOR"]}>
              <button>Proyectos</button>
            </PrivateComponent>
            <button>Usuarios</button>
        </nav> 

    );
};


export {Sidebar};
