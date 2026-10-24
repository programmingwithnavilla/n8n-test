import React from 'react'

export default function Button({ children, onClick, className, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={
        ['btn', className, disabled ? 'btn--disabled' : ''].filter(Boolean).join(' ')
      }
    >
      {children}
    </button>
  )
}