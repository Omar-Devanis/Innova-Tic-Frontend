import { gql } from "@apollo/client";

const GET_USUARIOS = gql`
query usuarios{
    Usuarios{
      _id
      nombre
      apellido
      correo
      identificacion
      estado
      rol
    }
  }
`;

export {GET_USUARIOS};