import { gql } from "@apollo/client"; 

const FILTRAR_PROYECTOS = gql`
query($idProyecto: String!){
    filtrarAvance(idProyecto: $idProyecto) {
      _id
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

const AVANCE = gql`
query($_id: String!){
  filtrar(_id: $_id) {
    proyecto {
      _id
    }
  }
}
`;

export { FILTRAR_PROYECTOS, AVANCE}

