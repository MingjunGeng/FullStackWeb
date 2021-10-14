
import React, { useState, useEffect  } from "react";

function NumberForm(props){
    const { values, update, submit } = props
  
    const onValuesChange = event => {
      // debugger
    //   if(/^[a-zA-Z]+$/.test(event.target.value) ){
        // setFormValues({
        //   ...values,
        //   [event.target.name]: event.target.value,
        // })
        const name = event.target.name;
        const value = event.target.value;
        update(name, value);
      //}
  
    }
    const onFormSubmit = event => {
      event.preventDefault();
      submit();
      alert(`submitting ${values.email}, ${values.uname}, ${values.role}`);
    };
  
  
    return(
      <div className="container" >
        <form className='component' onSubmit={onFormSubmit}> 
        <label>Name
          <input 
                  value={values.uname}
                  name='uname'
                  onChange={onValuesChange}
                  placeholder='Enter  Name'
                  />
            <br/>
        </label>
        <label>Email
          <input 
                value={values.email}
                name='email'
                onChange={onValuesChange}
                placeholder='Enter email' 
                />
          <br/>
        </label>
        <label>Role
          <select value={values.role} name='role' onChange={onValuesChange} >
            <option value=''> -- Select a role -- </option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer"> Frontend Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Team Lead">Team Lead</option>
          </select>
          <br/>
        </label>
            <input 
              type='submit'/>
         <br/>
  
  
      </form>
      </div>
    )
  }

  export default NumberForm;