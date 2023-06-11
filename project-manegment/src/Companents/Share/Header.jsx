import React, { Fragment, useContext, useEffect,useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { BsFilePersonFill, BsFillPersonFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaPersonBooth } from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import { MdAccountBalance, MdOutlineCancel } from 'react-icons/md';
import {TbLogout} from 'react-icons/tb'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import axios from 'axios'
import { login } from '../Views/Acoung/Context/ContextProvider';


function Header() {

  const [open,setOpen]=useState(false);
  const {user, setUserName} = useContext(login);
	
// const [ username  , setUsername  ] = useState('');
const navgate = useNavigate();
const navigate = useNavigate();
// axios.defaults.withCredentials = true;
// useEffect(()=> {
// 	axios.get('http://localhost:202')
// 	 .then(res =>{
// 		if(res.data.valid) {
// 			setUsername (res.data.username );
// 			// console.log('this is '+setUsername)
// 		}else {
// 			 navgate('/Auther/login');
// 		}
// 	})
// 	.catch(err => console.log(err));
// },[])
    
  return (
	<div className='bg-white border h-12 w-full '>

        
	<div className="flex justify-between">
	  <div className="flex">
		  <div className="personicon" >
			  <BsFillPersonFill className='mt-2' fontSize={34}/>
		  </div>
	

		
		<div className="name">
		  <h1 className='mt-1 text-rose-300 p-2'><strong>{sessionStorage.getItem("username")}</strong></h1>
		</div>

	  </div>
			<div className=" relative  " onClick={()=>setOpen(!open)}>
          {
            open ?(
            <div className='p-2  '>

          <MdOutlineCancel fontSize={32} className='rounded-fulltext-white cursor-pointer '/>
          </div>

          ):(
            <div className='p-2  '>

            <BsFillPersonLinesFill fontSize={32} className='rounded-fulltext-white cursor-pointer '/>
            </div>
          )
          
          }
        
        <div className={`'absolute  top-20 right-0'  ${open ? "flex":"hidden"}` }>
        <div className="bg-white p-4   h-screen right-0 w-56 left-0 top-40  border shadow">

          <div className='title '>
            <div className="profile ml-9 bg-rose-700 rounded-full h-24 w-24">

            </div>



			<>
			<h1 className='text-center'>{sessionStorage.getItem("gmail")}</h1>
            <p className='text-center'>{sessionStorage.getItem("role")}</p>
			</>
			

          </div>
          <ul>
            <Link className='flex space-x-1 mt-2' to='ProjectManegment/bages/dashboard/Profile'><BsFillPersonFill fontSize={25}/> <p className="text-lg">User Profile</p></Link>
            <Link className='flex space-x-1 mt-2' to='/settings'><FiSettings fontSize={25}/> <p className="text-lg">Settings</p></Link>
        
           <Link to="/" className="flex space-x-1 mt-2">
            <TbLogout fontSize={25}/>
             <p className="text-lg">LogOut</p>
           </Link>
          </ul> 
        </div>
        </div>
        </div>


		</div>
		</div>
	)
}

export default Header