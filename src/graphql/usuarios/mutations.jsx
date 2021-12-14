import { gql } from "@apollo/client";

const EDITAR_ESTADO_U = gql`
    mutation($_id: String!, $estado: Enum_EstadoUsuario){
        editarUsuario(_id: $_id,estado: $estado) {
            estado
        }
      }

`;

export default EDITAR_ESTADO_U