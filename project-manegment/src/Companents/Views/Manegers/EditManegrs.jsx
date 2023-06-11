
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ValidationTeam from '../Validtions/TeamValidtion';
import ValidationManeger from '../Validtions/ValidtionManeger';


function EditManegrs() {

  const [ data , setValues ] = useState({
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

  const {id} = useParams();
  useEffect(()=> {
   
    axios.get('http://localhost:2022/bages/dashboard/ProjectManegment/Manegrs/editManeger/'+id)
    .then(res => 
      {
        setValues({...data,
          
            name: res.data.Data[0].m_name,
            email: res.data.Data[0].M_Emali,
            experices: res.data.Data[0].M_Experices,
            adress: res.data.Data[0].M_address,
          
        
        })
      }
        // console.log(res)
        
        
        )
    .catch(err => console.log(err));
  },[])
  

  function handleSubmit (event){
    event.preventDefault();
    setErrors(ValidationManeger(data));
      if(errors.name === "" &&  errors.email === "" &&  errors.experices === ""  &&  errors.adress === ""  ) {
      axios.put('http://localhost:2022/bages/dashboard/ProjectManegment/Manegrs/editManeger/'+id, data)
      .then(res => {
        
             if(res.data.Status === "Success"){
                  navgate('/bages/dashboard/ProjectManegment/Manegrs/listManeger');
             }
        
        
      })
      .catch(err => console.log(err));
    }

  }




  return (
    <div>
    <div className="header">
   <h1 className='text-2xl'>Add User </h1>
   
 </div>

 <div className="contaier mt-4">
   <div className="row">
       <div className="card bg-white rounded-md  border p-4">

           <form onSubmit={handleSubmit}>
               <div className="col-md-12">
                 <div className="row grid grid-cols-1 md:grid-cols-6 md:gap-4 gap-4">
                 <div className="form-control col-span-2">
                       <label> Name</label><br/>
                       <input type="text" name='name' id='' value={data.name}
                        className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                        onChange={handleInput}/>
                        {errors.name && <span className='text-rose-700'>{errors.name}</span>}
                   </div>

                   <div className="form-control col-span-2">
                       <label> Email</label><br/>
                       <input type="text" name='email' id='' value={data.email}
                        className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                        onChange={handleInput}/>
                        {errors.email && <span className='text-rose-700'>{errors.email}</span>}
                   </div>


                   <div className="form-control col-span-2">
                       <label>Team No</label><br/>
                       <input type="text" name='experices' id='' value={data.experices}
                        className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                        onChange={handleInput}/>
                     {errors.experices && <span className='text-rose-700'>{errors.experices}</span>}
                   </div>



                   <div className="form-control col-span-2">
                       <label>adress</label><br/>
                       <input type="text" name='adress' id='' value={data.adress}
                        className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                        onChange={handleInput}/>
                     {errors.adress && <span className='text-rose-700'>{errors.adress}</span>}
                   </div>

                  


                 

                   
                 

                   
                 </div>
                

                 <div className="text-end p-3">
                   <button className='p-1 bg-blue-500 text-2xl  text-white rounded-md'>Update</button>
                 </div>

               </div>
           </form>

       </div>
   </div>
 </div>


</div>
  )
}

export default EditManegrs