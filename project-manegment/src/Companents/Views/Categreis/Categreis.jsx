import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import { FcEmptyFilter } from 'react-icons/fc';
import { FiFileText, FiPrinter } from "react-icons/fi";
import { HiOutlineXMark } from 'react-icons/hi2';
import { RiFileList3Line, RiZoomInLine } from "react-icons/ri";
import axios from 'axios'
import {Link, useNavigate, useParams} from "react-router-dom"
import { AiFillEye } from 'react-icons/ai';
import ValidationCategry from '../Validtions/ValidationCategry';




function Categreis() {



  // select read table
  const [Categrei,setCategrei] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:2022/bages/dashboard/ProjectManegment/Categreis/listCategreis')
      .then(res =>setCategrei(res.data))
      .catch(err => console.error(err));
  },[])





  const [data,setData] = useState({
    categry: ''
  });
   const navgate=useNavigate();
   const [errors,setErrors]=useState({})
 const handleInput =(event)=>{
  setData(prev => ({...prev,[event.target.name]:  [event.target.value]}))
 }



 function handleSubmit(event){
    event.preventDefault();
//  console.log(e);
   setErrors(ValidationCategry(data));
   if(errors.categry === "" ) {
      axios.post('http://localhost:2022/bages/dashboard/ProjectManegment/Categreis/listCategreis', data)
      .then(res => {
      // console.log(res);
        // alert("sucess");
         window.location.reload();
          navgate('/bages/dashboard/ProjectManegment/Categreis/listCategreis');
    }).catch(err => console.log(err));
  }
  }
  

//update reading useeffect

const {id } = useParams();
useEffect(()=> {
 
  axios.get(
    'http://localhost:2022/bages/dashboard/ProjectManegment/Categreis/listCategreis/'+id )
  .then(res => 
    {
      setData({...data,
          categry: res.data.Data[0].Categry,
        
        
      
      })

      // console.log(res.data.Data)
    }
     
      
      
      )
    .catch(err => console.log(err));
},[])





const handleDelete = (id) => {
  axios.delete('http://localhost:2022/bages/dashboard/ProjectManegment/Categreis/listCategreis/'+id)
  .then(res => {
    if (res.data.Status === 'Success') {

    
       window.location.reload(true)

    }else {
      alert("error deleting users")
    }
  })
  .catch(err => console.error(err))

}

 
  
  return (
    <div className='main'>

        <div className="header flex justify-between p-2">
            <div className="">
            <h1>Categry List</h1>
            <p>Manage your Purchase</p>
            </div>
            <div className="btn">
           <h1 className='text-slate-300'> home/about</h1>
            </div>
        </div>


        <div className="container">
            <div className="row grid grid-cols-1 md:grid-cols-3 gap-4">
               
<div className="left">
  <div className="card bg-white p-4 border">
<h1>Add Categreis</h1>
<form onClick={handleSubmit} className='mt-2'>
  <div className="form-control">
    <input type="text"
    className='p-2 w-full h-10 focus:outline-none  border '
    placeholder='Categreis name'
    name='categry' 
    value={data.categry}
    onChange={handleInput}/>
  </div>


  <div className="text-end m-2">
    <button className='bg-blue-700 p-1 text-lg rounded-md '>  Save  </button>
  </div>

</form>
  </div>
</div>

               <div className="right col-span-2">
               <div className="card bg-white p-4 border ">

<div className="headerTable flex justify-between">


<div className="left flex space-x-4 p-2">



    
<input type="text" placeholder='searchin' className='border  p-1 '/>
</div>

</div>

{/* <DataTable 
        columns={columns}
        data = {records}
        
        // header designe comment
       customStyles={customStyles}
        pagination
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        fixedHeader
></DataTable > */}
<div className="table-reponsive grid md:grid-cols-1">
  <table className='table border'>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>id</td>
        <td>Categry</td>
        <td>date</td>
        <td>Action</td>
      </tr>
    </thead>

    <tbody className='  space-x-3 bg-sky-600/5'>
    {
      Categrei.map((d,i)=>(
        <tr>
        <td className='p-2'>{d.categryId}</td>
        <td>{d.Categry}</td>
        <td>{d.date}</td>
        <td className='flex mt-2 space-x-4'>
        <Link to={`/bages/dashboard/ProjectManegment/Categreis/listCategreis/`+ d.categryId}><FaMarker/></Link>
         <button  onClick={ e => handleDelete(d.categryId)} > <FaTrashAlt/> </button>
          
          </td>
          </tr>
      ))
    }
      
    </tbody>

  </table>
</div>


</div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Categreis