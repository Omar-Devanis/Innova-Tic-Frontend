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
    }
    }

`

export {GET_PROYECTOS_EST}