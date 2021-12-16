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

const RESOLICITUD = gql`
  query($proyecto: String!){
    inscripcionProyecto(proyecto:$proyecto) {
      estudiante {
        _id
      }
    }}
  

`

export {GET_PROYECTOS_EST,RESOLICITUD }