import React from 'react'



function Picture(props) {


  return <div className='pictures-border'>
    
        <h1>NASA picture Date : {props.picture.date} id {props.picture.id}</h1>
        {        
        <>  
            <img className='pictures-image' alt='nasa pictures' src={props.picture['hdurl']} />
        </>
        }
      
  </div>
}
export default Picture;