import React, { useState } from 'react'
import heartIcon from '../assets/images/like.png'

// const [view, setView] = useState()

const CardLike = () => {

  return (
    <div className='flex justify-center items-center w-full max-w-[34px]  h-auto min-h-[34px] rounded-[50%] bg-[#FFFFFF] p-2'>
        <img src={heartIcon} alt="" />
    </div>
  )
}

export default CardLike