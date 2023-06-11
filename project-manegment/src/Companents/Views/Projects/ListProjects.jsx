import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaMarker, FaTrashAlt } from "react-icons/fa";
import { HiOutlineXMark } from 'react-icons/hi2';
import { FcEmptyFilter } from 'react-icons/fc';
import { AiOutlinePlus } from 'react-icons/ai';
import ValidationManeger from '../Validtions/ValidtionManeger';

function ListProjects() {
   
    
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/projects/listProjects/view")
        .then(res =>setData(res.data))
        .catch(err => console.error(err));
    },[]);

   


  

    // const handleDelete = (id) => {
    //   axios.delete('http://localhost:2022/bages/dashboard/ProjectManegment/projects/listProjects/view'+id)
    //   .then(res => {
    //     if (res.data.Status === 'Success') {

        
    //        window.location.reload(true)

    //     }else {
    //       alert("error deleting users")
    //     }
    //   })
    //   .catch(err => console.error(err))

    // }

  return (
    <div>
             <div className="header">
            <h1>List Projects Mangers</h1>
        </div>

        <div className="container">
        <div className="card bg-white border ">
            <div className="header flex justify-between ">
              <div className=" p-4">
              <h1>Maneg Projects</h1>
               
              </div>
   

            </div>

         

        



        <div className="table-reponsive grid md:grid-cols-1 p-2 ">
  <table className='table border  '>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>#</td>
        <td>projectName</td>
        <td>manager</td>
   
        <td>TeamName</td>
        <td>categry</td>
        <td>Status</td>
        <td>Action</td>
      
      </tr>
    </thead>
    <tbody className='p-4 '>
     
    {

      data.map((brojects,index)=>{
           return <tr className='p-4' key={index}>
            <td className='p-2'>{brojects.pid}</td>
            <td>{brojects.projectName}</td>
            <td >{brojects.manager}</td>
            <td className='p-2'>{brojects.Teamname}</td>
            <td >{brojects.categry}</td>
            <td>
             {brojects.Status === "Pandin" ?  <span className='bg-green-500 rounded-md p-1'>{brojects.Status} </span>:
             <span className='bg-sky-300 rounded-md p-1'>{brojects.Status}</span>

               
            
               

             }
            </td>
            <td className='flex mt-2 space-x-4'>
            <Link to={`/bages/dashboard/ProjectManegment/projects/views/`+ brojects.pid}><FaEye /></Link>
               <Link to={`/bages/dashboard/ProjectManegment/projects/edit/`+ brojects.pid}><FaMarker /></Link>
                <button > <FaTrashAlt/> </button>
          
          </td>
           
           
        </tr>
})
       }
     

       

    
   
    </tbody>

    </table>
    </div>
        </div>



        




        </div>


    </div>
  )
}

export default ListProjects