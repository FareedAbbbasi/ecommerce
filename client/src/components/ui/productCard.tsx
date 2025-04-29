import { Eye, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    rating?: number;
    reviews?: number;
    showCartButton?: boolean;
    showDiscount?: boolean;
    isNew?: boolean
    showColors?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
    image = "/src/assets/products/coat.png",
    title = "The north coat",
    price = 260,
    rating = 65,
    showDiscount = true,
    isNew,
}) => {

    return (
        <div className='w-full max-w-[270px] h-auto min-h-[350px] group relative'>
            <div className="relative group">
                <div className="w-full  flex justify-center max-w-[270px] h-auto min-h-[250px] bg-[#F5F5F5] mb-4">
                    <div className=" absolute top-3 left-3">
                        {isNew && <span className="w-full  bg-[#00FF66] rounded-[4px] px-3 py-1 text-[12px] text-white">New</span>}
                    </div>
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
                <Link
                    to="/cart"
                    className="absolute bottom-[2px] w-full left-1/2 -translate-x-1/2 bg-black text-white py-2 px-6 rounded opacity-0 group-hover:opacity-100 transition-all text-center"
                >
                    Add To Cart
                </Link>
            </div>

            <div>
                <h1 className="text-black text-16px font-medium">{title}</h1>
                <div className="flex gap-3 my-2">
                    <p className="text-[16px] text-[#DB4444] font-medium">${price}</p>
                    <div className="flex items-center gap-1 text-[#FFAD33] text-sm mb-2">
                        <Star className="w-[17px] h-[17px] " />
                        <Star className="w-[17px] h-[17px]" />
                        <Star className="w-[17px] h-[17px]" />
                        <Star className="w-[17px] h-[17px]" />
                    </div>
                    <div>
                        <p className='text-[14px] font-semibold text-[#7D8184] '>({rating})</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;