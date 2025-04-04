import CardLike from './CardLike'
import CardViewStatus from './CardViewStatus'
import CountDown from './CountDown'
import DiscountCards from './DiscountCards'
import MoveArrow from './MoveArrow'
import ShowDiscount from './ShowDiscount'
import StartBox from './StartBox'

const FlashSales = () => {
    return (
        <div className='flex flex-col gap-[40px]'>
            <div className='flex justify-between w-full max-w-[1308px] h-auto min-h-[103px]  mx-auto '>
                <div className='flex items-end gap-[87px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4'>
                            <StartBox />
                            <div className='flex justify-center items-center'>
                                <p className='text-[16px] font-semibold text-[#DB4444]'>Today’s</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-semibold text-[36px]'>Flash Sales</h1>
                        </div>
                    </div>
                    <div className=''>
                        <CountDown />
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <MoveArrow />
                </div>
            </div>
            <div className='flex w-full max-w-[1308px] h-auto min-h-[350px] mx-auto gap-[30px]'>
                <DiscountCards />
                <DiscountCards />
                {/* <DiscountCards />
                <DiscountCards />
                <DiscountCards />
                <DiscountCards />
                <DiscountCards />
                <DiscountCards /> */}
                {/* <DiscountCards />
                <DiscountCards />
                <DiscountCards />
                <DiscountCards />
                <DiscountCards /> */}
            </div>
        </div>
    )
}

export default FlashSales