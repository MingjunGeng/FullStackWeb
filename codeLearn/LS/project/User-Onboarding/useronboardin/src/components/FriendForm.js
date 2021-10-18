import React from 'react'




function FriendForm(props){
    const {
      values,
     submit,
      change,
      disabled,
      errors,
    } = props
    const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }

    const onChange = evt => {
      /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
      const { name, value, checked, type } = evt.target
      console.log(evt.target) 
      console.log(evt.target.value)
      const valueToUse = type === 'checkbox' ? checked : value;
      change(name, valueToUse)
    }
  
  
    return (
      <div className="container">
          <div style={ { color: 'red'}}> 
            {/* <div>{errors.username}</div> <div>{errors.email}</div> <div>{errors.agree}</div> <div>{errors.password}</div> */}
          </div>
          <form   onSubmit={onSubmit}> 
          <h2>Add a Friend</h2>
            {/** Username */}

            {
                    //   <div className='errors'>
                    //   {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    //   <div>{errors.username}</div>
                    //   <div>{errors.email}</div>
                    //   <div>{errors.role}</div>
                    //   <div>{errors.civil}</div>
                    // </div>
            }
            <label >
            User
            <input 
                  onChange={onChange}
                  value={values.username}
                  name='username'
                  type='text'/>
            </label>
            <br/>
            {/** Email */}
            <label >
            Email
            <input 
                  onChange={onChange}
                  value={values.email}
                  name='email'
                  type='text'/>
            </label>
            <br/>
            {/** Password */}
            <label >
            Password
            <input 
                  onChange={onChange}
                  value={values.password}
                  name='password'
                  type='text'/>
            </label>
            <br/>
            
            {/**  Terms of Service (checkbox)  */}
            <label >Terms of Service 
                  <input 
                  onChange={onChange}
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


export default FriendForm
