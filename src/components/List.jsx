import React from 'react'

export default function List({text,className}) {
  
  return (
    <li className={`md:text-lg list-none cursor-pointer font-normal font-mus relative duration-1000	 ${className}`}>{text}</li>
  )
}
