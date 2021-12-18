import { gql } from "@apollo/client";

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

export {EDITAR_OBSERVACIONES,EDITAR_AVANCE};
