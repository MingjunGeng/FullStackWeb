import React from "react";

// function Picture(props) {

//     return <h1>eee1  </h1>
//   }

function Picture(props) {
  console.log(props.picture)
  return <div className='pictures-border'>
    
    <h1>{props.picture.date}</h1>
        <div>  
        {/* <h1> {props.picture.copyright} </h1> */}
        {/* thumbnailUrl={post.thumbnailUrl} */}
        <img alt='nasa pictures' src={props.picture['hdurl']} />
      </div>
      
    
      
     {/* {props.pictures.map((picture) => <li > {picture['date']} </li>)} */}
     {/* {props.pictures.map((picture) => <img alt='nasa pictures' src={picture['hdurl']} />) } */}
  </div>
}
export default Picture;