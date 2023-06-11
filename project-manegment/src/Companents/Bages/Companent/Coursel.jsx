import React, { useState } from 'react'
import img1 from '../../img/card.jpg'
import img2 from '../../img/news-1.jpg'
import { BiChevronLeft,BiChevronRight } from 'react-icons/bi'

const Slides =[
    {
        imges:img1,img2
       
     
    },
   
]
function Coursel() {


    const [slide,setSlides]=useState(0)

    const previw =()=>
    setSlides((slides) =>(slides === 0 ? slides.length -1 : slides -1))

    const Next =()=>
    setSlides((slides) =>(slides ===  slides.length -10 ? 0 : slides +1))
  return (
    <div className='main'>
    <div className="header">
   <h1 className='text-2xl'>Coursel</h1>
   
 </div>

 <div className="container">
    <div className="row">
        <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="overflow-hidden relative">
  <div className="card flex grid grid-flow-col-1 md:grid-flow-col-4">

   {
    Slides.map((s,index)=>(
        <div className="col-span-2 transition-transform ease-out duration-75"  styl={{transform: `translateX(-${slide *100}%)`}}>
        <img src={s.imges} alt="" srcset=""  className='w-full'/>
        </div>
    ))
   }
 
    </div>
  <div className="absolute inset-0 flex items-center justify-between">
  <button onClick={previw} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hove:bg-white'>
    < BiChevronLeft size={40}/>
  </button>

  <button onClick={Next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hove:bg-white'>
    <BiChevronRight size={40}/>
  </button>
  </div>
 </div>

        </div>
    </div>
 </div>




    </div>
  )
}

export default Coursel