function  ValidationManeger (values){
    let error ={}
    const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
    const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
    
    
    if(values.name === ""){
        error.name='name name  empty'
      }else{
        error.name =""
      }

      
    if(values.email === ""){
        error.temail='temail name  empty'
      }else{
        error.email =""
      }



    if(values.experices === ""){
        error.experices='experices name  empty'
      }else{
        error.experices =""
      }


      if(values.adress === ""){
        error.adress='adress name  empty'
      }else{
        error.adress =""
      }


      
    return error
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  export default ValidationManeger