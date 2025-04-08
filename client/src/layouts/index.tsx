import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

interface props  {
    children: ReactNode 
}
export const index = ({children}:props) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
