import React, {useState, useEffect} from 'react';
import './CountDown.css';

const CountDown = () => {
  // declare state for timer
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

let interval 

  // 
const startTimer = () => {
  const countDownDate = new Date("November 11,2022").getTime();
  //
  interval=setInterval(()=>{
    // get current date
    const currentDate = new Date().getTime();
    // get the difference between the conference date and currentdate
    const remainingTime = countDownDate - currentDate;

    // covert milliseconds to days, hours, minutes and seconds
    const days = Math.floor(remainingTime /(24*60*60*1000));
    const hours = Math.floor(remainingTime % (24*60*60*1000)/(1000*60*60));
    const minutes = Math.floor(remainingTime % (60*60*1000)/(1000*60));
    const seconds = Math.floor(remainingTime % (60*1000)/(1000));

    if (remainingTime < 0){
      //Stop Timer
      clearInterval(interval.current)
    }else{
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
  
    }
  });
};

// Allows changes take effect properly
useEffect(()=>{
  startTimer();
})


  return (
      <div className='countdown-container flexbox'>
        <div className="coundown-info">
        </div>
        <div className='countdown-content flexbox'>
          <div className="time-block">
            <p className="time">{timerDays}</p>
            <small>Days</small>
          </div>
          <span>:</span>
          <div className="time-block">
            <p className="time">{timerHours}</p>
            <small>Hours</small>
          </div>
          <span>:</span>
          <div className="time-block">
            <p className="time">{timerMinutes}</p>
            <small>Minutes</small>
          </div>
          <span>:</span>
          <div className="time-block">
            <p className="time">{timerSeconds}</p>
            <small>Seconds</small>
          </div>
        </div>
    </div>
  )
}

export default CountDown
