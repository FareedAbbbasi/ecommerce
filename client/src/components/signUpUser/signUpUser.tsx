import { Link } from "react-router-dom"
import Line from "../ui/line"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e:any) => {
    e.preventDefault();
    console.log("name:", name, "Email:",email , "password", password )
    setName("");
    setEmail("");
    setPassword("");
    toast.success("Account created successfully!");

  }
  return (
    <div className='w-full max-w-[1305px] h-auto min-h-[781px] flex gap-[30px] tablet:gap-[70px] md:gap-[100px] lg:gap-[129.9px] flex-wrap p-5 lg:flex-nowrap mt-[20px] tablet:mt-[30px] md:mt-[40px] lg:mt-[55px] mb-[3opx] tablet:mb-[50px] md:mb-[60px] lg:mb-[85px]'>
      <div className="w-full max-w-[805px] h-auto min-h-[400px] tablet:min-h-[600px] md:min-h-[700px] lg:min-h-[781px] bg-[#CBE4E8] flex justify-center items-center">
        <img src="/src/assets/signUp/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="w-full max-w-[371px] min-h-[530px] mt-[30px] tablet:mt-[70px] md:mt-[100px] lg:mt-[125.5px]">
        <div>
          <h1 className="text-[36px] font-medium mb-6">Create an account</h1>
          <p className="text-[16px]">Enter your details below</p>
        </div>
        <form onSubmit={handleSignUp} action="" className="flex flex-col gap-[40px] mt-[48px]">
          <div className="flex flex-col gap-2">
            <input type="text" required value={name} onChange={((e) => setName(e.target.value))} placeholder="Name" className="outline-none" />
            <Line width="100%" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or Phone Number" className="outline-none" />
            <Line width="100%" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="outline-none" />
            <Line width="100%" />
          </div>
          <button type="submit" className="text-[16px] font-medium w-full py-3 hover:bg-[#b83838] transition-colors duration-300 bg-[#DB4444] rounded text-[#FAFAFA] ">Create Account</button>
        </form>
        <div className="mt-[40px] flex flex-col gap-4">
          <div className="w-full">
          </div>
          <button className="flex p-3  border-2 border-[#999999] w-full justify-center items-center rounded gap-4">
            <img src="/src/assets/signUp/google-color-icon.png" alt="" />
            <span>Sign up with Google</span>
          </button>
          <button className="flex p-3  border-2 border-[#999999] w-full justify-center items-center rounded gap-4">
            <img className="filter grayscale" src="/src/assets/signUp/apple.png" alt="" />
            <span>Sign up with Apple</span>
          </button>
          <button className="flex p-3  border-2 border-[#999999] w-full justify-center items-center rounded gap-4">
            <img className="" src="/src/assets/signUp/facebook.png" alt="" />
            <span>Sign up with Facebook</span>
          </button>

          <div className="flex gap-4 justify-center">
            <p className="text-[#999999]">Already have account?{" "}</p>
            <Link to="/login" className="hover:underline underline-offset-[7px] decoration-[#999999] decoration-solid">Log in</Link>
          </div>
          <ToastContainer position="top-center" />
        </div>
      </div>

    </div>
  )
}

export default SignUpUser