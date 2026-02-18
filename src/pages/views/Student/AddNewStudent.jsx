import React from 'react'

const AddNewStudent = () => {
  return (
    <div className='bg-violet-400'>
        {/* <div></div> */}
        <div>
            <form>
            <label>NAME<input type='text' /></label>
             <label>AGE<input type='text' /></label>
              <label>GENDER<input type='text' /></label>
               <label>STANDARD<input type='text' /></label>
                <label>DIVISION<input type='text' /></label>
                 <label>GUARDIAN NAME<input type='text' /></label>
                  <label>GUARDIAN PHONENUMBER<input type='text' /></label>
                   <label>ADDRESS<input type='text' /></label>
                    <label>PINCODE<input type='text' /></label>
                    <button>SUBMIT</button>
                    </form>
        </div>
        <div></div>
    </div>
  )
}

export default AddNewStudent