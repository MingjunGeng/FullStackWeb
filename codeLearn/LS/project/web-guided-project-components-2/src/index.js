// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry');
//console.log(entryPoint);

// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
// const dogCardOne = {imageURL: 'info@me.com', breed: 'noIdea'}
// dogCardMaker(dogCardOne);
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  /**
   * <div class="dog-card"> 
   * <img src="" class="dog-image"/>
   * <h3> </h3>
   * </div>
   */
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}
// const dogCardOne = {imageURL: 'info@me.com', breed: 'noIdea'}
// console.log(dogCardMaker(dogCardOne));
// const dogCardTwo = {imageURL:'https://dog.ceo/api/breeds/image/random', breed:'Casey'}
// console.log(dogCardMaker(dogCardTwo))
// // debugger
// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
import axios from "axios";
// axios.get('https://dog.ceo/api/breeds/image/random').then().catch().finally()
// axios.get('https://dog.ceo/api/breeds/image/random')
//   .then(resp => {
//     console.log(resp)
//     console.log(resp.data)
//     const dogObj = {
//       imageURL: resp.data.message, 
//       breed: 'Casey'
//     }
//     const doggo = dogCardMaker(dogObj)
//     entryPoint.appendChild(doggo)
//    // debugger
//   })
//   .catch(err =>{
//     //debugger
//   })
//    .finally( () => {
//     console.log("I DON'T CARE IF IT WORKED OR NOT!!!")
//    } );

//2
// import axios from "axios";
// axios.get('https://dog.ceo/api/breeds/image/random')
// .then(resp => {
//   console.log(resp);
//   const dogObj = { imageURL: resp.data.message, breed: 'Casey' }
//   const doggo = dogCardMaker(dogObj);
//   entryPoint.appendChild(doggo);
// })
// .catch(err => {
//   console.log(err)
//   console.error(err)
// })
// .finally(()=>{
//   console.log("I DON'T CARE IF IT WORKED OR NOT!!!")
// })

// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)
// 1
// function getDogs(breed, count){
//   axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
//   .then(resp => {
//     console.log(resp)
//     console.log(resp.data)
//     const dogObj = {
//       imageURL: resp.data.message, 
//       breed: 'Casey'
//     }
//     const doggo = dogCardMaker(dogObj)
//     entryPoint.appendChild(doggo)
//    // debugger
//   })
//   .catch(err =>{
//     //debugger
//   })
//    .finally( () => {
//     console.log("I DON'T CARE IF IT WORKED OR NOT!!!")
//    } );

// }
// getDogs('pitbull', 1)
// getDogs('bulldog', 1)
// getDogs('boxer', 1)
// getDogs('poodle', 1)

function getDogs(breed, count, selector){
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
  .then(resp => {
    console.log(resp)
    //console.log(resp.data)
    for(let i=0; i < resp.data.message.length; i++){
      const dogObj = {
        imageURL: resp.data.message[i], 
        breed: breed
      }
      const doggo = dogCardMaker(dogObj)
      // entryPoint.appendChild(doggo)
      document.querySelector(selector).appendChild(doggo)
    }
 

   // debugger
  })
  .catch(err =>{
    //debugger
    console.error(err)
  })
   .finally( () => {
    console.log("I DON'T CARE IF IT WORKED OR NOT!!!")
   } );

}
// getDogs('pitbull', 20, '.entry')
// getDogs('poodle',  20, '.entry')
// getDogs('bulldog', 1)
// getDogs('boxer', 1)
// getDogs('poodle', 1)



// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration

// document.querySelector('#getDogs').addEventListener('click', () => {
//   entryPoint.innerHTML = "";
//   breeds.forEach(breed => {
//     getDogs(breed, 2);
//   })
// })

axios.get(`https://lambda-times-api.herokuapp.com/breeds`)
.then(resp => {
  for(let i=0; i<resp.data.length; i++){
    getDogs(resp.data[i], 2, '.entry')
  }
}).catch(err => {
  console.error(err);
})