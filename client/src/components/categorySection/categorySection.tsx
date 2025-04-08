// import React from 'react'
import StartBox from '../StartBox'
import MoveArrow from '../MoveArrow'

const CategorySection = () => {
    return (
        <div className="flex flex-col gap-10 px-4 md:px-6 lg:px-8 xl:px-12 mt-[80px]">
            <div className="flex flex-wrap justify-between items-center w-full max-w-[1308px] mx-auto">
                <div className="flex flex-wrap items-end gap-6 sm:gap-10 lg:gap-[87px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 sm:gap-4">
                            <StartBox />
                            <div className="flex justify-center items-center">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                                    Categories
                                </p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Browse By Category
                        </h1>
                    </div>
                </div>
                <div className="flex justify-end items-end mt-4 sm:mt-0">
                    <MoveArrow />
                </div>
            </div>
        </div>
    )
}

export default CategorySection