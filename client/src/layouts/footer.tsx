
import { Copyright, SendHorizonal } from "lucide-react"
import Line from "../components/ui/line"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailReqex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailReqex.test(email)) {
      toast.error("Please enter a valid email")
      return
    }
    else {
      toast.success("Emai send successfully!")
    }
  }
  return (
    <div className="w-full h-auto min-h-[440px] bg-[#000000] mx-auto flex flex-col justify-center items-center">
      <div className="w-full max-w-[1170px] h-auto min-h-[236px] text-white flex gap-[30px] tablet:gap-[40px] md:gap-[55px] lg:gap-[87px] flex-wrap  justify-center py-4 md:py-5 md:px-5 lg:py-10 md:flex-nowrap">
        <div className="w-full max-w-[217px] h-auto min-h-[188px]">
          <h2 className="text-[24px] font-bold">Exclusive</h2>
          <h3 className="text-[20px] font-medium py-6">Subscribe</h3>
          <h4 className=" text-[16px]">Get 10% off your first order</h4>
          <form action="" onSubmit={handleEmail} className="flex w-full max-w-[217px] h-[48px] border-[2px] gap-8 rounded p-3 mt-4">
            <input value={email} required onChange={(e) => setEmail(e.target.value)} className="w-full text-[16px] max-w-[130px] h-auto min-h-[24px] outline-none bg-transparent text-white" type="email" placeholder="Enter your email" />
            <button type="submit">
              <SendHorizonal  className="w-full max-w-[24px] h-auto  min-h-[24px] cursor-pointer" />
            </button>
          </form>
        </div>
        <div className="w-full max-w-[217px] h-auto min-h-[188px]">
          <h2 className="text-[20px] font-medium">Support</h2>
          <h3 className="text-[16px] py-6">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
          <h4 className="text-[16px]">exclusive@gmail.com</h4>
          <p className="mt-4 text-[16px]">+88015-88888-9999</p>
        </div>
        <div className="w-full max-w-[123px] h-auto min-h-[236px] flex flex-col">
          <h2 className="text-[20px] font-medium">Account</h2>
          <Link to="/account" className="text-[16px] py-6">My Account</Link>
          <Link to="/cart" className="text-[16px]">Cart</Link>
          <Link to="/wishlist" className="mt-4 text-[16px] mb-4">Wishlist</Link>
          <Link to="/shop" className="text-[16px]">Shop</Link>
        </div>

        <div className="w-full max-w-[109px] h-auto min-h-[196px] flex flex-col">
          <h2 className="text-[20px] font-medium">Quick Link</h2>
          <Link to="/" className="text-[16px] py-6">Privacy Policy</Link>
          <Link to="/" className="text-[16px]">Terms Of Use</Link>
          <Link to="/" className="mt-4 text-[16px] mb-4">FAQ</Link>
          <h6 className="text-[16px]">Contact</h6>
        </div>
        <div className="w-full max-w-[198px] h-auto min-h-[162px]">
          <h2 className="text-[20px] font-medium">Download App</h2>
          <p className="text-[12px] mt-[24px] mb-2">Save $3 with App New User Only</p>
          <div className=" flex gap-2">
            <div>
              <img src="/src/assets/footer/Qrcode 1.png" alt="" />
            </div>
            <div>
              <img src="/src/assets/footer/download-appstore.png" alt="" />
              <img src="/src/assets/footer/GooglePlay.png" alt="" />
            </div>
          </div>
          <div className="w-full max-w-[168px] h-auto min-h-[24px] mt-6 flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/footer/faceBook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/footer/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/footer/instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/footer/linked.png" alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
      <div className=" pt-[60px] pb-4 w-full">
        <Line width="w-[100%]" color="bg-[#141414]" />
      </div>
      <div className="flex text-[#3D3D3D] gap-[6px] pb-6 px-3 tablet:px-0">
        <Copyright />
        <span className="text-[16px]">Copyright Rimel 2022. All right reserved</span>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  )
}

export default Footer