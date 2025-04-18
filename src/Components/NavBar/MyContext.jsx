// src/context/MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {  // "children" is the content inside MyProvider
    const [selectedCity, setSelectedCity] = useState("");
    const [drop, setdrop] = useState("")
  const [date, setdate] = useState("")
    const [visible, setVisible] = useState(false);
    const [img, setimg] = useState("");
    const [name, setname] = useState("")
    const [Pname, setPname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <MyContext.Provider value={{ selectedCity,setSelectedCity,drop,setdrop,visible,setVisible,date,setdate,img,setimg,name,setname,Pname,setPname,email,setEmail,password,setPassword}}>
      {children} 
    </MyContext.Provider>
  );
};

// Export the context to be used in other components
export default MyContext;
