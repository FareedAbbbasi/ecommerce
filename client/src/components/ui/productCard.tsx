import { Eye, Heart, Star } from "lucide-react";

// src/components/ProductCard.tsx
interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    rating?: number;
    reviews?: number;
    showCartButton?: boolean;
    showDiscount?:boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image = "/src/assets/products/coat.png",
    title = "The north coat",
    price = 260,
    oldPrice = 360,
    discount,
    rating = 3,
    reviews = 0,
    showCartButton = false,
    showDiscount = true,
}) => {
    return (
        <div className='w-full max-w-[270px] h-auto min-h-[350px] group relative'>
            <div className="w-full flex justify-center items-center max-w-[270px] h-auto min-h-[250px] bg-[#F5F5F5] mb-4">
                <div className="flex flex-col gap-2 absolute right-4 top-4">
                    {showDiscount && <button className="bg-[#FFFFFF] w-[34px] h-[34px] flex justify-center items-center rounded-[50%]">
                        <Heart />
                    </button>
                    }<button className="bg-[#FFFFFF] w-[34px] h-[34px] flex justify-center items-center rounded-[50%]">
                        <Eye />
                    </button>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src={image} alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-black text-16px font-medium">{title}</h1>
                <div className="flex gap-3 my-2">
                    <p className="text-[16px] text-[#DB4444] font-medium">${price}</p>
                    <p className="text-[16px] font-medium text-[#7D8184] line-through">${oldPrice}</p>
                </div>
            </div>{/* Rating */}
            <div className="flex items-center gap-1 text-[#FFAD33] text-sm mb-2">
                <Star className="w-[17px] h-[17px] "/>
                <Star className="w-[17px] h-[17px]"/>
                <Star className="w-[17px] h-[17px]"/>
                <Star className="w-[17px] h-[17px]"/>
            </div>
        </div>
    );
};



export default ProductCard;
