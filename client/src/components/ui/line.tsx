// import React from 'react'

interface LineProp {
  width?:string; 
  color?:string
}

const Line = ({width = 'max-w-[1170px]', color ="bg-[#828282]"}: LineProp) => {
  return (
    <div className='w-full flex justify-center'>
        <hr className= {`w-full ${width} h-auto min-h-[2px] ${color} `} />
    </div>
  )
}

export default Line
