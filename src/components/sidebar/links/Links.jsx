import React from 'react'

const Links = () => {

  const items = [
    "Homapage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ];
  return (
    <div className='links'>{items.map(item=>(
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>
  )
}

export default Links