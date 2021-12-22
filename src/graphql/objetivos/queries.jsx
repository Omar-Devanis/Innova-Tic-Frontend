import { gql } from "@apollo/client";

const OBJETIVO_PROYECTO = gql`
query Query($proyecto: String!) {
    objetivosProyecto(proyecto: $proyecto) {
      _id
      descripcion
      tipo
    }
  }
`;

export {OBJETIVO_PROYECTO};