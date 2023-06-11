import React from 'react'
import { CiMedicalClipboard,CiBrightnessDown, CiCircleCheck, CiCircleChevDown, CiCircleChevLeft, CiCircleChevRight, CiBatteryCharging, CiCircleChevUp, CiCircleList, CiCircleRemove, CiCircleQuestion } from "react-icons/ci";

const IconsName=[
   { 
    id:1,
    Icon: <CiMedicalClipboard className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
    NameIcon:'CiMedicalClipboard'
    },

    { 
        id:2,
        Icon: <CiBrightnessDown className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
        NameIcon:'CiBrightnessDown'
        },

        { 
            id:3,
            Icon: <CiCircleCheck className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
            NameIcon:'CiCircleCheck'
            },
            { 
                id:4,
                Icon: <CiCircleChevDown className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                NameIcon:'CiCircleChevDown'
                },
                { 
                    id:5,
                    Icon: <CiCircleChevLeft className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                    NameIcon:'CiCircleChevLeft'
                    },

                    { 
                        id:6,
                        Icon: <CiCircleChevRight className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                        NameIcon:'CiCircleChevRight'
                        },

                        { 
                            id:7,
                            Icon: <CiCircleChevUp className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                            NameIcon:'CiCircleChevUp'
                            },


                            { 
                                id:8,
                                Icon: <CiBatteryCharging className='curasor-pointer cursor-pointer items-center ml-16' fontSize={37}/>,
                                NameIcon:'CiBatteryCharging'
                                },

                                { 
                                    id:9,
                                    Icon: <CiCircleList className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                                    NameIcon:'CiCircleList'
                                    },

                                    { 
                                        id:10,
                                        Icon: <CiCircleRemove className='curasor-pointer cursor-pointer items-center ml-16' fontSize={37}/>,
                                        NameIcon:'CiCircleRemove'
                                        },
        
                                        { 
                                            id:11,
                                            Icon: <CiCircleQuestion className='curasor-pointer cursor-pointer ml-16' fontSize={37}/>,
                                            NameIcon:'CiCircleList'
                                            },
        
]   

function Icons() {
    const imports  ='import {Icon Name} from "react-icons/ci'
  return (
    <div>
        
        <p>Installing</p>
<div className="container bg-black p-2 rounded-lg ">
   
    <div className="header flex justify-between p-2 text-white">

   <h1 className='text-slate-50'>Npm install react-icons</h1>
   <CiMedicalClipboard className='curasor-pointer cursor-pointer' fontSize={24}/>
    </div>
</div>


<p className='mt-5'>Import</p>
<div className="container bg-black p-2 rounded-lg ">
   
    <div className="header flex justify-between p-2 text-white">

   <h1 className='text-slate-50'>{imports}</h1>
   <CiMedicalClipboard className='curasor-pointer cursor-pointer' fontSize={24}/>
    </div>
</div>

<p>Icons</p>
<div className="container mt-4">
    <div className="row grid grid-cols-1 md:grid-cols-6 gap-2">
        {IconsName.map((s,index)=>(
            <div className="card bg-white rounded-lg p-4 text-center justify-center p-2"  key={index}>
             {s.Icon}
             <p className=" text-center p-2">{s.NameIcon}</p>
            </div>

        ))}
    </div>
</div>


    </div>
  )
}

export default Icons