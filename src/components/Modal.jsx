import React from 'react';


const Modal = ({estado,setEstado,title}) =>{
    return(
        <>
            {estado &&
            <div className="overlay">
                <div className='contenedorModal'>
                    <div className='headerModal'>
                        <h3>{title}</h3>
                    </div>
                    <button className='botonCerrarM' onClick={()=>setEstado(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                    <div className='bodyModal'>
                        
                    </div>
                    
                </div>
            </div>
            }
        </>
    )
}

export default Modal