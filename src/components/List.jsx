import React from 'react'

export default function List({text,className}) {
  return (
    <li className={`text-lg text-black font-semibold font-mus ${className}`}>{text}</li>
  )
}
