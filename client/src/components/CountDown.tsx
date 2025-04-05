import Countdown from 'react-countdown';

interface countDown {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed?: boolean
}

const CountDown: React.FC = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: countDown) => {
        if (completed) {
            return <span>Time's up!</span>;
        } else {
            return (
                <div className="flex gap-[2px]">
                    <div className='px-3'>
                        <div className='text-[12px]'>Days</div>
                        <div className='text-[20px] md:text-[25px] lg:text-[32px] font-bold'>
                            <div className='flex'>
                                <div>{days}</div>
                                <div className='ml-6  text-[#E07575]'>:</div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='text-[12px]'>Hours</div>
                        <div className='text-[20px] md:text-[25px] lg:text-[32px] font-bold '>
                            <div className='flex'>
                                <div className='text-[20px] md:text-[25px] lg:text-[32px] font-bold '>{hours}</div>
                                <div className='ml-6  text-[#E07575]'>:</div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='text-[12px]'>Minutes</div>
                        <div className='text-[20px] md:text-[25px] lg:text-[32px] font-bold'>
                            <div className='flex'>
                                <div className=' font-bold'>{minutes}</div>
                                <div className='ml-6  text-[#E07575]'>:</div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='text-[12px]'>Seconds</div>
                        <div className='text-[20px] md:text-[25px] lg:text-[32px] font-bold'>{seconds}</div>
                    </div>
                </div>
            );
        }
    };
    return <Countdown date={Date.now() + 10 * 24 * 60 * 60 * 1000} renderer={renderer} />;
};

export default CountDown