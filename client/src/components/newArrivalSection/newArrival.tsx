// import React from 'react'

import StartBox from "../StartBox"

const NewArrival = () => {
    return (
        <div className='w-full max-w-[1170px] h-auto min-h-[768px]  mx-auto'>
            <div className="mb-[60px]">
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
            <div className="flex flex-wrap lg:flex-nowrap gap-6 text-[#FAFAFA]">
                <div className="flex gap-[30px] relative group w-full items-end ">
                    <div className="bg-black w-full max-w-[570px] h-auto min-h-[600px] rounded-[4px] flex justify-center items-end ">
                        <img src="/src/assets/new-arrival/playstation.png" alt="Main" className="" />
                    </div>
                    <div className="w-full max-w-[242px] h-auto min-h-[122px] absolute flex flex-col mb-8 ml-8">
                        <h2 className=" text-[24px] font-semibold">PlayStation 5</h2>
                        <h3 className="text-[14px] py-4">Black and White version of the PS5 coming out on sale.</h3>
                        <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                    </div>

                </div>
                <div className=" flex flex-col w-full max-w-[570px] h-auto min-h-[600px] gap-8">
                    <div className="w-full max-w-[570px] relative group h-auto min-h-[284px] bg-black rounded  flex items-end">
                        <div className="w-full max-w-[255px] h-auto min-h-[122px] absolute flex flex-col mb-8 ml-8">
                            <h2 className=" text-[24px] font-semibold">Women’s Collections</h2>
                            <h3 className="text-[14px] py-4">Featured woman collections that give you another vibe. </h3>
                            <a href="" className="text-[16px] font-medium underline">Shop Now</a>
                        </div>
                        <div className=" w-full flex justify-end ">
                            <img src="/src/assets/new-arrival/women-Collectios.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full max-w-[570px] h-auto min-h-[284px] bg-gray-200 flex flex-wrap gap-4 justify-between">
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