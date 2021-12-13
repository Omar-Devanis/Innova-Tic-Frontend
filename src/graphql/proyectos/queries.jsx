import { gql } from "@apollo/client"; 

const GET_PROYECTOS = gql`

query proyectos {
    Proyectos {
      _id
      nombre
      lider {
        nombre
        apellido
        correo
      }
      fase
      estado
    }
  }

`

export {GET_PROYECTOS}