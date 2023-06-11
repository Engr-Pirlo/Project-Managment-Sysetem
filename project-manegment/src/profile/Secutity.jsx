import React from 'react'

function Secutity() {
  return (
    <div>
        <form action="" className=''>
          <div className="form-control grid grid-cols-1 md:grid-cols-3 ">
            <label htmlFor="" className='text-3xl'>Current Password </label>
          <input 
            type="text" 
            id='CurrentPassword'
             name='CurrentPassword'
             className='p-2 tex-2xl w-full bg-slate-200 col-span-2 focus:outline-none'
            />
          </div>

          <div className="form-control grid grid-cols-1 md:grid-cols-3 mt-5">
            <label htmlFor="" className='text-3xl'>New Password </label>
          <input 
            type="text" 
            id='CurrentPassword'
             name='CurrentPassword'
             className='p-2 tex-2xl w-full bg-slate-200 col-span-2 focus:outline-none'
            />
          </div>

          <div className="form-control grid grid-cols-1 md:grid-cols-3 mt-5">
            <label htmlFor="" className='text-3xl'>Confirm Password </label>
          <input 
            type="text" 
            id='CurrentPassword'
             name='CurrentPassword'
             className='p-2 tex-2xl w-full bg-slate-200 col-span-2 focus:outline-none'
            />
          </div>

          <div className=" mt-5 text-end">
            <button className='bg-blue-500 p-2 text-3xl rounded-lg'>Change</button>
           
          </div>
        </form>
    </div>
  )
}

export default Secutity