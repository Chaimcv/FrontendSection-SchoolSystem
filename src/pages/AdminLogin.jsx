import React from 'react'

const AdminLogin = () => {
  return (
    <div>AdminLogin
        <div>
            <h3>email </h3><input type='email'></input>
             <h3>Password </h3><input type='password'></input>
             <button>Login</button>
        </div>
        <div><h5>New Admin? Register here</h5><button>SignUp</button></div>
    </div>
  )
}

export default AdminLogin