import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="">
      <nav className="">
        <ul className="flex p-3 md:p-0  text-black gap-4 sm:gap-5 md:gap-10 lg:gap-12 ">
          <li>
            <Link className="sm:text-[14px] md:text-[16px] hover:underline underline-offset-[7px] decoration-[#808080]" to="/">Home</Link>
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

export default Navbar