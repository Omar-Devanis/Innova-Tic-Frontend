import { gql } from "@apollo/client";

const EDITAR_PROYECTO = gql`

mutation($_id: String!, $estado: Enum_EstadoProyecto, $fase: Enum_FaseProyecto){
  editarProyecto(_id:$_id ,estado: $estado,fase: $fase) {
    nombre
    estado
    fase
  }
}
`;

export {EDITAR_PROYECTO}