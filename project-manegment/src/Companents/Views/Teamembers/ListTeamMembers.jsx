import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMarker, FaTrashAlt } from "react-icons/fa";
function ListTeamMembers() {
    const [teamMember,setTeamMember] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/TeamMembers/listTeamMember")
        .then(res =>setTeamMember(res.data))
        .catch(err => console.error(err));
    },[]);

    const handleDelete = (id) => {
      axios.delete('http://localhost:2022/bages/dashboard/ProjectManegment/TeamMembers/listTeamMember/'+id)
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
             <div className="header">
            <h1>desognetion </h1>
        </div>

        <div className="container">
        <div className="card bg-white border p-4">
            <div className="header flex justify-between ">
              <div className="">
              <h1>Maneg Users</h1>
               
              </div>
   <div>
   <Link to='/bages/dashboard/ProjectManegment/TeamMembers/createTeamMember'> Add New </Link>
   </div>

            </div>

        <div className="table-reponsive grid md:grid-cols-1 p-2 ">
  <table className='table border  '>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>TeamId</td>
        <td>TName</td>
        <td>temail</td>
        <td>tNo</td>
        <td>Categry</td>
        <td>level</td>
        <td>Joindate</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody className='p-4 '>
     
    {

     teamMember.map((teamMembers,index)=>{
           return <tr className='p-4' key={index}>
            <td className='p-2'>{teamMembers.team_id}</td>
            <td>{teamMembers.team_name}</td>
            <td>{teamMembers.team_Email}</td>
            <td>{teamMembers.Team_No}</td>
            <td>{teamMembers.categryId}</td>
            <td>{teamMembers.level}</td>
            <td>{teamMembers.date}</td>

            <td className='flex mt-2 space-x-4'>
               <Link to={`/bages/dashboard/ProjectManegment/TeamMembers/editTeamMember/`+ teamMembers.team_id}><FaMarker /></Link>
                <button onClick={ e => handleDelete(teamMembers.team_id)} > <FaTrashAlt/> </button>
          
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

export default ListTeamMembers