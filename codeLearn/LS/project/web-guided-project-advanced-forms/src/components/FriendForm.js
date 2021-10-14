import React from 'react'

export default function FriendForm(props) {
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
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a new Number</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

  
        {/* <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label> */}

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


        {/* <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label> */}

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




      </div>
    </form>
  )
}
