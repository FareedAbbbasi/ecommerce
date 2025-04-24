import { Car, Headphones, Ticket } from "lucide-react"


const Services = () => {
    return (
        <div className="w-full max-w-[943px] h-auto min-h-[161px] mx-auto my-[100px] md:my-[120px] lg:my-[140px] tablet:my-[100px] flex gap-[40px] tablet:gap-[50px] md:gap-[70px] lg:gap-[88px] flex-wrap  justify-center">
            <div className="w-full max-w-[249px] h-auto min-h-[161px] flex flex-col gap-6">
                <div className=" w-full max-w-[63px] h-auto min-h-[63px] p-[11px] bg-gray-300 rounded-[100%] text-white mx-auto">
                    <Car className="bg-black p-1 rounded-[100%] w-full max-w-[40px] h-auto min-h-[40px]" />
                </div>
                <div className="text-center">
                    <h2 className="text-[20px] font-semibold">FREE AND FAST DELIVERY</h2>
                    <h3 className="text-[14px]">Free delivery for all orders over $140</h3>
                </div>
            </div>
            <div className="w-full max-w-[249px] h-auto min-h-[161px] flex flex-col gap-6">
                <div className=" w-full max-w-[63px] h-auto min-h-[63px] p-[11px] bg-gray-300 rounded-[100%] text-white mx-auto">
                    <Headphones className="bg-black p-1 rounded-[100%] w-full max-w-[40px] h-auto min-h-[40px]" />
                </div>
                <div className="text-center">
                    <h2 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h2>
                    <h3 className="text-[14px]">Friendly 24/7 customer support</h3>
                </div>
            </div>
            <div className="w-full max-w-[249px] h-auto min-h-[161px] flex flex-col gap-6">
                <div className=" w-full max-w-[63px] h-auto min-h-[63px] p-[11px] bg-gray-300 rounded-[100%] text-white mx-auto">
                    <Ticket className="bg-black p-1 rounded-[100%] w-full max-w-[40px] h-auto min-h-[40px]" />
                </div>
                <div className="text-center">
                    <h2 className="text-[20px] font-semibold">MONEY BACK GUARANTEE</h2>
                    <h3 className="text-[14px]">We reurn money within 30 days</h3>
                </div>
            </div>
        </div>
    )
}

export default Services