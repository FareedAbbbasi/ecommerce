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
        <div className='flex w-full max-w-[1170px] h-auto min-h-[344px]  mx-auto mt-[40px] mb-[140px]'>
            <div className=''>
                {categories.map((category, index)=> (
                    <div key={index} className="pb-4">
                        <h3 className="text-[16px]">
                            {category}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="h-[384px] border bg-[#828282] ml-4 mr-[45px]"></div>
            <div className="w-full flex max-w-[892px] h-auto min-h-[344px] bg-black ml-[45px] text-white justify-center items-center">
                <div className="">
                    <div className="flex items-center gap-[14.5px]">
                        <img src="/src/assets/products/logo.png" alt="" />
                        <p className="">iPhone 14 Series</p>
                    </div>
                    <h1 className="w-full max-w-[294px] h-auto min-h-[120px] text-[48px] font-semibold mt-5 mb-[22px]">Up to 10% off Voucher</h1>
                    <div className="flex gap-2">
                       <a className="underline" href=""> Shop Now</a>
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