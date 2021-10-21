import React, { useState, useEffect } from 'react'
import Play from './assets/play.svg'
import Pause from './assets/pause.svg'

type AppProps={
    activityName: string,
    icon?:string
}

const ActivityCard=(props:AppProps)=>{

    const [lastStartTime, setLastStartTime]= useState<number>(0)
    const [elapsedTime, setElapsedTime]= useState<number>(0)
    const [playing, setPlaying]= useState<boolean>(false);
    const [clockId, setClockId]= useState<number>(0)
    const [formerTime, setFormerTime]= useState<number>(0)
    const [timeString, setTimeString]= useState<string>('00:00:00')
    const [elapsedTimeString, setElapsedTimeString]= useState<string>('00:00:00')

    useEffect(()=>{
        setTimeString(msToTime(elapsedTime+formerTime))
    },[elapsedTime])

    useEffect(()=>{
        var localTime=window.localStorage.getItem(`${props.activityName}FormerTime`)
        setTimeString(msToTime(elapsedTime+(localTime?JSON.parse(localTime):0)))
        setFormerTime(localTime?JSON.parse(localTime):0)
    },[])


    function startActivity(){
        var tempTime= new Date().valueOf();
        setLastStartTime(tempTime);

        var tempClockId= window.setInterval(()=>{
            setElapsedTime((new Date().valueOf() -tempTime));
            setElapsedTimeString(msToTime(new Date().valueOf() -tempTime))
        }, 1000);

        setClockId(tempClockId);

        setPlaying(true);
        
    }

    function endActivity(){
        window.clearInterval(clockId);

        window.localStorage.setItem(`${props.activityName}FormerTime`, JSON.stringify(elapsedTime+ formerTime))

        setFormerTime(elapsedTime+formerTime);
        

        setPlaying(false);

        setElapsedTimeString('00:00:00')
        
    }
    
    function msToTime(duration:number) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        var hoursString = (hours < 10) ? "0" + hours : hours;
        var minutesString = (minutes < 10) ? "0" + minutes : minutes;
        var secondsString = (seconds < 10) ? "0" + seconds : seconds;
      
        return hoursString + ":" + minutesString + ":" + secondsString;
      }

    
    return(
        <div className='card'>
            <div className={`icon-container icon-${props.activityName.toLowerCase()}`}>
            <img src={props.icon}/>
            </div>
            <div className='card-details'>
                <div className='card-name-container'>
                    <div className='card-name'>{props.activityName?props.activityName:'---'}</div>
                    <img src={playing?Pause:Play} className='play-pause-icon' onClick={playing?endActivity:startActivity} />
                </div>
                
                <div className='card-time'>{timeString}</div>
                {/* <div className='card-last-time'>Current Start Time: {lastStartTime!==0 && playing ? (`${new Date(lastStartTime).getHours()}:${new Date(lastStartTime).getMinutes()}:${new Date(lastStartTime).getSeconds()}`):'---'} </div> */}
                <div className='card-last-time'>{playing ? `Current Session: ${elapsedTimeString}`:'Not Active'} </div>

            </div>
        </div>
    )
}

export default ActivityCard