import { useState } from 'react'
import './App.css'
import FlashSales from './components/FlashSales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FlashSales />
    </div>
 
  )
}

export default App
