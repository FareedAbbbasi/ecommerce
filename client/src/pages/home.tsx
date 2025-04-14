// import React from 'react'
import FlashSales from '../components/FlashSales'
import ViewAllProductsButton from '../components/ViewAllProductsButton'
import Line from '../components/ui/line'
import CategorySection from '../components/categorySection/categorySection'
import BestSellingProducts from '../components/bestSelling/bestSellingProducts'
import AnnouncementBar from '../components/layout/AnnouncementBar'
import { Header } from '../layouts/Header'

const Home:React.FC = () => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <FlashSales />
      <ViewAllProductsButton />
      <Line />
      <CategorySection />
      <div className='my-[70px]'>
        <Line />
        <BestSellingProducts/>
      </div>
    </div>
  )
}

export default Home