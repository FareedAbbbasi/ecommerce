// import React from 'react'
import FlashSales from '../components/FlashSales'
import ViewAllProductsButton from '../components/ViewAllProductsButton'
import Line from '../components/ui/line'
import CategorySection from '../components/categorySection/categorySection'
import BestSellingProducts from '../components/bestSelling/bestSellingProducts'
import AnnouncementBar from '../components/layout/AnnouncementBar'
import { Header } from '../layouts/Header'
import CategoryShowcase from '../components/categoryShowcase/categoryShowcase'
import MusicExperienceBanner from '../components/musicExperienceBanner/musicExperienceBanner'
import ProductList from '../components/productList/productList'
import NewArrival from '../components/newArrivalSection/newArrival'
import Services from '../components/servies/services'
import Footer from '../layouts/footer'

const Home:React.FC = () => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <Line width='w-[100%]' />
      <CategoryShowcase />
      <FlashSales />
      <ViewAllProductsButton />
      <Line />
      <CategorySection />
      <div className='my-[70px]'>
        <Line />
        <BestSellingProducts/>
      </div>
      <MusicExperienceBanner />
      <ProductList />
      <NewArrival />
      <Services />
      <Footer />
      
    </div>
  )
}

export default Home