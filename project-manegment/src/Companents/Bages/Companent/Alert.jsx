import React from 'react'
import { GrClose} from "react-icons/gr";
function Alert() {
  return (
    <div className='main'>
      <div className="header">
        <h1 className='text-2xl'>ALert</h1>
        
      </div>

      <div className=" container mt-6 ">
        <div className="row-Card  justify-between gap-4" >
          <div className="bg-white card p-4 w-full rounded-lg shadow-md  ">
            <h1>Default</h1>

            <div className="bg-slate-400 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className="bg-sky-100 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-100">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>



            <div className="bg-sky-400 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>


            <div className="bg-green-500 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className="bg-purple-500 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className="bg-rose-600 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>



            <div className="bg-blue-600 w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-300">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>






            
            
          </div>

          <div className="bg-white card p-4 w-full rounded-lg shadow-md ">
            <h1>Outline</h1>
            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-slate-400">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-sky-100">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>



            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-sky-400">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>


            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-green-500">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-purple-500">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>

            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-rose-600">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>



            <div className=" w-full p-2 mt-2 h-12 items-center flex justify-between  rounded-md border border-blue-600">
              <h1 >A simple primary alert—check it out!</h1>

              <GrClose className='text-2xl  cursor-pointer'/>

            </div>
          </div>


        </div>
      </div>
        

    </div>
  )
}

export default Alert