import { gql } from "@apollo/client";

const EDITAR_ESTADO_U = gql`
    mutation($_id: String!, $estado: Enum_EstadoUsuario){
        editarUsuario(_id: $_id,estado: $estado) {
            estado
        }
      }

`;

const ACEPTAR_USUARIO = gql`
mutation Mutation($id: String!, $estado: Enum_EstadoUsuario) {
  aceptarEstudiantes(_id: $id, estado: $estado) {
    _id
   
  }
}

`;

export {EDITAR_ESTADO_U, ACEPTAR_USUARIO};