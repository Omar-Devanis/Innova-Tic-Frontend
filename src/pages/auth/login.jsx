import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Input } from "../../components/input.jsx";
import { ButtonLoading } from "../../components/botonRe.jsx";
import { useFormData } from "../../hooks/useFormData.jsx";
import { LOGIN } from "../../graphql/auth/mutations.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.js"
import { useMutation } from "@apollo/client";


const Login = () => {
    const { setToken } = useAuth();
    const {form, formData, updateFormData} = useFormData();
    const navigate = useNavigate();

    const [login, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();
        login({ variables: formData });
    };

    useEffect(() => {
        if (dataMutation) {
          if (dataMutation.login.token) {
            setToken(dataMutation.login.token);
            navigate('/perfil');
          }    
        }
      }, [dataMutation, setToken, navigate]);

    return (
        <div className='caja'>
            <h1 className= "h1">Inicio de sesión</h1>
            <form className="formulario" onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <div className='interno' >
                    <Input label='Correo' name='correo' type='email' required={true} />
                    <Input label='Contraseña' name='password' type='password' required={true} />
                    <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={loadingMutation}
                    text='Iniciar sesión'
                    clase='boton'
                    />
                </div>
                <div className="enlace">
                    <div className='t'>
                        <span className='p' >No tienes cuenta?</span>
                    </div>
                    <div>
                        <Link to='/auth/register'>
                            <span className='p subrayado' >registrate</span>
                        </Link>
                    </div>
                    
                </div>       
            </form>
        </div>
    )
}

export {Login};
