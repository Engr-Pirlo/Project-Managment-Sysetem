import React from 'react'
import islaamOne from '../img/Islaam/01.jpg'
import islaamimgtwo from '../img/Islaam/03.jpg'
import islaamimgthree from '../img/Islaam/05.jpg'
function Islaam() {
  return (
    <div>
         <div className="header">
        <h1 className='text-2xl'>ISLAAM / MUSLIMS</h1>
        
      </div>
    <div className="container">
      <div className="row ">
       <div className="card grid grid-cols-1 md:grid-cols-4 gap-2">
       <div className="cardLeft col-span-2  space-y-4">
  <div className="bg-white  p-4  rounded-lg shadow-2xl">
    <h1>Islaam</h1>
   

  </div>
  <div className="bg-white  p-4 ">
    <h1>Islaam</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloremque molestias distinctio et hic quod, aliquam cum iusto non consectetur impedit accusantium eveniet consequuntur, minus modi tempore in expedita reiciendis.
    Illum, quae corporis esse ut reiciendis quis alias error ratione molestiae. Perferendis, sapiente ex nihil nostrum minima hic adipisci, aperiam nam incidunt molestias commodi odit labore iusto repellat error itaque!
    Sunt ad similique eius illo odit pariatur eaque voluptate, cumque dolor quas soluta facilis nam dignissimos, obcaecati accusantium in? Similique hic nobis laborum temporibus itaque! Magni molestias qui in quisquam?
    Cupiditate, qui, nobis adipisci temporibus, deserunt corrupti esse impedit inventore commodi soluta porro aut officia repudiandae accusantium ullam nesciunt voluptatum non unde architecto. Ex nostrum odio porro, quis quaerat cum.</p>
   

  </div>

  <div className="bg-white   ">
  

    <img src={islaamimgthree} className='h-96 w-full' alt=""  srcset="" />

  </div>

  
        </div>
        <div className="cardMiddle   space-y-4 ">
        <div className="">
    <img src={islaamOne} alt=""  srcset="" />
    </div>

<div className="bg-white">
<h1 className='p-2 text-2xl text-rose-300'>Inbox</h1>
<ul>
  <p className='p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eaque eligendi distinctio, odio possimus minus fugiat voluptatibus eum reiciendis consectetur eveniet magnam ipsa voluptas at laboriosam quibusdam. Sequi, similique tempore.
  Dicta odio ullam doloribus, minima provident, maxime placeat consectetur vero quis praesentium voluptas officia quia unde cum tempore quisquam recusandae rerum voluptatibus non ipsam velit facilis. Laboriosam nesciunt incidunt commodi!
  Voluptatem, quos. Consequuntur eius blanditiis quas vel fugiat perspiciatis libero ipsa odit, ullam, veritatis expedita velit quod explicabo hic ipsam dolores non eveniet rerum. Velit repudiandae voluptatibus atque cumque cum! </p>
</ul>
</div>
          </div>


          <div className="cardRight  space-y-4  h-20 ">
      
    <div className="">
    <img src={islaamimgtwo} className='h-96 w-full cursor-pointer hover:mt-10 hover:rounded-2xl' alt="" srcset="" />
    </div>

    <div className="bg-white">
    <h1 className='p-2 text-2xl text-rose-300'>Text</h1>
    <ul>
      <p className='p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eaque eligendi distinctio, odio possimus minus fugiat voluptatibus eum reiciendis consectetur eveniet magnam ipsa voluptas at laboriosam quibusdam. Sequi, similique tempore.
      Dicta odio ullam doloribus, minima provident, maxime placeat consectetur vero quis praesentium voluptas officia quia unde cum tempore quisquam recusandae rerum voluptatibus non ipsam velit facilis. Laboriosam nesciunt incidunt commodi!
      Voluptatem, quos. Consequuntur eius blanditiis quas vel fugiat perspiciatis libero ipsa odit, ullam, veritatis expedita velit quod explicabo hic ipsam dolores non eveniet rerum. Velit repudiandae voluptatibus atque cumque cum! </p>
    </ul>
    </div>

          </div>
          
       </div>

       

      </div>
    </div>


    </div>
  )
}

export default Islaam