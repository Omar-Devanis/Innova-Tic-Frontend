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

`

const INSCRIPCIONES_PROYECTOS = gql`
query($proyecto: String!){
  inscripcionProyecto(proyecto: $proyecto) {
    estudiante {
      _id
    }
    estado
  }
}

`

export {GET_PROYECTOS_EST,INSCRIPCIONES_PROYECTOS }