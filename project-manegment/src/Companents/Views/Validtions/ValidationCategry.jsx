function  ValidationCategry (values){
    let error ={}
    const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
    const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
    

    if(values.categry === ""){
        error.categry='categry name  empty'
      }else{
        error.categry =""
      }


      
    return error
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  export default ValidationCategry