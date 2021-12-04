import React from 'react';
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='caja'>
            <h1 className= "h1">Inicio de sesión</h1>
            <form className="formulario">
                <div className='interno' >
                    <input className='inputs' type="email" placeholder='Correo electronico'/>
                    <input className='inputs' type="password" placeholder='Contraseña'/>
                    <button className="boton">Iniciar sesión</button>
                </div>
                <div className="enlace">
                    <span className='p' >No tienes cuenta?</span>
                    <Link to='/register'>
                        <span className='p' >registrate</span>
                    </Link>
                </div>       
            </form>
        </div>
    )
}

export {Login};
