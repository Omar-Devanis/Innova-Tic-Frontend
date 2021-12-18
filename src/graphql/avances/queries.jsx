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

export { FILTRAR_PROYECTOS}

