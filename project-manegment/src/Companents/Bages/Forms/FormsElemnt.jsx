import React from 'react'

function FormsElemnt() {
  return (
    <div className='main'>
    <div className="header">
   <h1 className='text-2xl'>Forms Element</h1>
   
 </div>

   <div className="container mt-5">
    <div className="row">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">

        <div className="cardLeft  space-y-4">
        <div className="card bg-white p-4 rounded-lg">
        <form>
            <div className="header">
                <h1>Input forms</h1>
            </div>
            <div className="col-md-3 mt-2">
                <div className="form-control">
                    <input type="email" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input email'/>
                </div>
            </div>

            <div className="col-md-3 mt-4">
                <div className="form-control">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input Username'/>
                </div>
            </div>

            <div className="col-md-3 mt-4">
                <div className="form-control">
                    <input type="text" className='form-control border border-slate-300 w-full h-10 p-2 focus:outline-none' placeholder='input Confirm'/>
                </div>
            </div>

            <div className="col-md-3 mt-4">
                <div className="form-control">
                    <input type="text" className='form-control border border-slate-300 w-full h-10 p-2 focus:outline-none' placeholder='input Password'/>
                </div>
            </div>

            <div className="col-md-3 mt-4">
                <div className="form-control">
                    <input type="text" className='form-control border border-slate-300 w-full h-10 p-2 focus:outline-none' placeholder='input Password'/>
                </div>
            </div>

            <div className="col-md-3 mt-4">
                <div className="form-control">
                    <input type="text" className='form-control border border-slate-300 w-full h-10 p-2 focus:outline-none' placeholder='input Password'/>
                </div>
            </div>

            <div className="btn  p-4 text-end">
                <button  className='border border-sky-700  hover:bg-sky-700 hover:text-white p-2 text-2xl  rounded-lg'>Insert</button>
            </div>
          </form>
        </div>

</div>


<div className="cardRight col-span-2  space-y-4  h-20 ">
        <div className="card bg-white p-4 rounded-lg ">
        <form>
            <div className="header">
                <h1>Input-col-2 forms</h1>
            </div>
            <div className="col-md-3 grid grid-cols-2  md:grid-cols-2 gap-4 mt-2 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
            </div>

            <div className="col-md-3 grid grid-cols-2  md:grid-cols-2 gap-2 mt-4 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                
            </div>

            <div className="col-md-3 grid grid-cols-3  md:grid-cols-3 gap-2 mt-4 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                
            </div>



            <div className="col-md-3 grid grid-cols-1  md:grid-cols-3 gap-2 mt-4 w-full">
                <div className="form-control col-span-2 ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
               
                
                
            </div>

            <div className="btn mt-5 p-4 text-end">
                <button  className='border border-sky-700  hover:bg-sky-700 hover:text-white p-2 text-2xl  rounded-lg'>Insert</button>
            </div>
          </form>
        </div>




        <div className="card bg-white p-4 rounded-lg ">
        <form>
            <div className="header">
                <h1>Input-col-2 forms</h1>
            </div>
            <div className="col-md-3 grid grid-cols-2  md:grid-cols-2 gap-4 mt-2 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
            </div>

            <div className="col-md-3 grid grid-cols-2  md:grid-cols-2 gap-2 mt-4 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                
            </div>

            <div className="col-md-3 grid grid-cols-3  md:grid-cols-3 gap-2 mt-4 w-full">
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full  h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>

                
            </div>



            <div className="col-md-3 grid grid-cols-1  md:grid-cols-3 gap-2 mt-4 w-full">
                <div className="form-control col-span-2 ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
                <div className="form-control ">
                    <input type="text" className='form-control border border-slate-300 w-full h-8 p-2 focus:outline-none' placeholder='input form'/>
                </div>
               
                
                
            </div>

            <div className="btn mt-5 p-4 text-end">
                <button  className='border border-sky-700  hover:bg-sky-700 hover:text-white p-2 text-2xl  rounded-lg'>Insert</button>
            </div>
          </form>
        </div>
</div>




<div className="">
    h1

</div>



        </div>




    </div>
   </div>



    </div>
  )
}

export default FormsElemnt