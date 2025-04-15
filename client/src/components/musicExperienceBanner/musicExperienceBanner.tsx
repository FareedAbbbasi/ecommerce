// import React from 'react'

import CountDown from "../CountDown"
import Button from "../ui/button"

const MusicExperienceBanner = () => {
    return (
        <div className="w-full flex justify-center items-center max-w-[1170px] h-auto min-h-[500px] bg-black mx-auto text-white mb-[71px] flex-wrap">
            <div className="">
                <p className="text-[#00FF66] text-[16px] font-semibold">Categories</p>
                <h1 className="w-full text-[48px] font-semibold max-w-[443px] h-auto py-[32px]">Enhance Your Music Experience</h1>
                <CountDown />
                <div className="mt-8">
                    <Button name="Buy Now!" width="w-[171px]" hight="h-[56px]" bg="bg-[#00FF66]" />
                </div>
            </div>
            <div>
                <img src="/src/assets/products/sound.png" alt="" />
            </div>
        </div>
    )
}

export default MusicExperienceBanner