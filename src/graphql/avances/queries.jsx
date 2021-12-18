import { gql } from "@apollo/client"; 

const FILTRAR_PROYECTOS = gql`
query($idProyecto: String!){
    filtrarAvance(idProyecto: $idProyecto) {
      creadoPor {
        _id
        nombre
        apellido
      }
      descripcion
      fecha
    }
  }
`;

const GET_AVANCE_PROY = gql`
query Query($idProyecto: String!) {
    filtrarAvance(idProyecto: $idProyecto) {
      _id
      fecha
      descripcion
      observaciones
      creadoPor {
        _id
        nombre
        apellido
        correo
      }
    }
}
`;

export { FILTRAR_PROYECTOS, GET_AVANCE_PROY}

