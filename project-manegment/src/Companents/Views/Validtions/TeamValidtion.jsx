function  ValidationTeam (values){
    let error ={}
    const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
    const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
    
    
    if(values.tName === ""){
        error.tName='tName name  empty'
      }else{
        error.tName =""
      }

      
    if(values.temail === ""){
        error.temail='temail name  empty'
      }else{
        error.temail =""
      }



    if(values.no === ""){
        error.no='no name  empty'
      }else{
        error.no =""
      }


      if(values.categry === ""){
        error.categry='categry name  empty'
      }else{
        error.categry =""
      }


      
    return error
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  export default ValidationTeam