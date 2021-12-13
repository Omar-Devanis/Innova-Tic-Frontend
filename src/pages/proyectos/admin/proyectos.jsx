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
                          <Link to={`/usuarios/editar/${p._id}`}>
                            <i className='fas fa-pen ' />
                          </Link>
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
