import React, { useState }  from "react";
import Picture from  "./Picture";


function Pictures(props) {
  const { pictureId, pictures } = props;
 

  return <div className='container'>
      <h2>Details (of friend with id {pictureId}):</h2>

      {
        pictures.map( (picture, i) => {
          
          return  pictureId==i && <Picture 
                    pictureId={pictureId}
                    picture = {picture}
                  />
        })
      }
    
  </div>
}
export default Pictures;
