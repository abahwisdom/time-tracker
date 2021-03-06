import ActivityCard from './card';
import activityArray from './activities'
import Clock from './assets/icon-clock.svg'


function App() {

  function resetAll(){
    window.localStorage.clear();
    window.location.reload()
  }


  return (
    <div className="app">
      <div className='menu-container'>
        <div className='profile'>
          <div className='profile-pic-container'><img src={Clock}></img></div>
          <div className='report'>Your Online</div>
          <div className='profile-name'>TimeTrackr</div>
        </div>
        <div className='menu'>
          <div className='menu-item' onClick={()=>window.location.reload()}>Cancel Session</div>
          <div className='menu-item' onClick={resetAll} >Reset All Activities</div>
          <a href='mailto:abahwisdom@gmail.com' className='menu-item'>Contact Developer</a>
        </div>
      </div>
      <div className='card-container'>
        {
          activityArray.map((activity)=><ActivityCard activityName={activity.name} icon={activity.icon} />)
        }
      </div>
      
    </div>
  );
}

export default App;
