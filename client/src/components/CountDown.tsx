import Countdown from 'react-countdown';

const CountDown = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            return <span>Time's up!</span>;
        } else {
            return (
                <div className="flex gap-[2px]">
                    <div className='px-3'>
                        <div className='text-[12px]'>Days</div>
                        <div className='text-[32px] font-bold'>
                            <div>{days}</div>

                        </div>
                    </div>
                    <div className='self-center pb-5'>
                        :

                    </div>
                    {/* <div>
                        <div>.</div>
                        <div>.</div>
                    </div> */}
                    <div className='px-3'>
                        <div className='text-[12px]'>Hours</div>
                        <div className='text-[32px] font-bold before:contents[:]'>{hours}</div>
                    </div>
                    <div className='self-end'>
                        :

                    </div>
                    <div className='px-3'>
                        <div className='text-[12px]'>Minutes</div>
                        <div className='text-[32px] font-bold'>{minutes}</div>
                    </div>
                    <div className='self-end'>
                        :

                    </div>
                    <div className='px-3'>
                        <div className='text-[12px]'>Seconds</div>
                        <div className='text-[32px] font-bold'>{seconds}</div>
                    </div>
                </div>
            );
        }
    };
    return <Countdown date={Date.now() + 10 * 24 * 60 * 60 * 1000} renderer={renderer} />;
};

export default CountDown