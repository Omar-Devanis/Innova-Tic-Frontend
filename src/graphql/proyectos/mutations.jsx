import { gql } from "@apollo/client";

const EDITAR_PROYECTO = gql`

mutation($_id: String!, $estado: Enum_EstadoProyecto, $fase: Enum_FaseProyecto){
  editarProyecto(_id:$_id ,estado: $estado,fase: $fase) {
    nombre
    estado
    fase
  }
}
`;

const CREAR_PROYECTO = gql`

mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $fechaInicio: Date!, $fechaFin: Date!, $lider: String!) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaFin: $fechaFin, lider: $lider) {
    _id
    
  }
}
`;

export {EDITAR_PROYECTO, CREAR_PROYECTO}