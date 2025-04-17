// import React from 'react'
import Button from "../ui/button"
import PromoCountdown from "./promoCountdown"

const MusicExperienceBanner = () => {
    return (
        <div className="w-full flex justify-center items-center gap-1 tablet:gap-4 md:gap-6 p-5 tablet:p-7 md:p-10 lg:p-10 xl:p-0 max-w-[1170px] h-auto min-h-[500px] bg-black mx-auto text-white mb-[71px] flex-wrap">
            <div className="">
                <p className="text-[#00FF66] text-[16px] font-semibold">Categories</p>
                <h1 className="w-full font-semibold max-w-[443px] h-auto py-[15px] tablet:py-[20px] md:py-[25px] lg:py-[32px] text-[25px] sm:text-[25px] tablet:text-[30px] md:text-[35px] lg:text-[48px]">Enhance Your Music Experience</h1>
                <PromoCountdown />
                <div className="mt-4 tablet:mt-6 md:mt-8">
                    <Button name="Buy Now!" width="w-[171px]" hight="h-[56px]" bg="bg-[#00FF66]" />
                </div>
            </div>
            <div className="">
                <img src="/src/assets/products/sound.png" alt="" />
            </div>
        </div>
    )
}

export default MusicExperienceBanner