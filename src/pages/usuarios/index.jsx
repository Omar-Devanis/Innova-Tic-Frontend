import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from "../../graphql/usuarios/queries.jsx";


const IndexUsuarios = () => {
    const {data, error, loading} = useQuery(GET_USUARIOS);

    useEffect(() =>{
        console.log('data servidor', data);
    }, [data]);
    return( 
        <div>
            <h1>usuarios</h1>
        </div>
    );
};

export {IndexUsuarios};
