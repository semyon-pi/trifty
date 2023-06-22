import React from 'react'
import SearchParams from './components/SearchParams'
import ProductsList from './components/ProductsList'
import CategoryInfo from './components/CategoryInfo'
import Breadcrumbs from './components/Breadcrumbs'

const Products = () => {
  return (
    <section>
      <div class='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <Breadcrumbs />
        <CategoryInfo />
        <SearchParams />
        <ProductsList />
      </div>
    </section>
  )
}

export default Products
