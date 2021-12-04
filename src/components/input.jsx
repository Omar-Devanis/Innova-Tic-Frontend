import React from 'react'

const Input = ({type, name, label, required, defaultValue, placeholder}) => {
    return (
            <label htmlFor={name} className="label">
                <span>{label}</span>
                <input 
                type={type}
                name={name}
                className='inputs' 
                placeholder={placeholder}
                required={required}
                defaultValue={defaultValue}
                />
            </label>
    )
}

export {Input};
