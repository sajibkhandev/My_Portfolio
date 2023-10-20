import React from 'react'

export default function Button({text,className}) {
  return (
    <button className={`text-white md:text-xl font-bold font-robo py-3 px-5 md:py-4 md:px-9 bg-secondary rounded  ${className}`}>{text}</button>
  )
}
