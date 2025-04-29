interface ShowDiscountProp {
  discount: number, 
}

const ShowDiscount = ({discount}:ShowDiscountProp)=> {


  return (
    <div className='w-full flex justify-center items-center max-w-[55px] rounded-[4px] h-auto min-h-[26px] bg-[#DB4444] text-white ml-3 mt-3 '>
        <div className="">
          <h3 className='text-[12px]'>-{discount}%</h3>
        </div>
    </div>
  )
}
export default ShowDiscount
