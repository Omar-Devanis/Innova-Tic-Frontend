import React from 'react';


const Login = () => {
    return (
        <div>
            <form className="formulario">
                <ul className="interno">
                    <li><h1>Inicio de sesión</h1></li>
                    <li><input className="inputs" type="email" placeholder="Correo electronico" /></li>
                    <li><input className="inputs" type="password" placeholder="Contraseña" /></li>
                    <li><button className="boton">Iniciar sesión</button></li>
                    <div className="enlace">
                        <li><span>No tienes cuenta?</span></li>
                        <li><a href="">Registrate</a></li>
                    </div>
                </ul>
            </form>
        </div>
    )
}

export {Login};
