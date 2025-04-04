import React from 'react'
import ShowDiscount from './ShowDiscount'
import CardLike from './CardLike'
import CardViewStatus from './CardViewStatus'

const DiscountCards = () => {
    return (
        <div className='w-full max-w-[270px] h-auto min-h-[350px]'>
            <div className='w-full  max-w-[270px] relative flex  justify-center h-auto min-h-[250px] bg-[#F5F5F5] '>
                <div className='absolute top-0 left-0'>
                        <ShowDiscount />
                    </div>
            <div className='absolute top-2 right-2 flex flex-col gap-2'>
                        <CardLike />
                        <CardViewStatus />
                    </div>
                <div className='w-full '>
            <img src="/src/assets/g92-2-500x500 1.png" className="  w-[100%] h-[100%] object-contain " alt="" />
                </div>
            </div>
            <div className='mt-5'>
                <div className=''>
                    <h3 className='text-[16px] font-medium'>HAVIT HV-G92 Gamepad</h3>
                </div>
                <div>
                    <div className='flex gap-4 my-2'>
                        <div className='text-[16px] text-[#DB4444] font-medium'>$120</div>
                        <div className='text-[16px] font-medium'>$160</div>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <img src="/src/assets/rating.png" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/rating.png" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/rating.png" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/rating.png" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/rating.png" alt="" />
                    </div>
                    <div>
                        <p className='text-[14px] font-semibold'>(88)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountCards