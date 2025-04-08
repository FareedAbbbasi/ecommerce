// import { useState } from 'react'
import './App.css'
import CategorySection from './components/categorySection/categorySection'
import FlashSales from './components/FlashSales'
import Header from './components/layout/header'
import Line from './components/ui/line'
import ViewAllProductsButton from './components/ViewAllProductsButton'

function App() {
  // const [count, setCount] = useState(0)
// route "/" - Home
  return (
    <div>
      <Header />
      <FlashSales />
      <ViewAllProductsButton />
      <Line />
      <CategorySection />
    </div>
 
  )
}

export default App
