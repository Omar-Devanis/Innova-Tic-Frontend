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

export{EDITAR_AVANCE}