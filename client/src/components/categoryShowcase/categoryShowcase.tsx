import { ArrowRightIcon } from "lucide-react"
import { useState } from "react";

interface SidesProps {
    id: number;
    title: string
    subtitle: string
    image: string
}

const sides: SidesProps[] = [
    {
        id: 1,
        title: "Up to 10% off Voucher",
        subtitle: "iPhone 14 Series",
        image: "/src/assets/products/phone.png"
    },
    {
        id: 2,
        title: "Big Deals on iPhone 13",
        subtitle: "iPhone 13 Series",
        image: "/src/assets/products/phone.png"
    },
    {
        id: 3,
        title: "Special Offer on iPhone 12",
        subtitle: "iPhone 12 Series",
        image: "/src/assets/products/phone.png",
    },
    {
        id: 3,
        title: "Special Offer on iPhone 12",
        subtitle: "iPhone 12 Series",
        image: "/src/assets/products/phone.png",
    },
    {
        id: 3,
        title: "Special Offer on iPhone 12",
        subtitle: "iPhone 12 Series",
        image: "/src/assets/products/phone.png",
    },
    {
        id: 3,
        title: "Special Offer on iPhone 12",
        subtitle: "iPhone 12 Series",
        image: "/src/assets/products/phone.png",
    }
]


const CategoryShowcase = () => {
    const [currentSide, setCurrentSide] = useState(0);
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
                {categories.map((category, index) => (
                    <div key={index} className="pb-4">
                        <a href=""><h3 className="text-[16px]">
                            {category}
                        </h3></a>
                    </div>
                ))}
            </div>
            <div className="h-[384px] border bg-[#828282] ml-4 mr-[45px]"></div>
            <div className="w-full max-w-[892px] h-auto min-h-[344px] bg-black">
                <div className="flex h-auto sm:ml-0 md:ml-[45px] text-white justify-center items-center py-6">
                    <div className=" px-5 md:px-10 bg-black flex flex-col justify-center">
                        <div className="flex items-center gap-2 tablet:gap-[10px] md:gap-3 lg:gap-[14.5px]">
                            <img src="/src/assets/products/logo.png" alt="" />
                            <p className="">{sides[currentSide].subtitle}</p>
                        </div>
                        <h1 className="w-full max-w-[294px] h-auto min-h-[120px] text-[25px] sm:text-[25px] tablet:text-[30px] md:text-[35px] lg:text-[48px] font-semibold mt-2 md:mt-4 lg:mt-5 mb-[22px]">{sides[currentSide].title}</h1>
                        <div className="flex gap-1 md:gap-2">
                            <a className="hover:underline decoration-solid underline-offset-[7px]" href="">Shop Now</a>
                            <ArrowRightIcon />
                        </div>

                    </div>
                    <div>
                        <img src={sides[currentSide].image} alt="" />
                    </div>

                </div>
                <div className="flex justify-center pt-4 gap-3 mb-4">
                    {sides.map((_,index) => (
                    <button key={index} onClick={()=> setCurrentSide(index)} className={`w-3 h-3 rounded-full ${currentSide===index? "bg-red-500" : "bg-gray-400"}`}></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryShowcase
