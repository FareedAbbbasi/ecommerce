import CountDown from './CountDown';
import DiscountCards from './DiscountCards';
import MoveArrow from './MoveArrow';
import StartBox from './StartBox';

const FlashSales = () => {
    return (
        <div className="flex flex-col gap-10 px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-wrap justify-between items-center w-full max-w-[1170px] mx-auto">
                <div className="flex flex-wrap items-end gap-6 sm:gap-10 lg:gap-[87px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 sm:gap-4">
                            <StartBox />
                            <div className="flex justify-center items-center">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#DB4444]">
                                    Today’s
                                </p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Flash Sales
                        </h1>
                    </div>
                    <div>
                        <CountDown />
                    </div>
                </div>
                <div className="flex justify-end items-end mt-4 sm:mt-0">
                    <MoveArrow />
                </div>
            </div>
            <div className="w-full max-w-[1170px] mx-auto">
                <DiscountCards />
            </div>
        </div>
    );
};

export default FlashSales;
