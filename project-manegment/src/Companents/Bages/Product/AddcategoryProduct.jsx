import React from 'react'

function AddcategoryProduct() {
  return (
    <div>
        
        
        <div className="header">
        <h1 className='text-2xl'>Add Category </h1>
        
      </div>

      <div className="contaier mt-4">
        <div className="row">
            <div className="card bg-white rounded-md  border p-4">

                <form>
                    <div className="col-md-12">
                      <div className="row grid grid-cols-1 md:grid-cols-4 md:gap-4 gap-4">
                      <div className="form-control col-span-2">
                            <label>Categry Name</label><br/>
                            <input type="text" name='' id='' className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'/>
                        </div>

                     

                        <div className="form-control col-span-2">
                            <label>cat</label><br/>
                            <input type="text" name='' id='' className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-full md:w-full  p-1 pr-2 '/>
                        </div>

                        
                        
                        <div className="form-control md:col-span-4">
                           
                           <textarea name=""  className='border w-full focus:outline-none w-full md:w-full  p-1'  id="" cols="30" rows="5" placeholder='Note '></textarea>
                        </div>

                        <div className="form-control md:col-span-4 ">
                           
                         <input type="file" className='border text-sm focus:outline-none p-2 active:outline-none border  border-gray-300 w-full md:w-full  p-1 pr-2 ' name="" id="" />
                        </div>
                        
                      </div>
                     

                      <div className="text-end p-3">
                        <button className='p-2 bg-blue-500 text-2xl  text-white'>Insert</button>
                      </div>

                    </div>
                </form>

            </div>
        </div>
      </div>


    </div>
  )
}

export default AddcategoryProduct