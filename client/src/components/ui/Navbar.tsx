import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-12">
          <li>
            <Link className="text-[16px]" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-[16px]"  to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="text-[16px]"  to="/about">About</Link>
          </li>
          <li>
            <Link className="text-[16px]"  to="/signUp">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar