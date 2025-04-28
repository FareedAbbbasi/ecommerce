import { Link } from "react-router-dom"
import Line from "../ui/line"
import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const handleSignIn = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailReqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,15}$/;

        if(!emailReqex.test(email)) {
            toast.error("Please enter a valid email!");
            return
        }

        if(!passwordRegex.test(password)) {
            toast.error("Password must be 6-15 characters and include uppercase, lowercase, number, and special character!")
            return;
        }
        console.log(email, " ", password)
        setEmail("");
        setPassword("");
        toast.success("Login successfully!");
    } 
    return (
        <div className='w-full max-w-[1305px] h-auto min-h-[781px] flex gap-[30px] tablet:gap-[70px] md:gap-[100px] lg:gap-[129.9px] flex-wrap p-5 lg:flex-nowrap mt-[20px] tablet:mt-[30px] md:mt-[40px] lg:mt-[55px] mb-[3opx] tablet:mb-[50px] md:mb-[60px] lg:mb-[85px]'>
            <div className="w-full max-w-[805px] h-auto min-h-[400px] tablet:min-h-[600px] md:min-h-[700px] lg:min-h-[781px] bg-[#CBE4E8] flex justify-center items-center">
                <img src="/src/assets/signUp/dl.beatsnoop 1.png" alt="" />
            </div>
            <div className="w-full max-w-[371px] min-h-[530px] mt-[30px] tablet:mt-[70px] md:mt-[100px] lg:mt-[125.5px]">
                <div>
                    <h1 className="text-[36px] font-medium mb-6">Log in to Exclusive</h1>
                    <p className="text-[16px]">Enter your details below</p>
                </div>
                <form onSubmit={handleSignIn} action="" className="flex flex-col gap-[40px] mt-[48px]">
                    <div className="flex flex-col gap-2">
                        <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} required placeholder="Email or Phone Number" className="outline-none" />
                        <Line width="100%" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-none" />
                        <Line width="100%" />
                    </div>
                    <div className="flex gap-7 justify-between">
                        <div className="">
                            <button type="submit" className=" py-3 px-14 text-[16px] font-medium  bg-[#DB4444] rounded text-[#FAFAFA] hover:bg-[#b83838] transition-colors duration-300">Log in</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link className="text-[#DB4444] text-[16px]" to="/forgotpassword">Forget Password?</Link>
                        </div>
                    </div>
                    <ToastContainer position="top-center" />
                </form>
            </div>

        </div>
    )
}

export default Login