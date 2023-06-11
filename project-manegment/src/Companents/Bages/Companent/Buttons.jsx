import React from 'react'
import { GrActions } from 'react-icons/gr'

function Buttons() {
  return (
    <div className='main'>
<div className="header">
        <h1 className='text-2xl'>Buttons</h1>
        
      </div>

      <div className=" container mt-6 ">
        <div className="row-Card  justify-between gap-4" >
          <div className="bg-white card p-4 w-full rounded-lg  ">
            <h1 className='p-2'>Buttons</h1>
  
           <div className=" btn-card space-x-3">
           <button className='bg-sky-300 p-2 rounded-md'> Button</button>
            <button className='bg-sky-700 text-white p-2 rounded-md'> Button</button>

            <button className='bg-rose-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='bg-rose-700 text-white p-2 rounded-md shadow-lg'> Button</button>

            <button className='bg-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='bg-slate-700 text-white p-2 rounded-md shadow-lg'> Button</button>
            <button className='bg-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='bg-slate-700 text-white p-2 rounded-md shadow-lg'> Button</button>

            <button className='bg-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='bg-slate-700 text-white p-2 rounded-md shadow-lg'> Button</button>
           </div>

            </div>


            <div className="bg-white card p-4 w-full rounded-lg  ">
            <h1>Buttons Outline</h1>

            <div className=" btn-card space-x-3">
           <button className='border border-sky-300 p-2 rounded-md'> Button</button>
            <button className='border border-sky-700 text-black p-2 rounded-md'> Button</button>

            <button className='border border-rose-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-rose-700 text-black p-2 rounded-md shadow-lg'> Button</button>

            <button className=' border border-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-700 text-black p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-700 text-black p-2 rounded-md shadow-lg'> Button</button>

            <button className='border border-slate-300 p-2 rounded-md shadow-lg '> Button</button>
            <button className='border-slate-700 text-black p-2 rounded-md shadow-lg border'> Button</button>
         

            </div>
            </div>
            </div>






            <br/>




            <div className="row-Card  justify-between gap-4" >
          <div className="bg-white card p-4 w-full rounded-lg  ">
            <h1 className='p-2'>Rounded/Hover</h1>
  
           <div className=" btn-card space-x-3">
           <button className='bg-sky-300 p-2 rounded-md hover:bg-red-300'> Button</button>
            <button className='bg-sky-700 text-white p-2 rounded-md rounded-2xl'> Button</button>

            <button className='bg-rose-300 p-2 rounded-md shadow-lg hover:bg-sky-300'> Button</button>
        
            <button className=' border border-slate-300 p-2 rounded-md shadow-lg hover:bg-rose-700 hover:text-white'> Button</button>
            <button className='border border-slate-700 text-black p-2 rounded-md shadow-lg hover:bg-black hover:text-white'> Button</button>
            <button className='bg-rose-700 text-white p-2 rounded-md shadow-lg'> Button</button>

            <button className='bg-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border-slate-700 text-black p-2 rounded-md shadow-lg border text-3xl'>Large</button>
            <button className='border-slate-700 text-black  rounded-3xl border hover:bg-rose-700 hover:text-white'>sm</button>
           </div>

            </div>


            <div className="bg-white card p-4 w-full rounded-lg  ">
            <h1>Icon/btn name</h1>

            <div className=" btn-card space-x-3">
           <button className='border border-sky-300 p-2 rounded-md flex '> <GrActions className='mt-1'/><span className="ml-3">Text</span></button>
            <button className='border border-sky-700 text-black p-2 rounded-md flex '><GrActions className='mt-1'/> Button</button>

            <button className='border border-rose-300 p-2 rounded-md shadow-lg flex'><GrActions className='mt-1'/><span className="ml-3">Text</span></button>
            <button className='border border-rose-700 text-black p-2 rounded-md shadow-lg'> Button</button>

            <button className=' border border-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-700 text-black p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-300 p-2 rounded-md shadow-lg'> Button</button>
            <button className='border border-slate-700 text-black p-2 rounded-md shadow-lg'> Button</button>

            <button className='border border-slate-300 p-2 rounded-md shadow-lg  '> Button</button>
            <button className='border-slate-700 text-black p-2 rounded-md shadow-lg border '> Button</button>
         

            </div>
            </div>
            </div>






            </div>
    </div>
  )
}

export default Buttons