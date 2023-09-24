import React from 'react'

export default function Button({text,className}) {
  return (
    <button className={`text-white text-xl font-bold font-robo py-4  px-8 bg-secondary rounded ${className}`}>{text}</button>
  )
}
