import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Input } from "../../components/input.jsx";
import { ButtonLoading } from "../../components/botonRe.jsx";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData.jsx";
import { useAuth } from "../../context/authContext.js"
import { REGISTRO } from "../../graphql/auth/mutations.js"
import { DropDown } from "../../components/dropDown.js";
import { Enum_Rol } from "../../utils/enums.js";

const Register = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { setToken } = useAuth();
    let navigate = useNavigate();

    const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(REGISTRO);

    const submitForm = (e) => {
        e.preventDefault();
        registro({ variables: formData });
    };

    useEffect(() => {
        if (dataMutation) {
          if (dataMutation.registro.error) {
            console.error('MOSTRAR MENSAJE DE ERROR AQUI');
          }
          setToken(dataMutation.registro.token);
          navigate('/');
        }
      }, [dataMutation, setToken, navigate]);

    return (
        <div className='caja'>
            <h1 className='h1'>Registro</h1> 
            <form className='formulario' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <div className='interno'>              
                    <Input label='Nombre' name='nombre' type='text' placeholder='nombre' required />
                    <Input label='Apellido' name='apellido' type='text' placeholder='apellido' required />
                    <Input label='Documento' name='identificacion' type='text' placeholder='documento de identidad' required />
                    <DropDown label='Rol deseado' name='rol' required={true} options={Enum_Rol} />
                    <Input label='Correo' name='correo' type='email' placeholder='correo electronico' required />
                    <Input label='Contraseña' name='password' type='password' placeholder='contraseña' required />
                    <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={false}
                    text='Registrar'
                    />
                </div>    
            </form>
            <div className='enlace'>
                <span className='p'>Tienes cuenta?</span>
                <Link to='/login'>
                    <span className='p'>Inicia sesión</span>
                </Link>
            </div>
        </div>
    )
}

export {Register};
