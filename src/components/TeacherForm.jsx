import React, { useEffect, useState } from 'react'
import axios from "axios";

const TeacherForm = ({OnAddTeacherClick}) => {
      const SchoolUrl=process.env.REACT_APP_API_SCHOOL;
      const[data,setData]=useState({
         name: "",
         age: "",
         city: "",
         pin: "",
         subject: "",
         phoneNumber: "",
          standard: ""
       });
    
      //const[response,setResponse]=useState();
    
    //    useEffect(()=>{
    //    AddNewTeacher();
    //   },[]);


// handles ALL inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 
     
      const AddNewTeacher = async (e) => {
    e.preventDefault(); // stop reload

//....
 try {
      const res = await axios.post(`${SchoolUrl}/teacher`, data);
      console.log(res.data, "added");

      if (res.data) {
        OnAddTeacherClick();
      }

    } catch (err) {
      console.log(err);
    }
  };

//...

      // axios.post(`${SchoolUrl}/teacher`,data).then((res)=>{
      //  console.log(res.data,"added");
      //  setResponse(res.data);
      //  if(res.data){
      //   OnAddTeacherClick()
      //  }
      // });
       
    

  return (
    <div>
        <form onSubmit={AddNewTeacher}>
           <label>NAME:</label> <input type='text' value={data.name} onChange={(e)=>setData(e.target.value)} />
                   <label>PINCODE</label> <input type='text' value={data.pin} onChange={(e)=>setData(e.target.value)} />
                     <label>CITY</label> <input type='text' value={data.city} onChange={(e)=>setData(e.target.value)} />
                       <label>SUBJECT</label> <input type='text' value={data.subject} onChange={(e)=>setData(e.target.value)} />
                         <label>PHONENUMBER</label> <input type='number' value={data.phoneNumber} onChange={(e)=>setData(e.target.value)} />
                           <label>STANDARD:</label> <input type='text' value={data.standard} onChange={(e)=>setData(e.target.value)} />
                        <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default TeacherForm