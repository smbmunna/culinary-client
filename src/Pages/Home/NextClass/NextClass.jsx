import TimerComponent from "../../../Components/TimerComponent/TimerComponent";




const NextClass = () => {

    return (
        <div className="text-white relative py-20" style={{
            backgroundImage: "url(" + "https://i.ibb.co.com/NF6TD07/Timer-Section-background.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            <TimerComponent heading1="Want to be a Chef?"/>
        </div>
    );

}


export default NextClass;