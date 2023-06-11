
import React from 'react'
import {Router,Routes,Route} from 'react-router-dom'
import ErorBage from './Companents/Bages/404'
import Login from './Companents/Bages/Auther/Login'
import Regester from './Companents/Bages/Auther/Regesterion'
import Charts from './Companents/Bages/Charts'
import Alert from './Companents/Bages/Companent/Alert'
import Buttons from './Companents/Bages/Companent/Buttons'
import Cards from './Companents/Bages/Companent/Cards'
import Coursel from './Companents/Bages/Companent/Coursel'
import ModalDialog from './Companents/Bages/Companent/Dailog'
import Crypto from './Companents/Bages/Crypto'
import Dashboard from './Companents/Bages/dashboard'
import FormsElemnt from './Companents/Bages/Forms/FormsElemnt'
import Islaam from './Companents/Bages/Islaam'
import Invoice from './Companents/Bages/Islaam'
import Icons from './Companents/Bages/LeyOut/Icons'
import AddcategoryProduct from './Companents/Bages/Product/AddcategoryProduct'
import CategryList from './Companents/Bages/Product/CategryList'
import CreateProducts from './Companents/Bages/Product/CreateProducts'
import EditProducts from './Companents/Bages/Product/editProducts'
import ListProduct from './Companents/Bages/Product/ListProduct'
import ViewProducts from './Companents/Bages/Product/ViewProducts'

import Leyout from './Companents/Share/Leyout'
import CreateUser from './Companents/Views/Acoung/CreateUser'
import ListUser from './Companents/Views/Acoung/ListUser'
import Categreis from './Companents/Views/Categreis/Categreis'


import Overview from './profile/Overview'
import EditUser from './Companents/Views/Acoung/editUser'
import CreateTeam from './Companents/Views/Teamembers/CreateTeam'
import ListTeamMembers from './Companents/Views/Teamembers/ListTeamMembers'
import EditTemmember from './Companents/Views/Teamembers/EditTemmember'
import ListManegers from './Companents/Views/Manegers/ListManegers'
import CreateManegrs from './Companents/Views/Manegers/EditManegrs'
import EditManegrs from './Companents/Views/Manegers/EditManegrs'
import Project from './Companents/Views/Projects/Project'
import ListProjects from './Companents/Views/Projects/ListProjects'
import Reborts from './Companents/Views/Reborts/Reborts'
import Profile from './Companents/Views/Acoung/Profile'
import ViewsProjects from './Companents/Views/Projects/ViewsProjects'
import EditProjects from './Companents/Views/Projects/editProjects'
function App() {
  return (
    <div >


       
        
            <Routes>

           
               
                <Route path="/bages/dashboard" element={<Leyout/>}>
                  
                <Route index element={<Dashboard/>}/>
                <Route path="CountUsers" element={<Dashboard/>}/>
                <Route path="Countprojects" element={<Dashboard/>}/>
                <Route path="Products/listProducts" element={<ListProduct/>}/>
              
                      {/* brpducts */}
                      {/* <Route path='/Products/listProducts' element={<ListProduct/>}/>
                      <Route path='/Products/CreateProducts' element={<CreateProducts/>}/>
                      <Route path='/Products/editProducts' element={<EditProducts/>}/>
                      <Route path='/Products/ViewProducts' element={<ViewProducts/>}/>
                      <Route path='/Products/Categrylist' element={<CategryList/>}/>
                      <Route path='/Products/AddCategry' element={<AddcategoryProduct/>}/> */}


                {/* bages broject ProjectManegment    */}
                    <Route path='ProjectManegment/Categreis/listCategreis' element={<Categreis/>}/>
              <Route path="/bages/dashboard/ProjectManegment/Categreis/listCategreis/:id" element={<Categreis/>}/>
                    {/* Teamembrs */}
                    

              {/* Teammembers */}
                    <Route path='ProjectManegment/TeamMembers/createTeamMember' element={<CreateTeam/>}/>
                    <Route path='ProjectManegment/TeamMembers/listTeamMember' element={<ListTeamMembers/>}/>
                    <Route path='ProjectManegment/TeamMembers/editTeamMember/:id' element={<EditTemmember/>}/>


                    {/* manegrs */}
                    <Route path='ProjectManegment/Manegrs/listManeger' element={<ListManegers/>}/>
                 
                    <Route path='ProjectManegment/Manegrs/editManeger/:id' element={<EditManegrs/>}/>

                    
                    
            {/* Accoung */}
                    <Route path='ProjectManegment/Accoung/listUser' element={<ListUser/>}/>
                    <Route path='ProjectManegment/Accoung/CreateUser' element={<CreateUser/>}/>
                    <Route path='ProjectManegment/Accoung/editUser/:id' element={<EditUser/>}/>
                    <Route path='ProjectManegment/bages/dashboard/Profile' element={<Profile/>}/>
                    

            {/* Projects         */}
            <Route path='/bages/dashboard/ProjectManegment/projects/CreateProjects' element={<Project/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/CreateProjects/categry' element={<Project/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/CreateProjects/Member' element={<Project/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/listProjects/view' element={<ListProjects/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/views/:id' element={<ViewsProjects/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/edit/:id' element={<EditProjects/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/edit/categry/:id' element={<EditProjects/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/edit/Member/:id' element={<EditProjects/>}/>
            <Route path='/bages/dashboard/ProjectManegment/projects/edit/maneger/:id' element={<EditProjects/>}/>
            {/* Reborts */}
            <Route path='/bages/dashboard/ProjectManegment/projects/Reborts' element={<Reborts/>}/>

                      {/* forms-control */}
                    {/* <Route path='/Forms/FormsElemnt' element={<FormsElemnt/>}/> */}

                      {/* Leyouts */}
                      {/* <Route path='/Leyout/icons' element={<Icons/>}/> */}

                      {/* profile */}
                      {/* <Route path='/profile' element={<Profile/>}/>
                      <Route path='/profile/overview' element={<Overview/>}/> */}
                </Route>

                
                </Routes>



                <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Auther/Regester' element={<Regester/>}/>
                <Route path='' element={<ErorBage/>}/>

                {/* /ProjectManegment/TeamMembers/createDesignetion */}
            </Routes>
      
    </div>
  )
}

export default App