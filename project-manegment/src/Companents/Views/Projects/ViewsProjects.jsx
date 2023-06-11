import React from 'react'
import { FiPrinter } from 'react-icons/fi'
import { GrDocumentPdf } from 'react-icons/gr'

function ViewsProjects() {
  return (
    <div>

        <div className="header border p-4 bg-white">
          <div className="row grid-cols-1 grid md:grid-cols-3">
            <div className="text">
                <h1 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam </h1>
            </div>
            <div className="bg-rose-700 rounded-full h-28 w-28">

            </div>

            <div className="">
                <h1 className='text-2xl'>تقع القاهرة على جوانب جزر نهر النيل في شمال مصر.</h1>
            </div>
          </div>
        
        </div>
        <div className="body border bg-white p-2 space-y-3">
            <div className="flex  justify-between">
            <div className="flex space-x-1">
            <strong>Project Name</strong>
            <p>School Manegment System </p>
            </div>

            <div className="flex space-x-1">
            <strong>Project date</strong>
            <p>12/2/2023 </p>
            </div>

            </div>

            <div className="flex space-x-1">
            <strong>Project Maneger</strong>
            <p>Eng,Mascuud abdirahmaan </p>
            </div>


            <div className="flex space-x-1">
            <strong>Project Team</strong>
            <p>Group B </p>
            </div>

            <div className="flex space-x-1">
            <strong>Project Categry</strong>
            <p>Web Devloper </p>
            </div>


            <div className="flex space-x-1">
            <strong>Project Status</strong>
            <p>Complate </p>
            </div>

            <div className="flex space-x-1">
            <strong>Project StartDate</strong>
            <p>2024-10-20 </p>
            </div>

            <div className="flex space-x-1">
            <strong>Project EndDate</strong>
            <p>2024-10-25 </p>
            </div>

            <div className="flex space-x-1">
            <strong>Project days</strong>
            <p>5 </p>
            </div>



        </div>

        
        <div className="text-end  border bg-white">
        <button className='bg-slate-300 border p-2 m-2 rounded-md'> <FiPrinter/> </button>
        <button className='bg-slate-300 border p-2 m-2 rounded-md'> <GrDocumentPdf/> </button>
  
        </div>


    </div>
  )
}

export default ViewsProjects