// import React from 'react'

import StartBox from "../StartBox"

const NewArrival = () => {
    return (
        <div className='w-full max-w-[1170px] h-auto min-h-[768px] mx-auto flex flex-col px-0 md:px-6'>
            <div className="mb-[60px] flex flex-col tablet:items-center">
                <div className="flex justify-center sm:justify-start gap-2 sm:gap-4">
                    <StartBox />
                    <div className="flex justify-center items-center">
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                            This Month
                        </p>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <h3 className="font-semibold text-center sm:text-start text-xl sm:text-2xl md:text-3xl lg:text-4xl">New Arrival</h3>
                </div>
            </div>
            <div className="w-full flex flex-wrap tablet:flex-col md:flex-nowrap gap-6 text-[#FAFAFA] px-4 md:px-0">
                <div className="w-full flex gap-[30px] relative group items-end justify-center">
                    <div className="bg-black w-full max-w-[570px] h-auto min-h-[400px] tablet:min-h-[600px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[600px] rounded-[4px] flex justify-center items-end">
                        <img src="/src/assets/new-arrival/playstation.png" alt="Main"/>
                    </div>
                    <div className="w-full max-w-[242px] h-auto min-h-[122px] absolute flex flex-col mb-8 ml-8">
                        <h2 className=" text-[24px] font-semibold">PlayStation 5</h2>
                        <h3 className="text-[14px] py-4">Black and White version of the PS5 coming out on sale.</h3>
                        <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                    </div>
                </div>
                <div className="w-full flex flex-col max-w-[570px] h-auto min-h-[600px] gap-8 md:mx-auto">
                    <div className="w-full max-w-[570px] relative group h-auto min-h-[284px] bg-black rounded flex items-end">
                        <div className="w-full max-w-[255px] h-auto min-h-[122px] absolute flex flex-col mb-8 ml-8">
                            <h2 className=" text-[24px] font-semibold">Women’s Collections</h2>
                            <h3 className="text-[14px] py-4">Featured woman collections that give you another vibe. </h3>
                            <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                        </div>
                        <div className=" w-full flex justify-end ">
                            <img src="/src/assets/new-arrival/women-Collectios.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full max-w-[570px] h-auto min-h-[284px] flex flex-wrap md:flex-nowrap gap-4 justify-between">
                        <div className="bg-black w-full max-w-[270px] h-auto min-h-[284px] relative group flex flex-col justify-center items-center rounded">
                            <div className="w-full max-w-[190px] h-auto min-h-[221px]">
                                <img src="/src/assets/new-arrival/speak.png" alt="" />
                            </div>
                            <div className="w-full max-w-[242px] h-auto min-h-[122px] flex flex-col mb-8 ml-8 absolute mt-[144px]">
                                <h2 className=" text-[24px] font-semibold">Speakers</h2>
                                <h3 className="text-[14px] py-4">Amazon wireless speakers</h3>
                                <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                            </div>
                        </div>

                        <div className="bg-black w-full max-w-[270px] h-auto min-h-[284px] relative group flex flex-col justify-center items-center rounded">
                            <div className="w-full max-w-[190px] h-auto min-h-[221px]">
                                <img src="/src/assets/new-arrival/perume.png" alt="" />
                            </div>
                            <div className="w-full max-w-[242px] h-auto min-h-[122px] flex flex-col mb-8 ml-8 absolute mt-[144px]">
                                <h2 className=" text-[24px] font-semibold">Perfume</h2>
                                <h3 className="text-[14px] py-4">GUCCI INTENSE OUD EDP</h3>
                                <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival