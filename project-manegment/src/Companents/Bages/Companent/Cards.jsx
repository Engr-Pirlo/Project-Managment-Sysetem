import React from 'react'
import product from '../../img/product-1.jpg'
function Cards() {
  return (
    <div className='main'>
         <div className="header">
        <h1 className='text-2xl'>ALert</h1>
        
      </div>

      <div className="container">
        <div className="row grid grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" col-span-2  space-y-4  h-20 ">
        <div className="bg-white p-2 col-span-2">
            <h1 className='text-2xl text-sky-300'>Card</h1>
     
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis dolores accusamus dignissimos vero repudiandae tenetur sit rem inventore id
                 praesentium sunt dolorem magnam quas possimus quaerat quo, ex quia.</p>
        </div>

        <div className="bg-white  col-span-2">
         
            <img src={product} alt="" className='w-full' srcset="" />
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis dolores accusamus dignissimos vero repudiandae tenetur sit rem inventore id
                 praesentium sunt dolorem magnam quas possimus quaerat quo, ex quia.</p>
        </div>




</div>


<div className="row grid grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" col-span-4  space-y-4  h-20 ">

        <div className="bg-white  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          
            <img src={product} alt="" srcset="" />
           <div className="cardbody p-4">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis dolores accusamus dignissimos vero repudiandae tenetur sit rem inventore id
                 praesentium sunt dolorem magnam quas possimus quaerat quo, ex quia.</p>
           </div>
        </div>
</div>

</div>




<div className="row grid grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" col-span-4  space-y-4  h-20 ">

        <div className="bg-white  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          
            <img src={product} alt="" srcset="" />
         </div>
</div>

</div>



</div>
        </div>
      </div>
        



  )
}

export default Cards