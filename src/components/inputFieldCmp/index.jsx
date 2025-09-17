import React from 'react'

const InputCmp = ({onChange,placeholder ,type="text",value}) => {
  return (
    <>
      <input  value={value} type={type} placeholder={placeholder} onChange={onChange}  />
    </>
  )
}

export default InputCmp
