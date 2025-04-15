import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 sm:gap-5 md:gap-10 lg:gap-12">
          <li>
            <Link className="sm:text-[14px] md:text-[16px]" to="/">Home</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px]"  to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px]"  to="/about">About</Link>
          </li>
          <li>
            <Link className="sm:text-[14px] md:text-[16px]"  to="/signUp">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar