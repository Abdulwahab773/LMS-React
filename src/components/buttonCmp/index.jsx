import React from 'react'

const ButtonCmp = ({onClick ,title="Button"}) => {
  return (
    <>
      <button onClick={onClick} >{title}</button>
    </>
  )
}

export default ButtonCmp
