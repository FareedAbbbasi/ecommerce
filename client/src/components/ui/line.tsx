// import React from 'react'

interface LineProp {
  width?:string; 
}

const Line = ({width = 'max-w-[1170px]'}: LineProp) => {
  return (
    <div className='flex justify-center'>
        <hr className= {`w-full ${width} h-auto min-h-[2px] bg-[#828282]`} />
    </div>
  )
}

export default Line
