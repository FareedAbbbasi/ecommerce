
import StartBox from '../StartBox'
import MoveArrow from '../MoveArrow'
import CategoryCard from '../categoryCard/categoryCard'

const CategorySection = () => {
    return (
        <div className="w-full max-w-[1170px] h-auto flex flex-col gap-[60px] mt-[80px] mx-auto px-3 sm:px-6 md:px-8 xl:px-0 mb-[70px]">
            <div className="flex flex-wrap justify-between items-center w-full max-w-[1308px] mx-auto">
                <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-[87px] w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex gap-2 sm:gap-4">
                            <StartBox />
                            <div className="flex justify-center items-center">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                                    Categories
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div>
                                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Browse By Category
                                </h1>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <MoveArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center flex-row'>
                <CategoryCard />
            </div>
        </div>
    )
}

export default CategorySection;