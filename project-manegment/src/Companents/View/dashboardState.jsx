import React, { useContext, useEffect, useState } from 'react'
import { HiUsers } from 'react-icons/hi'

// charts broducts
import Charts from  'react-apexcharts';
// charts Months
import {Bar} from 'react-chartjs-2'


import {Chart,LinearScale,BarElement, CategoryScale,Legend,Title} from 'chart.js'
import { login } from '../Views/Acoung/Context/ContextProvider';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';


Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title
)



// charts months
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const options={
  plugins:{
    legend:{
      position:'top',

    },
    title:{
      display:true,
      text:'Expensese Tracker'
    }
  }
}

const dataMonthly={
    labels,
    datasets :[
      {
        label: '2020 Salery',
        data:[2340,1200,490,2300,980],
        backgroundColor:'blue',
      },
      {
        label: '2021 Salery',
        data:[760,500,490,400,980],
        backgroundColor:'red',
      },
     

    ]
}


function DashboardState() {
  const [countuser,setCountuser] = useState([]);
  const [countProjects,setCountProjects] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:2022/bages/dashboard/CountUsers")
    .then(res =>setCountuser(res.data[0]))
    .catch(err => console.error(err));
},[]);
  



useEffect(()=>{
  axios.get("http://localhost:2022/bages/dashboard/CountProjects")
  .then(res =>setCountProjects(res.data[0]))
  .catch(err => console.error(err));
},[]);
    //  console.log(user[0].firstName);
  return (
    <section>
   <div className="containers">
   

    <div className="row space-y-3 lg:space-y-0 gap-4 lg:flex ">
    
        <div className="bg-white rounded-sm p-4 flex-1 border borser-gray-200  ">
         
         
          <div className='flex justify-between'>
          <p>All Users</p>
          <HiUsers fontSize={44}/>
          </div>
         
          <h1>{countuser.Totalusers}</h1>
           
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border borser-gray-200  ">
         
         
         <div className='flex justify-between'>
         <p>All Projects</p>
         <HiUsers fontSize={44}/>
         </div>
        
         <h1>{countProjects.CountProects}</h1>
          
       </div>
       <div className="bg-white rounded-sm p-4 flex-1 border borser-gray-200  ">
         
         
         <div className='flex justify-between'>
         <p>All Costomer</p>
         <HiUsers fontSize={44}/>
         </div>
        
         <h1>643</h1>
          
       </div>
       <div className="bg-white rounded-sm p-4 flex-1 border borser-gray-200  ">
         
         
         <div className='flex justify-between'>
         <p>Accoun</p>
         <HiUsers fontSize={44}/>
         </div>
        
         <h1>643</h1>
          
       </div>
       </div>

       {/* <div className="row grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
       <div className="tableresponsive bg-white p-2 col-span-2 w-full">
        <p className="text-2xl">Transection</p>
       <table class=" bg-slate-100 p-4 w-full">
  <thead className='bg-gray-50 border-b-2 border-gray-200'>
    <tr>
    <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left left-0'>ID</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>ProductName</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Status</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Qty</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Price</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Total</th>
    </tr>
  </thead>
  <tbody>
  <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>#2342</td>
      <td className='p-3 whitespace-nowrap'>I pad</td>
      <td className='p-3 whitespace-nowrap'><span className="bg-sky-500 rounded-lg p-1">Process</span></td>
      <td className='p-3 whitespace-nowrap'>43</td>
      <td className='p-3 whitespace-nowrap'>1000</td>
      <td className='p-3 whitespace-nowrap'>23,00</td>
     

    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>#2342</td>
      <td className='p-3 whitespace-nowrap'>I pad</td>
      <td className='p-3 whitespace-nowrap'><span className="bg-rose-500 rounded-lg p-1">Process</span></td>
      <td className='p-3 whitespace-nowrap'>43</td>
      <td className='p-3 whitespace-nowrap'>1000</td>
      <td className='p-3 whitespace-nowrap'>23,00</td>
 

    </tr>

   
  
   
  </tbody>
</table>
       </div>

       <div className=" bg-white p-2 col-span-2">
  <Charts
    type = "bar"
 
    series={[
      {
        name:'Products Company',
        data:[650,780,2390,1294,99]
      }
    ]}

    options={
      {
        xaxis:{
          categories:["Iphone11","X max",'Samsong','Mackpook','Note bad']
        }

      }
    }
  ></Charts>
       </div>
        

    
  </div>




  <div className="row grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
       <div className="tableresponsive bg-white p-2 col-span-2">
       

       <Bar   options={options}   data={dataMonthly}/>
       </div>

       <div className=" bg-white p-2 col-span-2">
  <Charts
    type = "pie"

    series={[
      23,23,45,45
    ]}

    options={
      {
        labels:['Broduct', 'Product','Cuntory','categry']

      }
    }
  ></Charts>
       </div>
        

    
  </div> */}
   </div>

        
        
        </section>
  )
}

export default DashboardState