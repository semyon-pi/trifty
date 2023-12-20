import React, { useState } from 'react'

const HoverText = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='group relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <span className='absolute bg-black text-white p-2 rounded -top-12 right-0 w-40 text-center'>
          {text}
        </span>
      )}
    </div>
  )
}

export default HoverText
