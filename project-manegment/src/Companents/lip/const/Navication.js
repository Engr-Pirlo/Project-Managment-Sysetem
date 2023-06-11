import {
    
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineDocument,

    HiOutlineClipboardCheck,
    HiOutlineChartSquareBar


} from 'react-icons/hi';


import {
    
    MdOutlineManageAccounts,
    MdAccountBalance,
    MdOutlinePersonalVideo
    

} from 'react-icons/md'

import {
    
   
    BsPersonWorkspace

} from 'react-icons/bs'


import {
    
    GrPersonalComputer
  

} from 'react-icons/gr'
import {BiNotepad, BiRadioCircle} from "react-icons/bi";
import { FaBitcoin, FaChartBar, FaDollarSign, FaKaaba, FaShoppingCart } from 'react-icons/fa';
// import { login } from '../../Views/Acoung/Context/ContextProvider';
// import { useContext } from 'react';
// const {user, setUserName} = useContext(login);
export const Dashboard_Sedebar_Links=[

// user ?

//    if (user.Role ==="Admin"){

         
  
    {
        key:"dashboard",
        navName:"dashboard",
        path:'/bages/dashboard',
        icon:<HiOutlineViewGrid/>
    },



  

   
// },
   
   
     {
        key:"Accoung",
        navName:"Accoung",
       
        icon:<MdAccountBalance/>,
        SubMenus:[
           
          {  key:"listuser",
            navName:"list User",
             pathdemo:'ProjectManegment/Accoung/listUser',
            icondemo:<BiRadioCircle/>
        },
        {  key:"Regesterion",
        navName:"User Registration",
         pathdemo:'ProjectManegment/Accoung/CreateUser',
        icondemo:<BiRadioCircle/>
       },

       


        ]
    },

    //Categreis
    {
        key:"Categreis",
        navName:"Categreis",
       
        icon:<BiNotepad/>,
        SubMenus:[
         
        {  key:"Formsvalidation",
        navName:"list Categreis",
        pathdemo:'ProjectManegment/Categreis/listCategreis',
        icondemo:<BiRadioCircle/>
       },
      

       


        ]
    },

     //Team Members
     {
        key:"Team Members",
        navName:"Team Members",
       
        icon:<MdOutlineManageAccounts/>,
        SubMenus:[

            {  key:"listTeamMembers",
            navName:"listTeamMembers",
            pathdemo:'ProjectManegment/TeamMembers/listTeamMember',
            icondemo:<BiRadioCircle/>
        },
           
       {  key:"Categreis",
       navName:"Create",
       pathdemo:'ProjectManegment/TeamMembers/createTeamMember',
       icondemo:<BiRadioCircle/>
   },

   

       


        ]
    },



     //Maneger
     {
        key:"Manegers",
        navName:"Manegers",
       
        icon:<BsPersonWorkspace/>,
        SubMenus:[
         
        { 
        key:"Formsvalidation",
        navName:"list Manegrs",
        pathdemo:'ProjectManegment/Manegrs/listManeger',
        icondemo:<BiRadioCircle/>
       },
      

       


        ]
    },



     //Projects
     {
        key:"Projects",
        navName:"Projects",
       
        icon:<MdOutlinePersonalVideo/>,
        SubMenus:[
         
        {  key:"Formsvalidation",
        navName:"Create ",
        pathdemo:'ProjectManegment/projects/CreateProjects',
        icondemo:<BiRadioCircle/>
       },
       {  key:"list projects",
       navName:"list project",
       pathdemo:'ProjectManegment/projects/listProjects/view',
       icondemo:<BiRadioCircle/>
   },

       


        ]
    },



     //Projects
     {
        key:"Reborts",
        navName:"Reborts",
       
        icon:<HiOutlineChartSquareBar/>,
        SubMenus:[
         
        {  
        key:"Formsvalidation",
        navName:"Rebort Monthly ",
        pathdemo:'ProjectManegment/projects/Reborts',
        icondemo:<BiRadioCircle/>
       },
       {  key:"list projects",
       navName:"list project",
       pathdemo:'ProjectManegment/projects/listProjects/view',
       icondemo:<BiRadioCircle/>
   },

       


        ]
    },




    // products
    // {
    //     key:"broducts",
    //     navName:"broducts",

    //     icon:<FaShoppingCart/>,
    //     SubMenus:[
    //       {  key:"listProducts",
    //         navName:"list Products",
    //         pathdemo:'/Products/listProducts',
    //         icondemo:<BiRadioCircle/>
    //     },
    //     {  key:"CreateProducts",
    //         navName:"Create Products",
    //          pathdemo:'/Products/CreateProducts',
    //         icondemo:<BiRadioCircle/>
    //     },

    //     {  key:"listCategry",
    //     navName:"list Categreis",
    //     pathdemo:'/Products/Categrylist',
    //     icondemo:<BiRadioCircle/>
    // },
    // {  key:"CreateCategry",
    //     navName:"Categry list",
    //      pathdemo:'/Products/AddCategry',
    //     icondemo:<BiRadioCircle/>
    // },
       
    //     ]
    // },





    // {
    //     key:"Forms",
    //     navName:"Forms",
       
    //     icon:<BiNotepad/>,
    //     SubMenus:[
    //       {  key:"FormsElements",
    //         navName:"Form Elements",
    //         pathdemo:'/Forms/FormsElemnt',
    //         icondemo:<BiRadioCircle/>
    //     },
    //     {  key:"Formsvalidation",
    //     navName:"Form validation",
    //     pathdemo:'/FormsElements',
    //     icondemo:<BiRadioCircle/>
    //    },

       


    //     ]
    // },

    // {
    //     key:"Leyouts",
    //     navName:"Leyouts",
       
    //     icon:<BiNotepad/>,
    //     SubMenus:[
    //       {  key:"Companent",
    //         navName:"Compnent",
    //         pathdemo:'/FormsElements',
    //         icondemo:<BiRadioCircle/>
    //     },
    //     {  key:"Icons",
    //     navName:"Icons",
    //     pathdemo:'/Leyout/icons',
    //     icondemo:<BiRadioCircle/>
    //    },

       


    //     ]
    // },

   

    // {
    //     key:"AUTHER",
    //     navName:"AUTHER",
       
    //     icon:<BiNotepad/>,
    //     SubMenus:[
    //       {  key:"Login",
    //         navName:"Login",
    //          pathdemo:'/',
    //         icondemo:<BiRadioCircle/>
    //     },
    //     {  key:"Regesterion",
    //     navName:"Regesterion",
    //      pathdemo:'Auther/Regester',
    //     icondemo:<BiRadioCircle/>
    //    },

       


    //     ]
    // },

    
    


    
]