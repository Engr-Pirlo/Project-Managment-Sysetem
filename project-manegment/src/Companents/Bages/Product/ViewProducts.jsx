import React from 'react'

function ViewProducts() {
  return (
    <div>ViewProducts


        <div className="container">
            <div className="row grid grid-cols-1 md:grid-cols-6">
               

                    {/* <h1>Information Broducts</h1> */}

                    <div className="left col-span-4">
                    <div className="card bg-white border p-2   ">
                    <div className=" flex col-span-3">
                        <h1 className=' border w-36 p-2'>Home</h1>
                        <h1 className='border w-full p-2 col-span-3'>Home</h1>
                    </div>
                    <div className=" flex col-span-4">
                        <h1 className=' border w-36 p-2'>Home</h1>
                        <h1 className='border w-full p-2 col-span-3'>This is</h1>
                    </div>

                    <div className=" flex col-span-4">
                        <h1 className=' border w-36 p-2'>Home</h1>
                        <h1 className='border w-full p-2 col-span-3'>Home</h1>
                    </div>


                    <div className=" flex col-span-3">
                        <h1 className=' border w-36 p-2'>Note</h1>
                        <h1 className='border w-full p-2 col-span-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, provident. Sit, nihil ducimus illo mollitia, et praesentium, quo provident dolorem accusantium aliquam nobis maiores suscipit aliquid architecto rerum? Quae, explicabo.</h1>
                    </div>
                    
                    </div>
                    </div>
   <div className="left">
   <div className="card bg-white border p-2  ">
                   <h1>helo</h1>
                    </div>
   </div>

                   

            </div>
        </div>
    </div>
  )
}

export default ViewProducts