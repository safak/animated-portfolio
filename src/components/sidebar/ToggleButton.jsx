import React from 'react'

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=> setOpen((prev) => !prev)}>
        bruh
    </button>
  )
}

export default ToggleButton