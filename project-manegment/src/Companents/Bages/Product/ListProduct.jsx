import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import { FcEmptyFilter } from 'react-icons/fc';
import { FiFileText, FiPrinter } from "react-icons/fi";
import { HiOutlineXMark } from 'react-icons/hi2';
import { RiFileList3Line, RiZoomInLine } from "react-icons/ri";

import Mackbook from'../../img/Products/Mackbook.jpg'

import Samsong from'../../img/Products/SamSong.jpg'

import Iphone  from'../../img/Products/Iphone 11.jpg'


import {Link} from "react-router-dom"
import { AiFillEye } from 'react-icons/ai';


const customStyles ={
    headRow:{
        style:{
            background:'blue',
            color:'white'
        }
    }
}
function ListProduct() {

    const [open,setOpen ]=useState(false);
    const columns =[
        {
            name:'productName',
            selector: row => row.name,
            sortable: true,
        },
        {
            name:'Categry',
            selector:row => row.Categry,
            sortable: true,
        },
         {
            name:'quantity',
            selector:row => row.quantity,
            sortable: true,
        },
     
        
        {
            name:'Price',
            selector:row =>row.Price,
            sortable: true,
        },

        {
            name:'total',
            selector: row => row.Total,
            sortable: true,
        },
        {
            name:'Created_By',
            selector: row => row.Created_By,
            sortable: true,
        },
        {
            name:'Action',
            selector: row => row.action,
            sortable: true,
        }
    ];
    const data=[
        {
            id:1,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Mackbook} className='w-full' alt="" srcset="" /> Iphone X max</span>,
            Categry:"C0384",
            quantity:3,
            Price:800,
            Total:3220,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/Products/ViewProducts'><AiFillEye/>  </Link> <Link to='/Products/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>



        },
        {
            id:2,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Iphone} className='w-full' alt="" srcset="" /> Iphone 11</span>,
            Categry:"C0384",
            quantity:2,
            Price:400,
            Total:800,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/ViewProducts'><AiFillEye/>  </Link> <Link to='/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>


        },
        {
            id:3,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Samsong} className='w-full' alt="" srcset="" /> Samsong</span>,
            Categry:"C0384",
            quantity:20,
            Price:1,
            Total:20,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/ViewProducts'><AiFillEye/>  </Link> <Link to='/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>


        },



        {
            id:4,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Mackbook} className='w-full' alt="" srcset="" /> Iphone X max</span>,
            Categry:"C0384",
            quantity:3,
            Price:800,
            Total:3220,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/ViewProducts'><AiFillEye/>  </Link> <Link to='/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>



        },
        {
            id:5,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Iphone} className='w-full' alt="" srcset="" /> Iphone 11</span>,
            Categry:"C0384",
            quantity:2,
            Price:400,
            Total:800,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/ViewProducts'><AiFillEye/>  </Link> <Link to='/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>


        },
        {
            id:6,
            name:<span className='flex space-x-3 items-center justify-center'><img src={Samsong} className='w-full' alt="" srcset="" /> Samsong</span>,
            Categry:"C0384",
            quantity:20,
            Price:1,
            Total:20,
            Created_By:'Admin',
            action:<button className=' flex space-x-4'><Link to='/ViewProducts'><AiFillEye/>  </Link> <Link to='/editProducts'><FaMarker/></Link> <span><FaTrashAlt/></span>  </button>


        },
       

    ]

    const [records,setRecords] = useState(data);
  function handleFiltering(e){
   


    //    e.preventDefault();
       const newData = data.filter(row => {
        return row.name.toLowerCase().includes(e.target.value.toLowerCase())
       })
       setRecords(newData);
    console.log(setRecords);
   }

  return (
    <div className='main'>

        <div className="header flex justify-between p-2">
            <div className="">
            <h1>Product List</h1>
            <p>Manage your Purchase</p>
            </div>
            <div className="btn">
             <Link to='/Products/CreateProducts' className=" bg-blue-500 items-center rounded-lg p-2"> +  Add New Product</Link>
            </div>
        </div>


        <div className="container">
            <div className="row">
                <div className="card bg-white p-4 border ">

                    <div className="headerTable flex justify-between">

                   
                    <div className="left flex space-x-4">


                    <div className="cursor-pointer  
              flex justify-center items-center  text-4xl  duration-300" onClick={()=>setOpen(!open)}>
					{
					open ?(
						<HiOutlineXMark fontSize={40} className='bg-rose-700 p-2 border text-white'/>
					):(
                        <FcEmptyFilter  className='bg-blue-700 p-2 border text-white' fontSize={40}/>
					
					)
					}
                    </div>
                        
                    <input type="text" placeholder='searchin' className='border  p-1 '
                    onChange={handleFiltering}/>
                    </div>
                 <div className="right flex space-x-2 ">
                    <FiFileText fontSize={24} className="text-rose-300 cursor-pointer"/>
                    <RiFileList3Line fontSize={24} className="text-sky-300 cursor-pointer"/>
                    <FiPrinter fontSize={24} className="text-blue-300 cursor-pointer"/>
                 </div>
                 </div>
                 <form action="" className={`'mt-10 p-3 hidden' ${open ? "flex":"hidden"}
  `} >
                <div className="container">
                <div className="SearchingData  grid grid-cols-2 md:grid-cols-8 gap-4">
                  
                <div className="form-control col-span-2">
                      <select name="" id="" className='form-control border border-slate-300 w-full p-2 focus:outline-none focus:border-blue-400 ' >
                          <option value="" className='bg-blue-400'>chose Products</option>
                          <option value="">Iphone 11</option>
                          <option value="">Samsong</option>
                      </select>
                  </div>

                  <div className="form-control col-span-2">
                      <select name="" id="" className='form-control border border-slate-300 w-full p-2 focus:outline-none focus:border-blue-400 ' >
                          <option value="" className='bg-blue-400'>chose Products</option>
                          <option value="">Iphone 11</option>
                          <option value="">Samsong</option>
                      </select>
                  </div>

                  <div className="form-control col-span-2">
                      <select name="" id="" className='form-control border border-slate-300 w-full p-2 focus:outline-none focus:border-blue-400 ' >
                          <option value="" className='bg-blue-400'>chose Products</option>
                          <option value="">Iphone 11</option>
                          <option value="">Samsong</option>
                      </select>
                  </div>

                  <div className="form-control ">
                      <select name="" id="" className='form-control border border-slate-300 w-full p-2 focus:outline-none focus:border-blue-400 ' >
                          <option value="" className='bg-blue-400'>chose Price</option>
                          <option value="">1,202</option>
                          <option value="">3,200</option>
                      </select>
                  </div>

                  <div className="btn text-end">
                    <button className='bg-blue-500 p-4 rounded-xl text-white'><RiZoomInLine fontSize={17}/></button>
                  </div>


             
           </div>
           
                </div>
                </form>
                    <DataTable 
                            columns={columns}
                            data = {records}
                            // data={data}
                            
                           customStyles={customStyles}
                            pagination
                            selectableRows
                            selectableRowsHighlight
                            highlightOnHover
                            fixedHeader
                    ></DataTable >

                </div>
            </div>
        </div>
    </div>
  )
}

export default ListProduct