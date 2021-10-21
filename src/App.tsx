import React, { useState } from 'react';
import logo from './logo.svg';
import ActivityCard from './card';
import Play from './assets/icon-play.svg'
import Exercise from './assets/icon-exercise.svg'
import Social from './assets/icon-social.svg'
import Study from './assets/icon-study.svg'
import Work from './assets/icon-work.svg'
import Selfcare from './assets/icon-self-care.svg'
import Ellipsis from './assets/icon-ellipsis.svg'



const activityArray=[
  {
    name:'Work', 
    icon: Work,
  },
  {
    name:'Play', 
    icon: Play,
  },
  {
    name:'Exercise', 
    icon: Exercise,
  },
  {
    name:'Social', 
    icon: Social,
  },
  {
    name:'Selfcare', 
    icon: Selfcare,
  },
  {
    name:'Study', 
    icon: Study,
  },
  
  
  
  
]



function App() {

  const [timeType, setTimeType]= useState<'day'|'week'|'month'>('day');
  return (
    <div className="app">
      <div className='menu-container'>
        <div className='profile'>
          <div className='profile-pic-container'><img></img></div>
          <div className='report'>Report for</div>
          <div className='profile-name'>Jeremy Johnson</div>
        </div>
        <div className='menu'>
          <div className='menu-item'>Daily</div>
          <div className='menu-item'>Weekly</div>
          <div className='menu-item'>Monthly</div>
        </div>
      </div>
      <div className='card-container'>
        {
          activityArray.map((activity)=><ActivityCard activityName={activity.name} timeType={timeType} icon={activity.icon} />)
        }
      </div>
      
    </div>
  );
}

export default App;
