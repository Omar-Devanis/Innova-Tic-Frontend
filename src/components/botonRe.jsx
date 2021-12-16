import React from 'react';
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, clase, loading, text, onClick = () =>{} }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type='submit'
      className={clase}
    >
      {loading ? <ReactLoading type='balls' height={30} width={30} /> : text}
    </button>
  );
};

export  {ButtonLoading};