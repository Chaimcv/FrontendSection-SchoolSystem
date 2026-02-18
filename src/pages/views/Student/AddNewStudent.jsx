import React from 'react'

const AddNewStudent = () => {
  return (
    <div className='bg-violet-400'>
        {/* <div></div> */}
        <div>
           <table>
            <tbody>
                <tr><th></th></tr>
                
            <tr className=''>
           <td> <label>NAME<input type='text' /></label></td>
            <td>  <label>AGE<input type='text' /></label></td>
             <td>  <label>GENDER<input type='text' /></label></td>
              <td>  <label>STANDARD<input type='text' /></label></td>
              <td>   <label>DIVISION<input type='text' /></label></td>
              <td>    <label>GUARDIAN NAME<input type='text' /></label></td>
              <td>     <label>GUARDIAN PHONENUMBER<input type='text' /></label></td>
                <td>    <label>ADDRESS<input type='text' /></label></td>
                 <td>    <label>PINCODE<input type='text' /></label></td>
                 <td>    <button>SUBMIT</button></td>
                    </tr>
                    </tbody>
                  </table>  
        </div>
        <div></div>
    </div>
  )
}

export default AddNewStudent