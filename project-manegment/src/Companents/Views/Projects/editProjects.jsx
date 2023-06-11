
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


import ValidationProjects from '../Validtions/ValidtionProjects';
function EditProjects() {

  
  const [data,setData]= useState([]);
  const [dataCategry,setDataCategry]= useState([]);
  const [dataMember,setDataMember]= useState([]);
 
  const [ values , setValues ] = useState({
      pName:'',
      maneger:'',
      categry: '',
      team:'',
      start: '',
      end:'',
      status: ''
  
   });
   const [errors,setErrors]=useState({})
   const navgate=useNavigate();
// edit get data value
const {id} = useParams();
useEffect(()=> {
 
  axios.get('http://localhost:2022/bages/dashboard/ProjectManegment/projects/edit/'+id)
  .then(res => 
    {
      setValues({...values ,
          pName: res.data.Data[0].Name,
          maneger: res.data.Data[0].mid,
          categry: res.data.Data[0].categryId,
          team: res.data.Data[0].team_id,
          start: res.data.Data[0].StartDate,
          end: res.data.Data[0].EndDate,
          status: res.data.Data[0].Status,
        
      
      })
    }
      // console.log(res)
      
      
      )
  .catch(err => console.log(err));
},[])


// insert data


const handleInput =(event)=>{
setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
}

 




function handleSubmit (event){
  event.preventDefault();
  setErrors(ValidationProjects(values));
  if(errors.pName === "" &&     errors.start === "" &&  errors.end === ""   ) {
    axios.put('http://localhost:2022/bages/dashboard/ProjectManegment/projects/edit/'+id, values)
    .then(res => {
      
            navgate('/bages/dashboard/ProjectManegment/TeamMembers/listTeamMember');
      
      
    })
    .catch(err => console.log(err));
  }

}




///  select table options

useEffect(()=>{
    axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/projects/edit/maneger/:id")
    .then(res =>setData(res.data))
    .catch(err => console.error(err));
},[]);


useEffect(()=>{
    axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/projects/edit/categry/:id")
    .then(res =>setDataCategry(res.data))
    .catch(err => console.error(err));
},[]);

useEffect(()=>{ 
    axios.get("http://localhost:2022/bages/dashboard/ProjectManegment/projects/edit/Member/:id")
    .then(res =>setDataMember(res.data))
    .catch(err => console.error(err));
},[]);

  return (
    <div>
     

    <div className="container bg-white border p-4">
    <div className="header">
       <h1 className="text-2xl">
          Edit Projects
       </h1>
    </div>
       <div className="row">
           
               
   <form onSubmit={handleSubmit} >
       <div className="card p-4 grid grid-cols-3 gap-4">
             <div className="form-contarol">
             <label htmlFor="">Project Name</label>
               <input type="text" 
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'name='pName'
               value={values.pName}
              onChange={handleInput}/>
               {errors.pName && <span className='text-rose-700'>{errors.pName}</span>}
             </div>

             <div className="form-contarol">
               <label htmlFor="">Manegers</label>
               <select type="text"  name='maneger' value={values.maneger}
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               onChange={handleInput}>

                   {/* <option value="..."></option>
                   <option value="...">Mesud abdirahmaan</option>
                   <option value="...">Amino abdirahmaan</option> */}
                   <option value="--chose Manegers--">--chose Manegers--</option>
                  {
                    data.map((dataManegrs,i)=>(
                       
                       <option value={dataManegrs.mid}>{dataManegrs.m_name}</option>
                       ))
                  }

                   </select>
             </div>


             <div className="form-contarol">
               <label htmlFor="">Categry</label>
               <select type="text" name='categry'
                value={values.categry}
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               onChange={handleInput}>

                   <option value="...">--chose Categry--</option>
                   {
                    dataCategry.map((dataCategries,i)=>(
                       
                       <option value={dataCategries.categryId}>{dataCategries.categry}</option>
                       ))
                  }

                   </select>
             </div>

             <div className="form-contarol">
               <label htmlFor=""> Members</label>
               <select type="text"  name='team' value={values.team}
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               onChange={handleInput}>

                   <option value="...">--chose Members--</option>
                   {
                    dataMember.map((datamember,i)=>(
                       
                       <option value={datamember.team_id}>{datamember.team_name} / {datamember.level}</option>
                       ))
                  }

                   </select>
             </div>


             <div className="form-contarol">
             <label htmlFor="">Start date</label>
               <input type="date" name='start' value={values.start}
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               onChange={handleInput}/>
               {errors.start && <span className='text-rose-700'>{errors.start}</span>}
             </div>


             <div className="form-contarol">
             <label htmlFor="">end date</label>
               <input type="date" name='end' value={values.end}
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               onChange={handleInput}/>
               {errors.end && <span className='text-rose-700'>{errors.end}</span>}
             </div>


             <div className="form-contarol">
             <label htmlFor="">Status</label>
             <select type="text" name='status'
               className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
               value={values.status}
              onChange={handleInput}>

                   <option value="...">--chose Status--</option>
                   <option value="Processing">Processing</option>
                   <option value="Pandin">Pandin</option>
                   <option value="Complete">Complete</option>
                   </select>
             </div>







             </div>
             <div className="text-end">
               <button className='text-2xl bg-green-400 text-white p-2 rounded-md'>Updated</button>
             </div>
               </form>

           
       </div>
    </div>


   </div>
  )
}

export default EditProjects