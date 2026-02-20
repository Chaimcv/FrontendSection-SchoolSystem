import React, { useState } from 'react'

const ParentLogin = () => {
    const[inputtedEmail,setInputtedEmail]=useState();
    const[inputtedPassword,setInputtedPassword]=useState();
    const LoginAsParent=()=>{
        
    }
  return (
    <div>  <div>
         <div className=' border border-orange-600 rounded-md bg-orange-400 m-10 p-5 space-y-5'>
          <label >Email:  <input className='p-2 m-1'type='text'value={inputtedEmail} onChange={(e)=>setInputtedEmail(e.target.value)} placeholder='Enter your email'></input></label><br/> 
            <label >Password: <input className='p-2 m-1' type='password' value={inputtedPassword} onChange={(e)=>setInputtedPassword(e.target.value)} placeholder='Enter your password'></input></label> <br />
            <button className="bg-orange-100 rounded-lg p-2" onClick={LoginAsParent}>LOGIN</button>
        </div>
    </div></div>
  )
}

export default ParentLogin