import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ValidationUsers from './Validation/ValidationUsers';
import { useContext } from 'react';
import { UpdatedUser } from './Context/ContextProvider';
function EditUser() {
   const {updateduserData , setUpdateduserData}=useContext(UpdatedUser);
    const [ data , setValues ] = useState({
        first: '',
        user: '',
        email: '',
        Role: '',
        password: ''
    
     });
     const [errors,setErrors]=useState({})
     const handleInput =(event)=>{
      setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
     }
      // const [name,setName]= useState('');
      // const [username,setUsername]= useState('');
      // const [email,setEmail]= useState('');
      // const [role,setRole]= useState('');
      // const [password,setPassword]= useState('');
      const navgate=useNavigate();

      const {id} = useParams();
      useEffect(()=> {
       
        axios.get('http://localhost:2022/bages/dashboard/ProjectManegment/Accoung/editUser/'+id)
        .then(res => 
          {
            setValues({...data,
                first: res.data.Data[0].firstName,
                user: res.data.Data[0].userName,
                email: res.data.Data[0].gmail,
                password: res.data.Data[0].password,
                Role: res.data.Data[0].Role,
              
            
            })
          }
            // console.log(res)
            
            
            )
        .catch(err => console.log(err));
      },[])
      
    
      function handleSubmit (event){
        event.preventDefault();
        setErrors(ValidationUsers(data));
        if(errors.first === "" &&  errors.user === "" &&  errors.email === ""   && errors.password === "") {
          axios.put('http://localhost:2022/bages/dashboard/ProjectManegment/Accoung/editUser/'+id, data)
          .then(res => {
            
              
                     navgate("/bages/dashboard/ProjectManegment/Accoung/listUser")
                      setTimeout(() => {
                         setUpdateduserData(res.status);
                    }, 1000);
                  
                     
               
            
            
          })
          .catch(err => console.log(err));
        }
    
      }




    return (
        <div>
             <div className="header">
            <h1 className='text-2xl'>edit User </h1>
            
          </div>
    
          <div className="contaier mt-4">
            <div className="row">
                <div className="card bg-white rounded-md  border p-4">
    
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-12">
                          <div className="row grid grid-cols-1 md:grid-cols-4 md:gap-4 gap-4">
                          <div className="form-control col-span-1">
                                <label>First Name</label><br/>
                                <input type="text" name='first' id=''  value={data.first}
                                 className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                                 onChange={handleInput}/>
                                 {errors.first && <span className='text-rose-700'>{errors.first}</span>}
                            </div>
    
                            <div className="form-control col-span-1">
                                <label>User Name</label><br/>
                                <input type="text" name='user' id='' value={data.user}
                                 className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                                 onChange={handleInput}/>
                                 {errors.user && <span className='text-rose-700'>{errors.user}</span>}
                            </div>
    
    
                            <div className="form-control col-span-2">
                                <label>Gmail</label><br/>
                                <input type="text" name='email' id='' value={data.email}
                                 className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                                 onChange={handleInput}/>
                              {errors.email && <span className='text-rose-700'>{errors.email}</span>}
                            </div>
    
    
    
                         
    
                            <div className="form-control ">
                                <label>Role</label><br/>
                                <select type="text" name='Role' id='' className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-full md:w-full  p-1 pr-2 ' 
                                 >
                              
    
                                   
                                    <option value={data.Role} onChange={handleInput}>Admin</option>
                                    <option value={data.Role} onChange={handleInput}>User</option>
                                  </select>
                                     {/* {errors.Role && <span className='text-rose-700'>{errors.Role}</span>} */}
                            </div> 
    
                            
                            <div className="form-control ">
                                <label>Password</label><br/>
                                <input type="text" name='password' id='' value={data.password}
                                 className='border text-sm focus:outline-none active:outline-none border p-2 border-gray-300 w-w-full md:w-full  p-1 pr-2'
                                 onChange={handleInput}/>
                                  {errors.email && <span className='text-rose-700'>{errors.email}</span>}
                            </div>
                          
    
                            
                          </div>
                         
    
                          <div className="text-end p-3">
                            <button className='p-2 bg-blue-500 text-2xl  text-white'>Update</button>
                          </div>
    
                        </div>
                    </form>
    
                </div>
            </div>
          </div>
    
    
        </div>
      )
}

export default EditUser