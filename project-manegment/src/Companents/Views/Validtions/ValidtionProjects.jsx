function ValidationProjects (values){
    let error ={}
    const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
    const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
    
    
    if(values.pName === ""){
        error.pName='fill name empty'
      }else{
        error.pName =""
      }

      
    if(values.maneger === ""){
        error.maneger ='maneger name  empty'
      }else{
        error.maneger =""
      }



    if(values.categry  === ""){
        error.categry='categryname  empty'
      }else{
        error.categry=""
    }

      if(values.team  === ""){
        error.team='teamname  empty'
      }else{
        error.team=""
      }




      if(values.start  === ""){
        error.start='startname  empty'
      }else{
        error.start=""
      }

      if(values.end  === ""){
        error.end='endname  empty'
      }else{
        error.end=""
      }

      if(values.status  === ""){
        error.status='status name  empty'
      }else{
        error.status=""
      }


      
    return error
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  export default ValidationProjects