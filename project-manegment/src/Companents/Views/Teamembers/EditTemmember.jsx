
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ValidationTeam from '../Validtions/TeamValidtion';



function EditTemmember() {



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
       
        axios.get('http://localhost:2022/bages/dashboard/ProjectManegment/TeamMembers/editTeamMember/'+id)
        .then(res => 
          {
            setValues({...data,
                tName: res.data.Data[0].team_name,
                temail: res.data.Data[0].team_Email,
                no: res.data.Data[0].Team_No,
                categry: res.data.Data[0].categryId,
                level: res.data.Data[0].level,
              
            
            })
          }
            // console.log(res)
            
            
            )
        .catch(err => console.log(err));
      },[])
      
    
      function handleSubmit (event){
        event.preventDefault();
        setErrors(ValidationTeam(data));
        if(errors.tName === "" &&  errors.temail === "" &&  errors.no === ""   ) {
          axios.put('http://localhost:2022/bages/dashboard/ProjectManegment/TeamMembers/editTeamMember/'+id, data)
          .then(res => {
            
                 if(res.data.Status === "Success"){
                      navgate('/bages/dashboard/ProjectManegment/Accoung/listUser');
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
                            <label>Team Name</label><br/>
                            <input type="text" name='tName' id='' value={data.tName}
                             className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                             onChange={handleInput}/>
                             {errors.tName && <span className='text-rose-700'>{errors.tName}</span>}
                        </div>

                        <div className="form-control col-span-2">
                            <label>Team Email</label><br/>
                            <input type="text" name='temail' id='' value={data.temail}
                             className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                             onChange={handleInput}/>
                             {errors.temail && <span className='text-rose-700'>{errors.temail}</span>}
                        </div>


                        <div className="form-control col-span-2">
                            <label>Team No</label><br/>
                            <input type="text" name='no' id='' value={data.no}
                             className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                             onChange={handleInput}/>
                          {errors.no && <span className='text-rose-700'>{errors.no}</span>}
                        </div>



                     

                       


                          <div className="form-control col-span-3">
                            <label>Categry</label><br/>
                            <select type="text" name='categry' id='' value={data.categry} className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-full md:w-full  p-1 pr-2 ' 
                             onChange={handleInput}>
                          

                                <option value="-" >Select option</option>
                                <option value="1" >Webdevloper</option>
                                <option value="2" >Mobil App</option>
                              </select>
                                 {/* {errors.Role && <span className='text-rose-700'>{errors.Role}</span>} */}
                        </div>

                         <div className="form-control col-span-3">
                            <label>Lavel</label><br/>
                            <select type="text" name='level' id='' value={data.level} className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-full md:w-full  p-1 pr-2 ' 
                             onChange={handleInput}>
                          

                                <option value="-" >Select option</option>
                                <option value="Forent" >Forent</option>
                                <option value="Back End" >Back End</option>
                                <option value="Forent/BackEnd" >Forent/BackEnd</option>
                              </select>
                                 {/* {errors.Role && <span className='text-rose-700'>{errors.Role}</span>} */}
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

export default EditTemmember