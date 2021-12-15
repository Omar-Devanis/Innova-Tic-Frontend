import { gql } from "@apollo/client"; 

const GET_PROYECTOS = gql`

query proyectos {
    Proyectos {
      _id
      nombre
      lider {
        nombre
        apellido
        correo
      }
      fase
      estado
    }
  }

`;

const GET_PROYECTO = gql`
query($_id: String!){
  proyectoEspecifico(_id: $_id) {
    nombre
    presupuesto
    fechaInicio
    fase
    estado
    lider {
      nombre
      apellido
      correo
    }
    
  }
}
`;

const GET_MIS_PROYECT = gql`
  query ProyectosLiderados($lider: String!) {
    proyectosLiderados(lider: $lider) {
      _id
      nombre
      presupuesto
      estado
      fase
      lider {
        nombre
        correo
      }
    }
  }
`;

export {GET_PROYECTOS, GET_PROYECTO, GET_MIS_PROYECT}