import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import {  UpdatedUser, adddata } from './Context/ContextProvider';
import { AiOutlineClose } from 'react-icons/ai';
function ListUser() {
    const [student,setStudent] = useState([]);
    const [open,setOpen ]=useState(true);
    const [openedit,setOpenedit ]=useState(true);
    const {successdata , setSuccessdata} = useContext(adddata);
    const {updateduserData , setUpdateduserData}=useContext(UpdatedUser);
    // console.log(successdata);

    useEffect(()=>{
        axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/Accoung/listUser")
        .then(res =>
          setStudent(res.data))
        .catch(err => console.error(err));
    },[]);

    const handleDelete = (id) => {
      axios.delete('http://localhost:2022/bages/dashboard/ProjectManegment/Accoung/listUser/'+id)
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
    <div>

     
            
             <>
      {
        
                successdata ?
                    <>
                        <div className={`" bg-green-300 flex justify-between p-2 font-mono text-2xl text-white  " role="alert" ${open ? "flex":"hidden"}`}>
                            
                            <div className='flex space-x-3' >
                            <strong>{successdata} </strong> 
                            <span> Success full new Users</span>
                            </div>
                            <div className="text-end">
                            <button type="button" onClick={()=>setOpen(!open)} class="btn-close" data-bs-dismiss="alert" aria-label="Close"><AiOutlineClose/></button>
                            </div>
                        </div>
                    </> : ""
            }
      </>
      



      <>
      {
                updateduserData ?
                    <>
                        <div className=" bg-green-300 flex justify-between p-2 font-mono text-2xl text-white  " role="alert" >
                            
                            <div className='flex space-x-3'>
                            <strong>{updateduserData} </strong> 
                            <span> Updated  Users data</span>
                            </div>
                            <div className="text-end">
                            <button type="button"  class="btn-close" data-bs-dismiss="alert" aria-label="Close"><AiOutlineClose/></button>
                            </div>
                        </div>
                    </> : ""
            }
      </>
      

        <div className="container mt-5">
        <div className="card bg-white border p-4">
            <div className="header flex justify-between ">
              <div className="">
              <h1>Maneg Users</h1>
               
              </div>
   <div>
   <Link to='/bages/dashboard/ProjectManegment/Accoung/CreateUser'> Add desigetion </Link>
   </div>

            </div>

        <div className="table-reponsive grid md:grid-cols-1 p-2 ">
  <table className='table border  '>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>Userid</td>
        <td>First Name</td>
        <td>User Name</td>
        <td>gmail</td>
        <td>Role</td>
        <td>password</td>
        <td>Joindate</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody className='p-4 '>
     
    {

     student.map((students,index)=>{
           return <tr className='p-4' key={index}>
            <td className='p-2'>{students.id}</td>
            <td>{students.firstName}</td>
            <td>{students.userName}</td>
            <td>{students.gmail}</td>
            <td>{students.Role}</td>
            <td>{students.password}</td>
            <td>{students.joindate}</td>

            <td className='flex mt-2 space-x-4'>
               <Link to={`/bages/dashboard/ProjectManegment/Accoung/editUser/`+ students.id}><FaMarker /></Link>
                <button onClick={ e => handleDelete(students.id)} > <FaTrashAlt/> </button>
          
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

export default ListUser