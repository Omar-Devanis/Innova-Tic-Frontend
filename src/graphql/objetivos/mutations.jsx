import { gql } from "@apollo/client";

const CREAR_OBJETIVO = gql`
mutation Mutation($descripcion: String!, $tipo: Enum_TipoObjetivo!, $proyecto: String!) {
    crearObjetivo(descripcion: $descripcion, tipo: $tipo, proyecto: $proyecto) {
      _id
    }
  }
`;

export {CREAR_OBJETIVO};