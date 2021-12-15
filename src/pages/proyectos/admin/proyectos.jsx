import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from '../../../graphql/proyectos/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { PrivateRoute } from '../../../components/PrivateRoute.jsx';

const AdminProyectos = () => {
    const {data, error, loading} = useQuery(GET_PROYECTOS);

    useEffect(() => {
        if (data) {
          console.log(`esto es lo que trae data: ${data}`)
        }
        }, [data]);

   /*  useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
        }, [error]); */
    
    if (loading) return <div>Cargando....</div>;
    return (
        <PrivateRoute roleList={
            ["ADMINISTRADOR"]
        }>
        <div>
            Proyectos:
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        <th>Nombre del Lider</th>
                        <th>E-mail</th>
                        <th>Fase</th>
                        <th>Estado</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
              {data && data.Proyectos ? (
                <>
                  {data.Proyectos.map((p) => {
                    console.log('data servidor', data)
                    return (
                      <tr key={p._id}>
                        <td>{p.nombre}</td>
                        <td>{p.lider.nombre} {p.lider.apellido}</td>
                        <td>{p.lider.correo}</td>
                        <td>{p.fase}</td>
                        <td>{p.estado}</td>
                        <td>
                          {/* <Link to={`/usuarios/editar/${p._id}`}>
                            <i className='fas fa-pen ' />
                          </Link> */}
                          <div className='iconEdit'>
                            <Link to={`editar/${p._id}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                            </Link>
                            
                          </div>   
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <div>No autorizado</div>
              )}
            </tbody>
            </table>
        </div>
        </PrivateRoute>
    )
}

export {AdminProyectos};
