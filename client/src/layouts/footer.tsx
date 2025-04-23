
import { SendHorizonal } from "lucide-react"
import Line from "../components/ui/line"

const Footer = () => {
  return (
    <div className="w-full h-auto min-h-[440px] bg-[#000000] mx-auto flex flex-col justify-center items-center">
      <div className="w-full max-w-[1170px] h-auto min-h-[236px]  text-white flex gap-[87px]">
        <div className="w-full max-w-[217px] h-auto min-h-[188px]">
          <h2 className="text-[24px] font-bold">Exclusive</h2>
          <h3 className="text-[20px] font-medium py-6">Subscribe</h3>
          <h4 className=" text-[16px]">Get 10% off your first order</h4>
          <div className="flex w-full max-w-[217px] h-[48px] border-[2px] gap-8 rounded p-3 mt-4">
            <input className="w-full max-w-[130px] h-auto min-h-[24px] outline-none bg-transparent text-white" type="text" placeholder="Enter your email" />
            <SendHorizonal className="w-full max-w-[24px] h-auto  min-h-[24px]" />
          </div>
        </div>
        <div className="w-full max-w-[217px] h-auto min-h-[188px]">
          <h2 className="text-[20px] font-medium">Support</h2>
          <h3 className="text-[16px] py-6">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
          <h4 className="text-[16px]">exclusive@gmail.com</h4>
          <p className="mt-4 text-[16px]">+88015-88888-9999</p>
        </div>
        <div className="w-full max-w-[123px] h-auto min-h-[236px]">
          <h2 className="text-[20px]  font-medium">Account</h2>
          <h3 className="text-[16px] py-6">My Account</h3>
          <h4 className="text-[16px]">Cart</h4>
          <h5 className="mt-4 text-[16px] mb-4">Wishlist</h5>
          <h6 className="text-[16px]">Shop</h6>
        </div>
        <div className="w-full max-w-[109px] h-auto min-h-[196px]">
          <h2 className="text-[20px] font-medium">Quick Link</h2>
          <h3 className="text-[16px] py-6">Privacy Policy</h3>
          <h4 className="text-[16px]">Terms Of Use</h4>
          <h5 className="mt-4 text-[16px] mb-4">FAQ</h5>
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
          <div className=" w-full max-w-[168px] h-auto min-h-[24px] mt-6 flex gap-6">
            <img src="/src/assets/footer/faceBook.png" alt="" />
            <img src="/src/assets/footer/twitter.png" alt="" />
            <img src="/src/assets/footer/instagram.png" alt="" />
            <img src="/src/assets/footer/linked.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Line width='w-[100%]' />
      </div>

    </div>
  )
}

export default Footer