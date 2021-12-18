import { gql } from "@apollo/client";

const CREAR_AVANCE = gql`
mutation($descripcion: String!, $proyecto: String!, $creadoPor: String!){
    crearAvance(descripcion: $descripcion, proyecto: $proyecto, creadoPor: $creadoPor) {
      _id
    }
  }
`;

const EDITAR_AVANCE = gql`
mutation($_id: ID!,$descripcion: String){
    editarAvance(_id: $_id,descripcion:$descripcion) {
      proyecto {
        _id
      }
      descripcion
    }
  }

`;

const EDITAR_OBSERVACIONES = gql`
mutation Mutation($id: ID!, $observaciones: [String]) {
    agregarObservaciones(_id: $id, observaciones: $observaciones) {
      _id
    }
  }
`;

export {EDITAR_OBSERVACIONES,EDITAR_AVANCE,CREAR_AVANCE};
