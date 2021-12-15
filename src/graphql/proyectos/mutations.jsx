import { gql } from "@apollo/client";

const EDITAR_PROYECTO = gql`

    mutation($_id: String!, $fase: Enum_FaseProyecto, $estado: Enum_EstadoProyecto, $nombre: String, $objetivos: [crearObjetivo], $presupuesto: Float){
        editarProyecto(_id: $_id,nombre: $nombre,presupuesto: $presupuesto,fase: $fase,estado: $estado,objetivos: $objetivos) {       
        nombre
        presupuesto
        fase
        estado
        objetivos
        
        }
      }
`;

export {EDITAR_PROYECTO}