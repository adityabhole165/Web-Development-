import { useState } from "react";

export default function Form(){
    // let [fullName,setFullName] = useState("");
    // let [UserName, setUserName] =useState(""); 
      
    let [formData, setFormData] = useState(
          {
            fullName  : "",
            username : "",
            Password:"",
        }
    );


    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // console.log(fieldName);
        // let newVal= event.target.value;
        // console.log(newVal);

        setFormData((currData) => {
            return{...currData,[event.target.name]:event.target.value};
        });
        
    }

    let handleSubmit =(event) =>{
        event.preventDefault();
    console.log("Form submitted:", formData); // ✔ print values
        
        setFormData(
            {
            fullName  : "",
            username : "",
            Password:"",
            }
        );
    }

    // let handleChange = (event) =>{
    //     setFullName(event.target.value);
    // }
    
    // let handleUserName = (event) =>{
    //     setUserName(event.target.value);

    // }


    return(
        <form action="" onSubmit={handleSubmit}>
            <br /> <br /> <br />
            <label htmlFor="fullName ">Enter Full Name : </label>
            <input 
            type="text" 
            placeholder="Enter FULL Name "
            value={FormData.fullName} 
            // value={fullName} 
            // onChange={handleChange}
            onChange={handleInputChange}
            name="fullName"
            />
            <br /> <br />
            <label htmlFor="UserName ">Enter User Name : </label>
            <input 
            type="text" 
            placeholder="Enter User Name "
            // value={UserName} 
            value={FormData.username} 
            // onChange={handleUserName}
            onChange={handleInputChange}
            name="username"/>
            <br /><br />
            
            <label htmlFor="passWord  ">Enter Password : </label>
            <input 
            type="password" 
            placeholder="Enter Password "
            // value={UserName} 
            value={FormData.Password} 
            // onChange={handleUserName}
            onChange={handleInputChange}
            name="Password"/>
            <br /><br />
            <button>Submit</button>
        </form>
    );
}