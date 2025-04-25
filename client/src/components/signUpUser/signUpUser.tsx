// import React from 'react'

import { Link } from "react-router-dom"
import Line from "../ui/line"

const SignUpUser = () => {
  return (
    <div className='w-full max-w-[1305px] h-auto min-h-[781px] flex gap-[30px] tablet:gap-[70px] md:gap-[100px] lg:gap-[129.9px] flex-wrap p-5 lg:flex-nowrap'>
      <div className="w-full max-w-[805px] h-auto min-h-[400px] tablet:min-h-[600px] md:min-h-[700px] lg:min-h-[781px] bg-[#CBE4E8] flex justify-center items-center">
        <img src="/src/assets/signUp/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="w-full max-w-[371px] min-h-[530px] mt-[30px] tablet:mt-[70px] md:mt-[100px] lg:mt-[125.5px]">
        <div>
          <h1 className="text-[36px] font-medium mb-6">Create an account</h1>
          <p className="text-[16px]">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-[40px] mt-[48px]">
          <div className="flex flex-col gap-2">
            <input type="text" placeholder="Name" className="outline-none" />
            <Line width="100%" />
          </div>
          <div className="flex flex-col gap-2">
            {/* <h2 className="text-[16px] text-[#999999]">Email or Phone Number</h2> */}
            <input type="email" placeholder="Email or Phone Number" className="outline-none" />
            <Line width="100%" />
          </div>
          <div className="flex flex-col gap-2">
            {/* <h2 className="text-[16px] text-[#999999]">Password</h2> */}
            <input type="password" placeholder="password" className="outline-none" />
            <Line width="100%" />
          </div>
        </div>
        <div className="mt-[40px] flex flex-col gap-4">
          <div className="w-full">
            <button className="text-[16px] font-medium w-full py-3 bg-[#DB4444] rounded text-[#FAFAFA]">Create Account</button>
          </div>
          <button className="flex p-3  border-2 border-[#999999] w-full justify-center items-center rounded gap-4">
            <img src="/src/assets/signUp/Icon-Google.png" alt="" />
            <span>Sign up with Google</span>
          </button>
          <div className="flex gap-4 justify-center">
            <p className="text-[#999999]">Already have account?{" "}</p>
            <Link to="/login" className="hover:underline">Log in</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpUser