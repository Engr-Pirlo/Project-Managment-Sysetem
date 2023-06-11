import React from 'react'
import { Link } from 'react-router-dom'

function Regester() {

    const handleSubmit=()=>{
     alert('Please enter')
    }
  return (
    <div className='bg-slate-800 flex flex-col justfy-center sm:py-12'   >
     <h1 className='text-center text-4xl text-indigo-500 font-smibold m-10'>
        Login 
     </h1>

     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
  <div className="relative pc-4 py-10 bg-slate-900 mx-8 md:mx-0 shadow-2xl rounded-xl sm:p-10">
  <div className="max-w-md  mx-auto">
    <div className="flex items-center space-x-5">
        <div className="h-14 w-20 bg-indigo-500 rounded-md flex flex-shirink-0 justfy-center items-center text-white text-2xl font-bold">
       <h1 className='p-2'>MAS</h1>
        </div>

        <div className="block font-semibold text-xl  self-start text-white">
          <h1 className='leading-relaxed'>SIGN UP</h1>
          <p className='leading-relaxed text-sm text-slate-400 font-normal '>Admin Template</p>
        </div>
    </div>

    <div className="divide-y divide-gray-200">
<div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
  <form onSubmit={handleSubmit}>
    <div className="relative">

        <input 
        type="text"
        id='email'
        placeholder='enter email' 
        required
        className='input-feild focus:outline-none  w-fuul px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-3xl text-white m-2 '
        />

<input 
        type="password"
        id='email'
        placeholder='********************' 
        required
        password
        className='input-feild focus:outline-none  w-fuul px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-3xl text-white m-2 '
        />


        
<input 
        type="password"
        id='email'
        placeholder='********************' 
        required
        password
        className='input-feild focus:outline-none  w-fuul px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-3xl text-white m-2 '
        />



    </div>

    <div className="btn text-center">
    <button className='p-2 bg-blue-500 text-2xl text-center rounded-md'>SIGN in</button>
    </div>
  </form>
</div>
    </div>

  </div>
  </div>
     </div>
     


    </div>
  )
}

export default Regester