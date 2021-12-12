import React from 'react'
import { Link } from 'react-router-dom'

const Ruta = ({ruta, nombre}) => {
    return (
        <Link to={ruta}>
            <button className='botonRuta'>{nombre}</button>
        </Link>
    )
}

export {Ruta};
