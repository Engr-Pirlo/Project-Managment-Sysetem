function Validation (values){
  let error ={}
  const email_Pattern ='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  const passwordPattern = '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16';
  
  if(values.email === ""){
    error.email='Name should be empty'
  }else{
    error.email =""
  }


  if(values.password === ""){
    error.password='Name should be empty'
  
  
  }else{
    error.password =""
  }

  return error















}



export default Validation