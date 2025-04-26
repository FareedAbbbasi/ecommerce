// import React from 'react'

import { ArrowRightIcon } from "lucide-react"

const CategoryShowcase = () => {
    const categories = [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty"
    ]
    return (
        <div className='flex w-full max-w-[1170px] h-auto min-h-[344px]  mx-auto mt-[40px] mb-[50px] md:mb-[100px] lg:mb-[140px] tablet:px-5 lg:px-7 flex-wrap md:flex-nowrap'>
            <div className=" px-4 md:px-4 lg:px-0">
                {categories.map((category, index)=> (
                    <div key={index} className="pb-4">
                        <a href=""><h3 className="text-[16px]">
                            {category}
                        </h3></a>
                    </div>
                ))}
            </div>
            <div className="h-[384px] border bg-[#828282] ml-4 mr-[45px]"></div>
            <div className="w-full flex max-w-[892px] h-auto min-h-[344px] bg-black sm:ml-0 md:ml-[45px] text-white justify-center items-center">
                <div className=" px-5 md:px-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 tablet:gap-[10px] md:gap-3 lg:gap-[14.5px]">
                        <img src="/src/assets/products/logo.png" alt="" />
                        <p className="">iPhone 14 Series</p>
                    </div>
                    <h1 className="w-full max-w-[294px] h-auto min-h-[120px] text-[25px] sm:text-[25px] tablet:text-[30px] md:text-[35px] lg:text-[48px] font-semibold mt-2 md:mt-4 lg:mt-5 mb-[22px]">Up to 10% off Voucher</h1>
                    <div className="flex gap-1 md:gap-2">
                       <a className="underline" href="">Shop Now</a>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div>
                    <img src="/src/assets/products/phone.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default CategoryShowcase