import ShowDiscount from './ShowDiscount'
import CardLike from './CardLike'
import CardViewStatus from './CardViewStatus'
import star from '../assets/images/rating.png'

interface products {
    id: string,
    name: string,
    currentPrice: number,
    originalPrice: number,
    rating: number,
    image: string
    discount: number
    imageClass?: string;
}

const DiscountCards: React.FC = () => {

    const products: products[] = [
        { id: "prod-1", name: "HAVIT HV-G92 Gamepad1", currentPrice: 150, originalPrice: 160, rating: 88, image: "g92-2-500x500 1.png", discount:40,},
        { id: "prod-2", name: "AK-900 Wired Keyboard", currentPrice: 960, originalPrice: 1160, rating: 75, image: "keyboard.png" ,discount:35},
        { id: "prod-3", name: "IPS LCD Gaming Monitor", currentPrice: 370, originalPrice: 400, rating: 69, image: "led.png",discount:30},
        { id: "prod-4", name: "S-Series Comfort Chair", currentPrice: 375, originalPrice: 400, rating: 66, image: "chair.png" ,discount:25},
        { id: "prod-5", name: "Gaming Mouse Pro", currentPrice: 59, originalPrice: 99, rating: 82, image: "led.png", imageClass: "max-w-[102px] min-h-[180px]" ,discount:15},
        { id: "prod-6", name: "Gaming Mouse Pro", currentPrice: 59, originalPrice: 99, rating: 82, image: "led.png", imageClass: "max-w-[102px] min-h-[180px]" ,discount:15},
        { id: "prod-7", name: "Gaming Mouse Pro", currentPrice: 59, originalPrice: 99, rating: 82, image: "led.png", imageClass: "max-w-[102px] min-h-[180px]" ,discount:15},
    ]
    return (
        <div className='flex scrollbar-hide  gap-[30px] flex-wrap lg:flex-nowrap'>
            {products.map((product) => (
                <div key={product.id} className='w-full max-w-[270px] min-w-[270px] h-auto min-h-[350px]'>
                    <div className='w-full  max-w-[270px] relative group flex justify-center h-auto min-h-[250px] bg-[#F5F5F5] '>
                        <div className='absolute top-0 left-0'>
                            <ShowDiscount  discount={product.discount}/>
                        </div>
                        <div className='absolute top-2 right-2 flex flex-col gap-2'>
                            <CardLike />
                            <CardViewStatus />
                        </div>
                        <div className='w-full p-[30px] flex justify-center items-center'>
                            <img src={`./../src/assets/images/${product.image}`} className={`object-contain ${product.imageClass || 'max-w-[172px] min-h-[152px]'}`} alt="" />
                        </div>
                        <button className='absolute bottom-0 bg-black text-white w-full py-2 text-[16px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
                    </div>  
                    <div className='mt-5'>
                        <div className=''>
                            <h3 className='text-[16px] font-medium'>{product.name}</h3>
                        </div>
                        <div>
                            <div className='flex gap-4 my-2'>
                                <div className='text-[16px] text-[#DB4444] font-medium'>${product.currentPrice}</div>
                                <div className='text-[16px] line- text-[#7D8184] line-through font-medium'>${product.originalPrice}</div>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <div>
                                <img src={star} alt="" />
                            </div>
                            <div>
                                <p className='text-[14px] font-semibold text-[#7D8184] '>({product.rating})</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default DiscountCards