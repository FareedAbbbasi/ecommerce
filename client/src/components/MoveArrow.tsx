// import React from 'react'
import arrowLeft from '../assets/images/arrow.png'
import arrowRight from '../assets/images/icons arrow-right.png'

const MoveArrow = () => {
    return (
        <div className='flex gap-3'>
            <div className=' flex justify-center items-center w-full max-w-[46px] min-h-[46px] bg-[#FAFAFA] p-3 rounded-[50%]'>
                <img  src={arrowLeft} alt="" />
            </div>
            <div className='flex justify-center items-center w-full max-w-[46px] min-h-[46px] bg-[#FAFAFA] p-3 rounded-[50%]'>
                <img src={arrowRight} alt="" />
            </div>
        </div>
    )
}

export default MoveArrow