import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from 'react-icons/gr';
import { FiPrinter } from 'react-icons/fi';
function Reborts() {
    // const [ datareding , setValuess ] = useState([])
    const [open,setOpen ]=useState(false);
    const [dataValue, setValues ] = useState([],{
         all:'',
         categry:'',
         status: ''
     
     });

    //  const [values,setValue] = useState([data]);
     const handleInput =(event)=>{
        setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
       }

    //    useEffect(()=>{
    //     axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/projects/Reborts",data)
    //                  .then(res => values(res.data))
    //                  .catch(err => console.error(err));

    //                 },[]);
    function handleSubmit (event){
       event.preventDefault();
       
            axios.post("http://localhost:2022/bages/dashboard/ProjectManegment/projects/Reborts",dataValue)
            .then(res => 
                {
                    setValues(res.data);
                    console.log(dataValue);
                }
            
            )
            .catch(err => console.error(err));
      
       
     
   }
        
  return (
    <div>
        <div className="container ">
            <div className="row">
                <div className="card bg-white ">
                    <h1 className="text-2xl p-4">Reborts</h1>
                 
                 <div className="container">
                 <form action=""  onSubmit={handleSubmit}>
                    <div className="row grid grid-cols-3 gap-4 p-4">
                        <div className="form-control">
                         

                          
                           <select  className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2' id='all'
                           onChange={handleInput}>
                            
                            {/* <option value="0">--option--</option> */}
                            <option value="">All</option>
                            <option value="..">Costomer</option>
                            </select>
                        </div>

                        <div className="form-control">
                        <select  className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2' id='categry'
                        onChange={handleInput}>
                            
                            {/* <option value="">--option categry--</option> */}
                            <option value="Web devlopment">All</option>
                            <option value="..">Costomer</option>
                            </select>
                        </div>


                        <div className="form-control">
                        <select  className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2' name='status'
                        onChange={handleInput}>
                            
                        

                    {/* <option value="">--chose Status--</option> */}
                    {/* <option value="Processing">Processing</option> */}
                    <option value="Pandin">Pandin</option>
                    <option value="Complete">Complete</option>
                    </select>
                        </div>

                    </div>

                    <div 
                        className='text-end p-2 cursor-pointer  text-white   text-2xl'  onClick={()=>setOpen(!open)}>
                        {
					open ?(
                        <button className='bg-slate-800 border p-1 text-2xl '> Search</button>
					):(
                       <button className='bg-slate-800 border p-1 text-2xl '> Search</button>
					
					)
					}
                       
                    </div>
                    </form>




                    <div className={`'table border mt-10 p-3 hidden md:grid grid-cols-1 ' ${open ? "flex":"hidden"}`} >
  <table className='table border'>
    <thead className='  bg-slate-800 border text-white'>
      <tr>
        <td className='p-2'>#</td>
        <td>Project Name</td>
        <td>Manager</td>
        <td>Teamname</td>
        <td>Categry</td>
        <td>Status</td>
        {/* <td>Joindate</td> */}
        {/* <td>Action</td> */}
      </tr>
    </thead>
    <tbody className='p-4 '>
     
    {

    dataValue.map((students,index)=>{
           return <tr className='p-4' key={index}>
            <td className='p-2'>{students.pid}</td>
             <td>{students.projectName}</td>
            <td>{students.manager}</td>
            {/* <td>{students.enddate}</td> */}
            <td>{students.Teamname}</td>
            <td>{students.categry}</td>
            <td>{students.Status}</td>  

           
          
          
        </tr>
})
       }
     

       

    
   
    </tbody>

    </table>


   
    <div className="text-end space-x-3">
        <button className='bg-slate-300 border p-2 m-2 rounded-md'> <FiPrinter/> </button>
        <button className='bg-slate-300 border p-2 m-2 rounded-md'> <GrDocumentPdf/> </button>
    </div>

    </div>

                 </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}



export default Reborts