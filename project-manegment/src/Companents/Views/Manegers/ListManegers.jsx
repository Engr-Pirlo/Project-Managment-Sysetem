import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import { HiOutlineXMark } from 'react-icons/hi2';
import { FcEmptyFilter } from 'react-icons/fc';
import { AiOutlinePlus } from 'react-icons/ai';
import ValidationManeger from '../Validtions/ValidtionManeger';

function ListManegers() {
    const [open,setOpen ]=useState(false);
    
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/Manegrs/listManeger")
        .then(res =>setData(res.data))
        .catch(err => console.error(err));
    },[]);

   


    //insert data

    const [ values , setValues ] = useState({
      tName:'',
      temail:'',
      no: '',
      categry:'',
      level: ''
  
   });
   const [errors,setErrors]=useState({})

    const handleInput =(event)=>{
      setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
     }

 const navgate=useNavigate();
     function handleSubmit (event){
      event.preventDefault();
      setErrors(ValidationManeger(values));
      if(errors.name === "" &&  errors.email === "" &&  errors.experices === ""  &&  errors.adress === ""  ) {
        axios.post('http://localhost:2022/bages/dashboard/ProjectManegment/Manegrs/listManeger', values)
        .then(res => {
                 window.location.reload(true)
                // navgate('/bages/dashboard/ProjectManegment/Manegrs/listManeger');
          
          
        })
        .catch(err => console.log(err));
      }
  
    }



    const handleDelete = (id) => {
      axios.delete('http://localhost:2022/bages/dashboard/ProjectManegment/Manegrs/listManeger/'+id)
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
   {/* <Link to='/bages/dashboard/ProjectManegment/TeamMembers/createTeamMember'> Add New </Link> */}
           <div className="cursor-pointer  
              flex justify-center items-center  text-4xl  duration-300" onClick={()=>setOpen(!open)}>
					{
					open ?(
						            <HiOutlineXMark fontSize={40} className='bg-rose-700 p-2 border text-white'/>
					):(
                        <AiOutlinePlus className='bg-slate-700 p-2 border text-white' fontSize={40}/>
					
					)
					}
                    </div>
   </div>

            </div>

            <form action="" onSubmit={handleSubmit} className={`'mt-10 p-3 hidden' ${open ? "flex":"hidden"}
  `} >
                <div className="container p-2">
                    <div className="header">
                        <h1 className="text-2xl">
                            Add New Maneger
                        </h1>
                    </div>
                <div className="row grid grid-cols-3 gap-4 p-2">
                <div className="form-control">
                <label htmlFor="">Name</label>
                    <input type="text"  name='name'  className='border focus:outline-none p-2 bg-slate-100 text-3xl h-10 w-full'
                  onChange={handleInput}/>
                  {errors.name && <span className='text-rose-700'>{errors.name}</span>}
                </div>

                <div className="form-control">
                <label htmlFor="">Email</label>
                    <input type="text" name='email' className='border focus:outline-none p-2 bg-slate-100 text-3xl h-10 w-full'
                    onChange={handleInput}/>
                    {errors.email && <span className='text-rose-700'>{errors.email}</span>}
                </div>

                <div className="form-control">
                <label htmlFor="">Experices</label>
                    <input type="text"  name='experices' className='border focus:outline-none p-2 bg-slate-100 text-3xl h-10 w-full'
                   onChange={handleInput}/>
                   {errors.experices && <span className='text-rose-700'>{errors.experices}</span>}
                </div>

                <div className="form-control">
                    <label htmlFor="">Adress</label>
                    <input type="text" name='adress'  className='border focus:outline-none p-2 bg-slate-100 text-3xl h-10 w-full'
                    onChange={handleInput}/>
                    {errors.adress && <span className='text-rose-700'>{errors.adress}</span>}
                </div>
                </div>
                <div className="text-end">
                    <button className='bg-slate-800 rounded-md p-2 text-white'>insert</button>
                </div>
                </div>
            </form>



        



        <div className="table-reponsive grid md:grid-cols-1 p-2 ">
  <table className='table border  '>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>Manegerid</td>
        <td>Maneger</td>
        <td>Email</td>
   
        <td>Experices</td>
        <td>Adress</td>
        <td>Joindate</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody className='p-4 '>
     
    {

      data.map((Manegers,index)=>{
           return <tr className='p-4' key={index}>
            <td className='p-2'>{Manegers.mid }</td>
            <td>{Manegers.m_name}</td>
            <td>{Manegers.M_Emali}</td>
            <td>{Manegers.M_Experices}</td>
            <td>{Manegers.M_address}</td>
            <td>{Manegers.date}</td>

            <td className='flex mt-2 space-x-4'>
               <buttony 
  >
    
    {/* <FaMarker /> */}
    <Link   to={`/bages/dashboard/ProjectManegment/Manegrs/editManeger/`+Manegers.mid} ><FaMarker />
    {/* <div className="cursor-pointer  
              flex justify-center items-center    duration-300" onClick={()=>setOpenedit(!openedit)}>
					{
					openedit ?(
						            <HiOutlineXMark  />
					):(
                    // 
                    <h1>i</h1>
					
					)
					}
                    </div> */}
                    </Link>
    
    
    </buttony>
                <button onClick={ e => handleDelete(Manegers.mid)} > <FaTrashAlt/> </button>
          
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

export default ListManegers