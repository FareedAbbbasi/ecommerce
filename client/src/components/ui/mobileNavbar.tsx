
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className="relative group">
      <nav className="absolute lg:static w-full ">
        <ul className="flex flex-col items-center lg:hidden p-3 lg:p-0 lg:items-start lg:flex-row w-full bg-green-100 text-black lg:bg-transparent  gap-4 sm:gap-5 md:gap-10 lg:gap-12 ">
          <li>
            <Link className="sm:text-[14px] md:text-[16px]  hover:underline underline-offset-[7px] decoration-[#808080]" to="/">Home</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px] hover:underline underline-offset-[7px] decoration-[#808080]"  to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px] hover:underline underline-offset-[7px] decoration-[#808080]"   to="/about">About</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px] hover:underline underline-offset-[7px] decoration-[#808080]"   to="/signUp">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar