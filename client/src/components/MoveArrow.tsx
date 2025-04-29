import arrowLeft from '../assets/images/arrow.png'
import arrowRight from '../assets/images/icons arrow-right.png'

const MoveArrow = () => {
    return (
        <div className='flex gap-3'>
            <div className=' flex justify-center items-center w-full max-w-[46px] min-h-[46px] bg-[#FAFAFA] p-3 rounded-[50%]'>
                <button><img  src={arrowLeft} alt="" /></button>
            </div>
            <div className='flex justify-center items-center w-full max-w-[46px] min-h-[46px] bg-[#FAFAFA] p-3 rounded-[50%]'>
                <button><img src={arrowRight} alt="" /></button>
            </div>
        </div>
    )
}

export default MoveArrow