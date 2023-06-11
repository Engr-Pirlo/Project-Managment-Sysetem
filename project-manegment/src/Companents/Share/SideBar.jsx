import React, { useState } from 'react'
import { AiOutlineAntDesign } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Dashboard_Sedebar_Links } from '../lip/const/Navication';
import {FaAngleDown} from "react-icons/fa";
import {HiOutlineXMark} from "react-icons/hi2";
 import {FcMenu} from "react-icons/fc";
const linksClass='flex items-center gap-2 text-white font-light px-3 py-2 hover:bg-neutral-700 '
function SideBar() {
  const [open,setOpen ]=useState(false);
 
  return (
    // disktop
   <>
   <div className="cursor-pointer  lg:hidden p-2 fixed z-90 right-10
   bg-teal-800 w-10 h-10 mt-2 drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300" onClick={()=>setOpen(!open)}>
					{
					open ?(
						<HiOutlineXMark fontSize={25}/>
					):(
						<FcMenu fontSize={25}/>
					
					)
					}

					</div>
     <div className='bg-slate-800 w-60 z-10 p-3  relative flex flex-col hidden md:flex text-white'>
        <div className="flex items-center gap-2 px-1 py-3">
            <AiOutlineAntDesign className='text-3xl'/>
            <p className='text-sky-300 text-2xl'>Project Management</p>
        </div>
<div className="flex-1">
  {
  Dashboard_Sedebar_Links.map((navLinks)=>(
    
     <SidebarLinks key={navLinks.key} navLinks={navLinks}/>
  ))}
    
</div>
    </div>
    





    {/* {mobil app} */}


    <div className={`" bg-neutral-800  absolute w-64 h-screen p-3 flex flex-col mt-16  md:hidden text-black"
    ${open ? "flex":"hidden"}
  `}>
        <div className="flex items-center gap-2 px-1 py-3">
            <AiOutlineAntDesign className='text-3xl'/>
            <p className='text-sky-300 text-2xl'>MAS Admin </p>
        </div>
<div className=" flex-1 "
 >
  {
  Dashboard_Sedebar_Links.map((navLinks)=>(
    
     <SidebarLinks key={navLinks.key} navLinks={navLinks}/>
  ))}
    
</div>
    </div>



   </>
  )
}


const SidebarLinks=({ navLinks }) =>{
  const [open,setOpen ]=useState(true);
  const [subMenuOpen,setSetmenu]=useState(false);
  const toggleSidebar =()=>{
   setOpen(!open && "ml-20")
  }
  return(
    <ul>

<p className='text-slate-400'>{navLinks.consept}</p>
    <Link to={navLinks.path} className={linksClass}>
    
      <span className='text-xl'>{navLinks.icon}</span>
       {navLinks.navName}
        {navLinks.SubMenus &&  ( 
       <FaAngleDown className={` ${subMenuOpen && 'rotate-180 justify-end'}`}
       onClick={()=>setSetmenu(!subMenuOpen)}/>
     
)}     
     </Link>
     
     { navLinks.SubMenus && subMenuOpen && open &&(
      
      <ul>  
        {navLinks.SubMenus.map((subItem,indexsubItem) =>(
          <Link  to={subItem. pathdemo} key={indexsubItem} className="flex px-5 cursor-ponter text-sm text-gray-200 py-1 space-x-1  hover:bg-neutral-700 ">
             <span className='text-xl'>{subItem.icondemo}</span>
            {subItem.navName}
          </Link>
        ))}
           
           </ul>

     )}
    
      </ul>
  )
}
export default SideBar