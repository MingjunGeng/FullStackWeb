import React from "react";
import Picture from  "./Picture";
import "./Pictures.css";


// function Picture(props) {

//   return <h1>eee1  </h1>
// }



function Pictures(props) {
  console.log(props.pictures)
  const { likePost, pictures } = props;
  
  return <div className='pictures-container-wrapper'>
    
      <div>
        {/* <h1> {props.pictures.copyright} </h1> */}
        {/* thumbnailUrl={post.thumbnailUrl} */}
      </div>
      {/* <img alt='nasa pictures' src={props.pictures['hdurl']} /> */}

      {
        pictures.map( picture => {
          //  return <h1>eee1  </h1>
          return  <Picture 
                    picture = {picture}
                  />
        })
      }
    
      
     {/* {props.pictures.map((picture) => <li > {picture['date']} </li>)} */}
     {/* {props.pictures.map((picture) => <img alt='nasa pictures' src={picture['hdurl']} />) } */}
  </div>
}
export default Pictures;
