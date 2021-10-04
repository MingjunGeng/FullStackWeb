// document.write("ssssddddd");

//1
// const butts = document.querySelector('.butts');
// butts.addEventListener('click', handleClick );
// function handleClick() {
//     console.log('IT GOT CLICKED!!!!!!!!');
//   }
// butts.removeEventListener('click', handleClick);

//2
// const butts = document.querySelector('.butts');
// const hooray = () => console.log("HOORAY!");
// butts.addEventListener('click', hooray);

//3
// const buyButtons = document.querySelectorAll("button.buy");

// if(3=='3'){
//     console.log('It is true');
// }else console.log('It is not true!');

// if(true==false || false==false){
//     console.log('Both are true')
// }else console.log('Both not true')

// let arr = [0,1, 2];
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//     let i=2;
//     console.log(arr[i]);
//   }


// const buyButtons = document.querySelectorAll("button.buy");


// buyButtons.addEventListener('click', handleClick);
// function handleClick() {
//     console.log('IT GOT CLICKED!!!!!!!!');
//   }
// // function buyItem() {
// //     console.log('BUYING ITEM');
// //   }
const butts = document.querySelectorAll('button.buy');
butts.addEventListener('click', handleClick );
function handleClick() {
    console.log('IT GOT CLICKED!!!!!!!!');
  }






// for(let i=0; i<arr.length; i++){
//   if(arr[i]===null){
//     console.log(-1);
//   } else console.log(arr[i]);
// }
// const newarr = arr.filter((item) => item !== null);
// console.log(newarr);
// const arr1 = ['cat', 'log', 'rabbit'];
// for(let i=0; i<arr1[1].length; i++){
//     console.log(arr1[1][i]);
// }

// function hungryDog(age, weight){
//     if(age >= 1 && weight <= 5){
//         return weight * 0.5;
//     } else if(age < 1){
//         console.log('Puppy food:');

//     }else{
//         return 'Please enter proper arguments';
//     }

//     const puppyFood = hungryDog(.5, 3);
//     console.log(puppyFood);
//     const dogFood = hungryDog(1, 3);
//     console.log(dogFood);
// }

// function hungryDog(weight, age){
//     console.log(age+'##');
//     if(age >= 1) {
//       if(weight <= 5 ){
//         return weight * 0.05 ;
//       } else if (weight > 6 && weight <= 10 ){
//         return weight * 0.04 ;
//       }else if (weight > 11 && weight <= 15){
//         return weight * 0.03 ;
//       }else if (weight > 15 ){
//         console.log('111');
//         return weight * 0.02 ;
//       }
//     }else {
//       if(age > 2/12 && age <= 4/12){
//         console.log('22');
//         return weight * 0.10 ;
//       } else if (age >= 0.44 && age < 0.58){
//         console.log('444');
//         return weight * 0.05 ;
//       } else if (age >= 0.58 && age < 1){
//           console.log('##');
//         return weight * 0.04 ;
//       }
//     }
//   }
//   console.log(hungryDog(4, 0.58));
  
//   let computer = Math.floor(Math.random()*3) ;
  //1==Rock 2==Paper 3==Scissors

//   console.log(computer);



// function game(user, computer){
//   if(user === computer){
//     return "it's a tie";
//   }else {
//       if ((user=='Rock') && (computer=='Scissors')){
//         return 'user you win';
//       }
//       if ((user=='Rock') && (computer=='Papper')){
//         return 'computer you win';
//       }
//       if ((user=='Scissors') && (computer=='Papper')){
//         return 'user you win';
//       }
//       if ((user=='Scissors') && (computer=='Rock')){
//         return 'computer you win';
//      }
//      if ((user=='Papper') && (computer=='Rock')){
//         return 'user you win';
//       }
//      if ((user=='Papper') && (computer=='Scissors')){
//         return 'computer you win';
//        } 
//   }
// }
// console.log(game('Rock', 'Rock'));
// console.log(game('Rock', 'Papper'));
// console.log(game('Scissors', 'Rock'));


// function annoyingSong(number){
//     /*add your code here*/
//     return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number} left over bottles of soda on the wall`;
// }
// console.log(annoyingSong(88));


// function grade(score){
//     /*Your Code here */
//       if(score >= 90 && score <= 100){
//         return 'you got an A' ;
//       }else if(score > 80 && score <= 89){
//         return 'you got a  B' ;
//       }else if(score > 70 && score <= 79){
//         return 'you got a  C' ;
//       }else if(score > 60 && score <= 69){
//         return 'you got a D' ;
//       }else {
//         return 'you got an F';
//       }
//     }
//     console.log(grade(90));
//     console.log(grade(46));
//     console.log(grade(60));

// function vowelCounter(str) {
//     /*add your code here*/
//     var count=0;
//     for(let i=0; i<str.length; i++){
//       if(str[i].includes('a') || str[i].includes('A') ){
//         count++;
//       }else if(str[i].includes('e') || str[i].includes('E') ){
//         count++;
//       }else if(str[i].includes('i') || str[i].includes('I') ){
//         count++;
//       }else if(str[i].includes('o') || str[i].includes('O') ){
//         count++;
//       }else if(str[i].includes('u') || str[i].includes('U') ){
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(vowelCounter('abcefworaiuU'));
      