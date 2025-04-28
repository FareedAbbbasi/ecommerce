import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgotpassword = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailReqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReqex.test(email)) {
            toast.error("Please enter a valid email!")
            return;
        }
        else {
            toast.success("Login Successfully!")
        }
        console.log("email:", email)
        setEmail("")
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-[500px] h-auto min-h-[250px] p-10 rounded-xl bg-gray-300 shadow-lg mx-4 tablet:mx-0">
                <h1 className="text-2xl font-semibold">Forgot Password</h1>
                <h2 className="text-[18px] font-medium mt-7 mb-2">Email</h2>
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none p-2 rounded w-full" placeholder="Enter Your Email" />
                    <button type="submit" className="text-[16px] font-medium w-full py-3 hover:bg-[#b83838] transition-colors duration-300 bg-[#DB4444] rounded text-[#FAFAFA] ">Submit</button>
                </form>
                <ToastContainer position="top-center" />
            </div>
        </div>
    )
}

export default Forgotpassword 
