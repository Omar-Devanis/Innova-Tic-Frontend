import { gql } from "@apollo/client";

const CREAR_INSCRIPCION = gql`

mutation($proyecto: String!, $estudiante: String!){
  crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
    _id
  }
}
`;

const ABROBAR_INSCRIP = gql`
mutation Mutation($aprobarInscripcionId: String!, $estado: Enum_EstadoInscripcion) {
    aprobarInscripcion(id: $aprobarInscripcionId, estado: $estado) {
      _id
    }
  }
`;

export{CREAR_INSCRIPCION, ABROBAR_INSCRIP}