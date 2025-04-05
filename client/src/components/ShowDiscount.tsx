// import React from 'react'
interface showDiscount {
  discount: number, 
  id: string
}

const ShowDiscount: React.FC = () => {
  const showDiscount: showDiscount[] = [
    {id: "prod-1", discount: 40},
    // {id: "prod-2", discount: 35},
    // {id: "prod-3", discount: 30},
    // {id: "prod-4", discount: 25},
    // {id: "prod-5", discount: 25},
  ]

  return (
    <div className='w-full flex justify-center items-center max-w-[55px] rounded-[4px] h-auto min-h-[26px] bg-[#DB4444] text-white ml-3 mt-3 '>
      {showDiscount.map((discountPrice) => (
        <div  key={discountPrice.id} className="">
          <h3 className='text-[12px]'>-{discountPrice.discount}%</h3>
        </div>
      ))}
    </div>
  )
}

export default ShowDiscount
