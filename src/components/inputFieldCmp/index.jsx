import React from 'react'

const InputCmp = ({onChange,placeholder ,type="text"}) => {
  return (
    <>
      <input  type={type} placeholder={placeholder} onChange={onChange}  />
    </>
  )
}

export default InputCmp
