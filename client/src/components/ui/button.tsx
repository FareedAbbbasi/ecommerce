// import React from 'react'
interface ButtonProps {
  name: string
  width?: string
  hight?: string
  bg?: string
}

const Button = ({width = "w-[120px]", hight = "h-[48px]", name = "View All" , bg = "bg-[#DB4444]" } :ButtonProps) => {
  return (
    <div>
        <button className={`${width} ${hight} tablet:w-[150px] table:h-[48px] md:w-[240px] md:h-[45px] lg:w-[159px] lg:h-[56px] text-[#FAFAFA] ${bg} rounded-[4px]`}>
        {name}
        </button>
    </div>
  )
}

export default Button
