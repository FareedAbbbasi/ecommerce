import { useState } from "react";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';



const UserContact = () => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address,setAddress] = useState("")

  const handleContact = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstNameReqex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/
    const lastNameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/
    const emailReqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstNameReqex.test(firstName)) {
      toast.error("Please enter a valid fist name")
    }

    if (!lastNameRegex.test(lastName)) {
      toast.error("Please enter a last name")
    }

    if(!emailReqex.test(email)) {
      toast.error("Please enter a valid email")
    }
  }
  return (
    <div className="w-full max-w-[1170px] h-auto min-h-[720px] mx-auto px-4 md:px-0 mt-[80px] mb-[140px]">
      <div className="flex justify-between" >
        <nav>
          <ol className="flex gap-3">
            <li>
              <Link className="text-[14px] text-[#7D8184]" to="/">Home</Link>
            </li>
            <li>
              <span className="text-[#7D8184]">/</span>
            </li>
            <li className="text-[14px]">My Account</li>
          </ol>
        </nav>
        <p className="text-sm">Welcome! <span className="text-[#DB4444]">Md Rimel</span></p>
      </div>

      <div className="flex gap-[30px] tablet:gap-[40px] md:gap-[70px] lg:gap-[100px] mt-[30px] tablet:mt-[40px] md:mt-[60px] lg:mt-[80px] justify-between">
        <div className="flex flex-col gap-6">
          <div className="w-full max-w-[200px] h-auto">
            <h1 className="text-[16px]">Manage My Account</h1>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
              <Link to="" className="text-[16px] text-[#DB4444]">My Profile</Link>
              <Link to="" className="text-[#7D8184] text-[16px]">Address Book</Link>
              <Link to="" className="text-[#7D8184] text-[16px]">My Payment Options</Link>
            </div>
          </div>
          <div className="w-full max-w-[200px] h-auto">
            <h1 className="text-[16px]">Manage My Account</h1>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
              <Link to="" className="text-[16px] text-[#DB4444]">My Orders</Link>
              <Link to="" className="text-[#7D8184] text-[16px]">My Returns</Link>
              <Link to="" className="text-[#7D8184] text-[16px]">My Cancellations</Link>
            </div>
          </div>
          <h1 className="text-[16px]">My WishList</h1>
        </div>
        <form action="" onSubmit={handleContact} className="w-full max-w-[870px] h-auto min-h-[630px] rounded shadow-md px-[80px] py-10">
          <h1 className="text-[#DB4444] text-[20px] font-medium">Edit Your Profile</h1>
          <div className="flex gap-[50px] flex-wrap">
            <div className="w-full max-w-[330px] h-auto min-h-[82px] mt-4 p-2">
              <h2 className="">First Name</h2>
              <input type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder="Fareed" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
            </div>
            <div className="w-full max-w-[330px] h-auto min-h-[82px] mt-4 p-2 flex-wrap">
              <h2 className="">Last Name</h2>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Abbas" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
            </div>
          </div>
          <div className="flex gap-[50px]">
            <div className="w-full max-w-[330px] h-auto min-h-[82px] mt-4 p-2">
              <h2 className="">Email</h2>
              <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="rimel1111@gmail.com" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
            </div>
            <div className="w-full ax-w-[330px] h-auto min-h-[82px] mt-4 p-2">
              <h2 className="">Address</h2>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Kingston, 5236, United State" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
            </div>
          </div>
          <div>
            <h2 className="text-[16px]">Password Changes</h2>
            <div className="flex flex-col gap-4 mt-2">
              <input type="text" placeholder="Current Passwod" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
              <input type="text" placeholder="New Passwod" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
              <input type="text" placeholder="Confirm New Passwod" className=" outline-none border-none w-full py-3 bg-[#F5F5F5] rounded px-4" />
            </div>
          </div>

          <div className="w-full h-auto min-h-[56px] flex gap-8 justify-end mt-6">
            <button className=" py-4 px-[48px] rounded cursor-pointer">Cance</button>
            <button type='submit' className="text-white py-4 px-[48px] bg-[#DB4444] rounded cursor-pointer">Save Changes</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default UserContact