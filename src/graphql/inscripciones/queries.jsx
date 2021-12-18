import { gql } from "@apollo/client"; 

const GET_PROYECTOS_EST = gql`
query ExampleQuery($estudiante: String!){
    inscripcionEstudiante(estudiante: $estudiante) {
      proyecto {
        _id
        nombre
        lider {
          _id
          nombre
          apellido
        }
        fechaInicio
        estado
        fase 
      }
      estado
    }
    }

`;

const INSCRIPCIONES_PROYECTOS = gql`
query($proyecto: String!){
  inscripcionProyecto(proyecto: $proyecto) {
    estudiante {
      _id
    }
    estado
  }
}

`;

const GET_INSCRI_PROYECTO = gql`
query Query($proyecto: String!) {
    inscripcionProyecto(proyecto: $proyecto) {
      _id
      estado
      estudiante {
        _id
        nombre
        apellido
        correo
        estado
        rol
      }
    }
  }
`;

export {GET_PROYECTOS_EST,INSCRIPCIONES_PROYECTOS, GET_INSCRI_PROYECTO }