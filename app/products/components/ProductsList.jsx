'use client'
import React from 'react'
import Card from './Card'
import getAllItems from '@lib/getAllItems'

const ProductsList = async () => {
  const items = await getAllItems()

  return (
    <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {items.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
