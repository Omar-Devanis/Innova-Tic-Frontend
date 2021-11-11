import React from 'react'
import { useParams } from 'react-router-dom'

const UsuarioGenerico = () => {
    let params = useParams();
    return (
        <div>
            pagina de {params.nombreusuario}
        </div>
    )
}

export default UsuarioGenerico
