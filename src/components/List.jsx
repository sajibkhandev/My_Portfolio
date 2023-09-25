import React from 'react'

export default function List({text,className}) {
  return (
    <li className={`text-lg list-none cursor-pointer  font-normal font-mus ${className}`}>{text}</li>
  )
}
