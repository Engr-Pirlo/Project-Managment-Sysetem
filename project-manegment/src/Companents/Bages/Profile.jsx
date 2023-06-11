import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import mesud from '../img/Profile/mesud.jpg'
import '../../profile/profile.css'
import Overview from '../../profile/Overview';
import Secutity from '../../profile/Secutity';
function Profile() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='main'>

        <div className=" relative header bg-slate-800  w-full h-64 rounded-lg ">
             <p className="text-center text-slate-300 text-6xl font-normal pt-20">MAS-Admin</p>
          <div className="absolute bg-rose-400 w-36 h-36  rounded-full mt-44 ml-10">
<img src={mesud} alt="" className='rounded-full'/>
          </div>
            
        </div>

        <div className="container mt-20">
          <div className="row grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="left p-4 ">
              <h1 className='text-center'></h1>
              <p className='text-center'></p>
            </div>

            <div className="right   col-span-2  ">
              <div className="profile bg-white border p-2">

           
              <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          OverView
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Change passwords
        </button>
      
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 >About</h2>
        
          <Overview/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Secutity/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>

            </div>
            </div>
          </div>
        </div>
        

       


    </div>
  )
}

export default Profile