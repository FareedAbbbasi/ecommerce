// import React from 'react'

import { Link } from "react-router-dom"
import Line from "../ui/line"

const Login = () => {
  return (
    <div className='w-full max-w-[1305px] h-auto min-h-[781px] flex gap-[30px] tablet:gap-[70px] md:gap-[100px] lg:gap-[129.9px] flex-wrap p-5 lg:flex-nowrap'>
      <div className="w-full max-w-[805px] h-auto min-h-[400px] tablet:min-h-[600px] md:min-h-[700px] lg:min-h-[781px] bg-[#CBE4E8] flex justify-center items-center">
        <img src="/src/assets/signUp/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="w-full max-w-[371px] min-h-[530px] mt-[30px] tablet:mt-[70px] md:mt-[100px] lg:mt-[125.5px]">
        <div>
          <h1 className="text-[36px] font-medium mb-6">Log in to Exclusive</h1>
          <p className="text-[16px]">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-[40px] mt-[48px]">
          <div className="flex flex-col gap-2">
            <input type="text" placeholder="Email or Phone Number" className="outline-none" />
            <Line width="100%" />
          </div>
          <div className="flex flex-col gap-2">
            {/* <h2 className="text-[16px] text-[#999999]">Password</h2> */}
            <input type="password" placeholder="Password" className="outline-none" />
            <Line width="100%" />
          </div>
        </div>
        <div className="mt-[40px] flex gap-7 justify-between">
          <div className="">
            <button className=" py-3 px-14 text-[16px] font-medium  bg-[#DB4444] rounded text-[#FAFAFA]">Log in</button>
          </div>
          <div className="flex justify-center items-center">
            <Link className="text-[#DB4444] text-[16px]" to="">Forget Password?</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login