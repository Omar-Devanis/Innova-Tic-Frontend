import { gql } from "@apollo/client";

const EDITAR_OBSERVACIONES = gql`
mutation Mutation($id: ID!, $observaciones: [String]) {
    agregarObservaciones(_id: $id, observaciones: $observaciones) {
      _id
    }
  }
`;

export {EDITAR_OBSERVACIONES};