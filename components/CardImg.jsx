import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CardImg = ({ src, width, height, alt, className, href, title }) => {
  return (
    <div>
      <Link href={href}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={className}
        />
        <h3 className='text-center font-bold py-2 lg:block hidden'>{title}</h3>
      </Link>
    </div>
  )
}

export default CardImg
