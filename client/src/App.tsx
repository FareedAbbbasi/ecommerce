// import { useState } from 'react'
import './App.css'
import BestSellingProducts from './components/bestSelling/bestSellingProducts'
import CategorySection from './components/categorySection/categorySection'
import FlashSales from './components/FlashSales'
import Header from './components/layout/header'
import Line from './components/ui/line'
import ViewAllProductsButton from './components/ViewAllProductsButton'

function App() {
  return (
    <div>
      <Header />
      <FlashSales />
      <ViewAllProductsButton />
      <Line />
      <CategorySection />
      <div className='my-[70px]'>
        <Line />
        <BestSellingProducts />
      </div>
    </div>

  )
}

export default App
