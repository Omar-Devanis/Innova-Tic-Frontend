const Enum_Rol = {
    ADMINISTRADOR: 'Administrador',
    ESTUDIANTE: 'Estudiante',
    LIDER: 'Líder',
  };
  
  const Enum_EstadoUsuario = {
    PENDIENTE: 'PENDIENTE',
    AUTORIZADO: 'AUTORIZADO',
    NO_AUTORIZADO: 'NO_AUTORIZADO',
  };
  
  const Enum_EstadoProyecto = {
    ACTIVO: 'ACTIVO',
    INACTIVO: 'INACTIVO',
  };

  const Enum_FaseProyecto ={
    INICIADO : "INICIADO",
    EN_DESARROLLO : "EN_DESARROLLO",
    TERMINADO : "TERMINADO",
    NULA : "NULA"
  }
  
  const Enum_TipoObjetivo = {
    GENERAL: 'GENERAL',
    ESPECIFICO: 'ESPECIFICO',
  };

  const Enum_EstadoInscripcion = {
    ACEPTADO: 'ACEPTADO',
    RECHAZADO: 'RECHAZADO',
    PENDIENTE: 'PENDIENTE',

  };

  const Enum_Objetivos = {
    GENERAL: 'general',
    ESPECIFICO: 'especifico',
  };
  
  export { Enum_EstadoInscripcion, Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto,Enum_FaseProyecto, Enum_TipoObjetivo, Enum_Objetivos };