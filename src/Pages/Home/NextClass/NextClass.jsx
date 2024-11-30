import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
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


const NextClass = () => {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    return (
        <div className="mb-16 text-white relative" style={{
            backgroundImage: "url(" + "https://i.ibb.co.com/NF6TD07/Timer-Section-background.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative">
                <h1 className="font-bold text-5xl mb-8 text-center pt-16">Want To Be a Chef ?</h1>
                <div className="py-8">
                    <div className="font-bold text-3xl mb-8 text-center mt-16">Our Next Batch Starts In...</div>
                    <div className="timer-wrapper">
                        <CountdownCircleTimer
                            {...timerProps}
                            //colors="#7E2E84"
                            colors="white"
                            duration={daysDuration}
                            initialRemainingTime={remainingTime}

                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
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
                            colors="white"
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

}


export default NextClass;