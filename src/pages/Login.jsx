import React from 'react'

const Login = () => {
  return (
    <div>
        <div className=' border border-gray-600 rounded-md bg-slate-400 m-5 p-2'>
          <label >Email:  <input type='text' placeholder='Enter your email'></input></label> 
            <label >Password<input type='password' placeholder='Enter your password'></input></label> 
            <button onClick={LoginFunction}>LOGIN</button>
        </div>
        <div></div>
    </div>
  )
}

export default Login