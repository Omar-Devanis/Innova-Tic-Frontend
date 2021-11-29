import React from 'react'

const Register = () => {
    return (
        <div>
            <form className="formulario">
                <div className="interno">
                    <ul>
                        <li><h1>Registro</h1></li>                 
                    </ul>
                    <ul className="registro">
                        <li><p className="p">Nombres</p></li>
                        <li><input className="inputs" type="text" placeholder="Primero Segundo" /></li>
                    </ul>
                    <ul>
                        <li><p>Apellidos</p></li>
                        <li><input className="inputs" type="text" placeholder="Primero Segundo" /></li>
                    </ul>
                    <ul>
                        <li><p>Numero de documento</p></li>
                        <li><input className="inputs" type="text" placeholder="1024547537" /></li>
                    </ul>
                    <ul>
                        <li><p>Correo electronico</p></li>
                        <li><input className="inputs" type="email" placeholder="Pepito@gmail.com" /></li>
                    </ul>
                    <ul>
                        <li><p>Contraseña</p></li>
                        <li><input className="inputs" type="password" placeholder="Contraseña" /></li>
                    </ul>
                    <ul>
                        <li><button className="boton">Registrar</button></li>
                    </ul>
                    <ul className="enlace">
                        <li><span>Tienes cuenta?</span></li>
                        <li><a href="">Iniciar sesión</a></li>
                    </ul>
                </div>    
            </form>
        </div>
    )
}

export {Register};
