import React, { useState } from 'react'
import Play from './assets/play.svg'
import Pause from './assets/pause.svg'

type AppProps={
    activityName: string,
    totalTime?: number,
    lastTime?: number,
    timeType?: string,
    icon?:string


}

const ActivityCard=(props:AppProps)=>{

    const [playing, setPlaying]= useState<boolean>(false)
    
    return(
        <div className='card'>
            <div className={`icon-container icon-${props.activityName.toLowerCase()}`}>
            <img src={props.icon}/>
            </div>
            <div className='card-details'>
                <div className='card-name-container'>
                    <div className='card-name'>{props.activityName?props.activityName:'---'}</div>
                    <img src={playing?Pause:Play} className='play-pause-icon'/>
                </div>
                
                <div className='card-time'>{props.totalTime?props.totalTime:'00:00:00'}</div>
                <div className='card-last-time'>This {props.timeType}- {props.lastTime?props.lastTime:'0'}hrs</div>

            </div>
        </div>
    )
}

export default ActivityCard