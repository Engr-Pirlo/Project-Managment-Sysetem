import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Validation from './Validation/Validations';
import { login } from '../../Views/Acoung/Context/ContextProvider';

function Login() {
  const {user, setUserName} = useContext(login);
  const [ values , setValues ] = useState({
     email: '',
     password: ''

  });
  // const [error ,setError] = useState ('');
  const navgate=useNavigate();

  const [errors,setErrors]=useState({})
 
   const handleInput =(event)=>{
    setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
   }
  function handleSubmit (event){
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:2022/', values)
      .then(res => {
         if(res.status === 201){
              navgate('/bages/dashboard');
              // setUserName(res.data[0]);
              sessionStorage.setItem("username", res.data[0].firstName);
              sessionStorage.getItem("username");
              sessionStorage.setItem("gmail", res.data[0].gmail);
              sessionStorage.getItem("gmail")
              sessionStorage.setItem("role", res.data[0].Role);
              sessionStorage.getItem("role")
         }else{
           alert('No records found');
          //  console.log(res.data);
         }
      })
      .catch(err => console.log(err));
    }

  }
        return (
          <div className='bg-slate-800 flex flex-col justfy-center sm:py-12'   >
          {/* <div className="text-rose-500">
            {error && error}
          </div> */}
          <h1 className='text-center text-4xl text-indigo-500 font-smibold m-10'>
              Login 
          </h1>

          <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className=" pc-4 py-10 bg-slate-900 mx-8 md:mx-0 shadow-2xl rounded-xl sm:p-10">
        <div className="max-w-md  mx-auto">
          <div className="flex items-center space-x-5">
              <div className="h-14 w-20 bg-indigo-500 rounded-md flex flex-shirink-0 justfy-center items-center text-white text-2xl font-bold">
            <h1 className='p-2'>PM</h1>
              </div>

              <div className="block font-semibold text-xl  self-start text-white">
                <h1 className='leading-relaxed'>Login Here</h1>
                <p className='leading-relaxed text-sm text-slate-400 font-normal '>Welcome To Login</p>
              </div>
          </div>

          
      <div className=" text-base  p-3">
        <form onSubmit={handleSubmit}>
          <div className=" form-control ">

              <input 
              type="text"
              name='email'
              placeholder='enter user' 
           
              className=' focus:outline-none md:w-full w-64  px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-2xl text-white m-2 '
              onChange={handleInput}/>
              {errors.email && <span className='text-rose-700'>{errors.email}</span>}

      <input 
              type="password"
              id=''
              placeholder='********' 
         
              password
              name='password'
              className=' focus:outline-none  md:w-full w-64  px-3 py-2 border-0 rounded-md appearance-none bg-slate-800 text-2xl text-white m-2 '
              onChange={handleInput}/> 
                {errors.password && <span className='text-rose-700'>{errors.password}</span>}
          </div>

          <div className="btn text-center">
          <button className='p-2 bg-blue-500 text-2xl text-center rounded-md'>Log in</button>
          </div>
        </form>
      </div>
        

        </div>
        </div>
          </div>
          


          </div>
        )
      }

export default Login