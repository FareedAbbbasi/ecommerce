import Countdown from 'react-countdown';

interface countDown {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed?: boolean
}

const PromoCountdown
    : React.FC = () => {
        const renderer = ({ days, hours, minutes, seconds, completed }: countDown) => {
            if (completed) {
                return <span>Time's up!</span>;
            } else {
                return (
                   <div className='w-full flex justify-between max-w-[320px] h-auto min-h-[62px] text-black'>
                    <div className='w-full flex flex-col justify-center items-center p-2 max-w-[62px] h-auto min-h-[62px] rounded-[100%] bg-[#FFFFFF]'>
                        <h3 className='text-[16px] font-semibold'>{hours}</h3>
                        <p className='text-[11px]'>Hours</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center p-2 max-w-[62px] h-auto min-h-[62px] rounded-[100%] bg-[#FFFFFF]'>
                        <h3 className='text-[16px] font-semibold'>{days}</h3>
                        <p className='text-[11px]'>Days</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center p-2 max-w-[62px] h-auto min-h-[62px] rounded-[100%] bg-[#FFFFFF]'>
                        <h3 className='text-[16px] font-semibold'>{minutes}</h3>
                        <p className='text-[11px]'>Minutes</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center p-2 max-w-[62px] h-auto min-h-[62px] rounded-[100%] bg-[#FFFFFF]'>
                        <h3 className='text-[16px] font-semibold'>{seconds}</h3>
                        <p className='text-[11px]'>seconds</p>
                    </div>
                   </div>
                );
            }
        };
        return <Countdown date={Date.now() + 10 * 24 * 60 * 60 * 1000} renderer={renderer} />;
    };

export default PromoCountdown
