import StartBox from '../StartBox'
import Button from '../ui/button'
import ProductCard from '../ui/productCard'

const BestSellingProducts = () => {
    return (
        <div className="w-full max-w-[1170px] h-auto flex flex-col gap-[60px] mt-[80px] mx-auto px-3 sm:px-6 md:px-8 xl:px-0 mb-[70px]">
            <div className="w-full flex justify-center flex-wrap sm:justify-between items-center  max-w-[1308px] mx-auto">
                <div className="flex  flex-wrap gap-6 sm:gap-10 lg:gap-[87px] w-full">
                    <div className="flex  flex-col gap-4 w-full">
                        <div className="flex justify-center sm:justify-start gap-2 sm:gap-4">
                            <StartBox />
                            <div className="flex justify-center items-center">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                                This Month
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-col md:justify-start sm:gap-2 tablet:flex-col tablet:gap-2 md:flex-row'>
                            <div className='w-full'>
                                <h1 className="font-semibold text-center sm:text-start text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Best Selling Products
                                </h1>
                            </div>
                            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start">
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center flex-row gap-[30px] flex-wrap'>
                <ProductCard image={'/src/assets/products/coat.png'} title={'The north coat'} price={960}/>
                <ProductCard image={'/src/assets/products/bag.png'} title={'Gucci duffle bag'} price={960} />
                <ProductCard image={'/src/assets/products/cpu.png'} title={'RGB liquid CPU Cooler'} price={960} />
                <ProductCard image={'/src/assets/products/shelf.png'} title={'Small BookSelf'} price={960} />
            </div>
        </div>
    )
}

export default BestSellingProducts
