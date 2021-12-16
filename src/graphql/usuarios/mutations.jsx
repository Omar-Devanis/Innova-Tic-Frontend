import { gql } from "@apollo/client";

const EDITAR_ESTADO_U = gql`
    
    mutation($_id: String!, $nombre: String, $apellido: String, $identificacion: String, $correo: String, $rol: Enum_Rol, $estado: Enum_EstadoUsuario){
      editarUsuario(_id: $_id,nombre: $nombre,apellido: $apellido,identificacion: $identificacion,correo: $correo,rol: $rol,estado: $estado) {
        nombre
        apellido
        identificacion
        correo
        rol
        estado
      }
    }

`;

const ACEPTAR_USUARIO = gql`
mutation Mutation($id: String!) {
  aceptarEstudiantes(_id: $id) {
    _id
  }
}

`;

export {EDITAR_ESTADO_U, ACEPTAR_USUARIO};