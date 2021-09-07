//1
// function outer(){
//         const outerVar = 'Hey I am the outer Var';
//         function inner(){
//         const innerVar = "hey I am an inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     inner();
//   }
//   outer();

//2
// const p = document.querySelector('p');
// console.log(p);

//3
// function init() {
//   const p = document.querySelector('p');
//   console.log(p);
// }
// document.addEventListener('DOMContentLoaded', init);

//4
// const p = document.querySelector("p");
// const divs = document.querySelectorAll("div");
// console.log(p);
// console.log(divs);

//5
// const heading = document.querySelector('h2');
// console.dir(heading.textContent);

//6
// const heading = document.querySelector('h2');
// console.dir(heading.innerHTML);

//7
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend','🍕');
// pizzaList.insertAdjacentText('beforebegin','🍕');

//8
// const pic = document.querySelector('.nice');
// console.log(pic.classList);
// pic.classList.add("open");
// console.log(pic.classList);
// pic.classList.add('round');
// // pic.classList.toggle('round');
// function toggleRound(){
//     pic.classList.toggle('round');
// }
// pic.addEventListener('click', toggleRound);
// pic.classList.contains('open');
// pic.alt = 'Cute Pup'
// console.log(pic.alt);
// pic.width = 200; 
// console.log(pic.naturalWidth);

//9
// const custom = document.querySelector('.custom');
// console.log(custom.data);
// console.log(custom.dataset);
// // const custom = document.querySelector('.custom');
// // 
// custom.addEventListener('click', function(){
//     alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
//   });