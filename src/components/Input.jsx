import React from 'react'

const Input = ({ label, type = 'text', placeholder, value, onChange, disabled, required, error, className, ...props }) => {
  return (
    <div className={`input-group ${error ? 'error' : ''} ${className || ''}`}>
      {label && <label className="input-label" htmlFor={label}>{label}</label>}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={
          `input-control ${error ? 'error' : ''}`
        }
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default Input