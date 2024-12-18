import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 10
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper text-center">
            <div className="time font-bold text-3xl">{time}</div>
            <div className="text-xl uppercase">{dimension}</div>
        </div>
    );
};


const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


const TimerComponent = ({ heading1 }) => {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    return (
        <div>
            <div className="relative">
                <h1 className="font-bold text-5xl mb-8 text-center font-RobotoCondensed">{heading1}</h1>
                <div className="py-8">
                    <div className="font-bold text-3xl mb-8 text-center">Our Next Batch Starts In...</div>
                    <div className="md:flex justify-center gap-4 grid grid-cols-2 px-20 md:px-0">
                        {/* <div className="w-12 h-20 md:w-30 md:h-30"> */}
                            <CountdownCircleTimer
                                {...timerProps}                                
                                //colors="#7E2E84"                                
                                colors="#fe3f00"
                                duration={daysDuration}
                                initialRemainingTime={remainingTime}
                            >
                                {({ elapsedTime, color }) => (
                                    <span style={{ color }}>
                                        {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                                    </span>
                                )}
                            </CountdownCircleTimer>
                        {/* </div> */}

                        <CountdownCircleTimer
                            {...timerProps}
                            //colors="#D14081"
                            colors="white"
                            duration={daySeconds}
                            initialRemainingTime={remainingTime % daySeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            //colors="#EF798A"
                            colors="white"
                            duration={hourSeconds}
                            initialRemainingTime={remainingTime % hourSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            //colors="#218380"
                            colors="#fe3f00"
                            duration={minuteSeconds}
                            initialRemainingTime={remainingTime % minuteSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > 0
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("seconds", getTimeSeconds(elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerComponent;