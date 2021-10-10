console.log("test");

console.log("test preinClassPractise_1");


/// m1 // 
const URL = "https://api.thedogapi.com/v1/breeds?limit=10&page=0"
const container = document.querySelector('.container')

const DogCard = ({name, temperament, ...rest}) => {

}
const fetchBreeds = (event) => {
    console.log('about to fetch data!')

}

theButton.addEventListener('click', fetchBreeds) 


// /// m1 // 
// const URL = "https://api.thedogapi.com/v1/breeds?limit=10&page=0"
// const container = document.querySelector('.container')

// const DogCard = ({name, temperament, ...rest}) => {
//     const card = document.createElement('section');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     h2.textContent = name;
//     p.textContent = temperament;
//     card.appendChild(h2);
//     card.appendChild(p);
//     return card;
// }
// const fetchBreeds = (event) => {
//     console.log('about to fetch data!')
//     axios.get(URL)
//         .then(res => {
//             debugger
//             res.data.forEach(breed => {
//                 const card = DogCard(breed)
//                 container.appendChild(card)
//             });
//         })
//         .catch(err => {
//             debugger
//         })
// }

// theButton.addEventListener('click', fetchBreeds) 


// const friendsArray = [
//     'tetondan',
//     'dustinmyers',
//     'justsml',
//     'luishrd',
//     'bigknell'
//   ];
  
//   for(let i=0; i<friendsArray.length; i++){
     
//     console.log(`https://api.github.com/users/${friendsArray[i]}`);
//   }
  


  
//   for(let i=0; i<friendsArray.length; i++){
//      let url =`https://api.github.com/users/${friendsArray[i]}`
//     console.log(url);
//     // showUserCard(url);
//   }
//   friendsArray.forEach(function(element){
//     let url = `https://api.github.com/users/${element}`
//     console.log(url);
//     // showUserCard(url);
//   })

