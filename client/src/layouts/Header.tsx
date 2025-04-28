import { Heart, Menu, Search, ShoppingCart } from "lucide-react"
import Navbar from "../components/ui/Navbar"
import { useState } from "react"
import MobileNavbar from "../components/ui/mobileNavbar";
export const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <div className='w-full max-w-[1170px] h-auto min-h-[38px] mx-auto mt-10 mb-4'>
      <div className="w-full flex justify-between items-center flex-wrap px-4 xl:*:px-0">
        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-bold">Exclusive</h1>
        <div className="hidden lg:block py-2 md:px-0 ">
          <Navbar />
        </div>
        <div className="flex gap-6 ">
          <div className="flex lg:bg-[#F5F5F5] py-[7px] px-5 md:flex">
            <input className=" bg-transparent outline-none backdrop-blur-none text-[12px] hidden lg:block" type="text" placeholder="What is you looking for?" />
            <Search className="w-4 h-4"/>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Heart  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <Menu className="lg:hidden cursor-pointer" onClick={(() => setIsOpen(!isopen))}/>
          </div>
        </div>
      </div>

      {/* mobile Navbar */}
      {isopen && (
          <div className="mt-4 w-full">
            <MobileNavbar />
          </div>
        )
      }
    </div>
  )
}