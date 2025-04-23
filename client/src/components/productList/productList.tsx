import MoveArrow from '../MoveArrow'
import StartBox from '../StartBox'
import ProductCard from '../ui/productCard'
import ViewAllProductsButton from '../ViewAllProductsButton'

const ProductList = () => {
    return (
        <div className="w-full max-w-[1170px] h-auto flex flex-col gap-[60px] mt-[80px] mx-auto px-3 sm:px-6 md:px-8 xl:px-0 mb-[70px]">
            <div className="w-full flex justify-center flex-wrap sm:justify-between items-center  max-w-[1308px] mx-auto">
                <div className="flex  flex-wrap gap-6 sm:gap-10 lg:gap-[87px] w-full">
                    <div className="flex  flex-col gap-4 w-full">
                        <div className="flex justify-center sm:justify-start gap-2 sm:gap-4">
                            <StartBox />
                            <div className="flex justify-center items-center">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                                Our Products
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-col md:justify-start sm:gap-2 tablet:flex-col tablet:gap-2 md:flex-row'>
                            <div className='w-full'>
                                <h1 className="font-semibold text-center sm:text-start text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Explore Our Products
                                </h1>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <MoveArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center flex-row gap-[30px] flex-wrap'>
                <ProductCard image={'/src/assets/product-list/dog-food.png'} title={'Breed Dry Dog Food'} price={100} rating={35}/>
                <ProductCard image={'/src/assets/product-list/camera.png'} title={'CANON EOS DSLR Camera'} price={360} rating={95} />
                <ProductCard image={'/src/assets/product-list/laptop.png'} title={'ASUS FHD Gaming Laptop'} price={700} rating={325} />
                <ProductCard image={'/src/assets/product-list/curology.png'} title={'Curology Product Set '} price={500} rating={145} />
                <ProductCard image={'/src/assets/product-list/kids-car.png'} isNew={true} title={'Kids Electric Car'} price={960} rating={65} />
                <ProductCard image={'/src/assets/product-list/football-shoes.png'} title={'Jr. Zoom Soccer Cleats'} price={1160} rating={35} />
                <ProductCard image={'/src/assets/product-list/gamepad.png'} isNew={true} title={'GP11 Shooter USB Gamepad'} price={660} rating={55} />
                <ProductCard image={'/src/assets/product-list/jacket.png'} title={'Quilted Satin Jacket'} price={960} rating={55} />
            </div>
            <ViewAllProductsButton />
        </div>
    )
}

export default ProductList
