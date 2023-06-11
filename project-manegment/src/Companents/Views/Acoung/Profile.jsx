import React from 'react'
import mesud from '../../img/Profile/mesud.jpg'
function Profile() {
  return (
  

<div className=" relative header bg-slate-800  w-full h-64 rounded-lg ">
             <p className="text-center text-slate-300 text-6xl font-normal pt-20">Project Manegments</p>
          <div className="absolute bg-rose-400 w-36 h-36  rounded-full mt-44 ml-10">
<img src={mesud} alt="" className='rounded-full'/>
          </div>
            
        </div>
    
  )
}

export default Profile