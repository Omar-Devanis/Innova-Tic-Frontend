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
      inscripciones {
        estudiante {
          _id
        }
      }
    }
  }

`;

const GET_PROYECTO = gql`
query ExampleQuery($_id: String!) {
  proyectoEspecifico(_id:$_id) {
    _id
    nombre
    lider {
      nombre
      apellido
      correo
    }
    fechaInicio
    fechaFin
    presupuesto
    fase
    estado
    inscripciones {
      estado
      estudiante {
        _id
      }
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
      inscripciones {
        estado
        estudiante {
          _id
        }
      }
    }
  }
`;

export {GET_PROYECTOS, GET_PROYECTO, GET_MIS_PROYECT}