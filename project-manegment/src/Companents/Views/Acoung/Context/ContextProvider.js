import React, { createContext, useState } from 'react'


export const adddata = createContext("");
export const UpdatedUser = createContext("");

export const login = createContext("");

const ContextProvider =  ({ children }) => {

    const [successdata , setSuccessdata] = useState('');
    const [user , setUserName] = useState('');
    const [updateduserData , setUpdateduserData] = useState('');

    return (
        <adddata.Provider value={{ successdata , setSuccessdata }}  >   
           <login.Provider value={{ user , setUserName }}  >

              <UpdatedUser.Provider value={{ updateduserData , setUpdateduserData }}  > 
           

                    {children}
              </UpdatedUser.Provider> 
            
           </login.Provider>
          
        </adddata.Provider>
    )
}

export default ContextProvider;