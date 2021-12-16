import { gql } from "@apollo/client";

const CREAR_INSCRIPCION = gql`

mutation($proyecto: String!, $estudiante: String!){
  crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
    _id
  }
}
`;

export{CREAR_INSCRIPCION}