import React from 'react'




function NumberForm(props){
    const {
      values,
     // submit,
      change,
      disabled,
      errors,
    } = props
  
  
  
    return (
      <div className="container">
          <div style={ { color: 'red'}}> 
            <div>{errors.username}</div> <div>{errors.email}</div> <div>{errors.agree}</div> <div>{errors.password}</div>
          </div>
          <form > 
            {/** Username */}
            <label >
            User
            <input 
                  onChange={change}
                  value={values.username}
                  name='username'
                  type='text'/>
            </label>
            <br/>
          {/** Email */}
            <label >
            Email
            <input 
                  onChange={change}
                  value={values.email}
                  name='email'
                  type='text'/>
            </label>
            <br/>
          {/** Password */}
            <label >
            Password
            <input 
                  onChange={change}
                  value={values.password}
                  name='password'
                  type='text'/>
            </label>
            <br/>
            
            {/**  Terms of Service (checkbox)  */}
            <label >Terms of Service 
                  <input 
                  onChange={change}
                  checked={values.agree}
                  name='agree'
                  type='checkbox'/>
            </label><br/>
  
            {/**  A Submit button to send our form data to the server.  */}
            <label >
              <button disabled={disabled}>submit</button>
            </label>
  
          </form>
      </div>
    )
  }


export default NumberForm
