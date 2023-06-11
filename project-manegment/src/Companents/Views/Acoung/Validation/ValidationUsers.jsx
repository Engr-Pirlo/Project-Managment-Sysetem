function  ValidationUsers (values){
    let error ={}
    const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
    const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
    

    if(values.first === ""){
        error.first='first name  empty'
      }else{
        error.first =""
      }


      if(values.user === ""){
        error.user='users empty'
      }else{
        error.user =""
      }



    if(values.email === ""){
      error.email='email empty'
    }else{
      error.email =""
    }

    // if(values.Role === ""){
    //     error.Role='role  empty'
    //   }else{
    //     error.Role =""
    //   }
  
  
    if(values.password === ""){
      error.password='password should be empty'
    
    
    }else{
      error.password =""
    }
  
    return error
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  export default ValidationUsers