import { gql } from "@apollo/client";

const GET_USUARIOS = gql`
query usuarios{
    Usuarios{
      _id
      nombre
      apellido
      correo
      identificacion
      estado
      rol
    }
  }
`;

const GET_USUARIO = gql`
  query getUser($_id: String!) {
    Usuario(_id: $_id) {
      nombre
      apellido
      correo
      rol
      estado
    }
  }

`;

const GET_USUARIOS_ES = gql`
  query ListaEstudiante {
    listaEstudiante {
      _id
      nombre
      apellido
      identificacion
      correo
      estado
      rol
    }
  }
`;

export {GET_USUARIOS, GET_USUARIO, GET_USUARIOS_ES};