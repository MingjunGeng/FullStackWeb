console.log('test0927');

const nl = document.querySelector('a');
console.log(nl);

console.log(nl.length);

const nl1 = document.querySelectorAll('p');
console.log(nl1);
nl1.length
console.log(nl1.length);
nl1.forEach(item=>console.log(item) );
nl1.forEach(item=>item.style.color = 'green' );
const arr =Array.from(nl);
arr.map(item => {return item });

// const introText = document.querySelector('.card-text');
// introText;
// introText.textContent;
// // let str = "ggggggg  Sweet beast tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad spend six hours per day washing";
// let str = "ggggggg  Sweet beast tickle";
// str = str.split(" ");
// for(let i=0; i<str.length; i++){
//     introText.textContent = str;
// }
// introText.textContent = str;

const catImg = document.querySelector('.card-img-top');
catImg;
catImg.setAttribute('src', "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350");

const headline = document.querySelector('h1');
headline;
headline.style;
headline.style.fontSize = '5rem';

const header = document.querySelector('header');
header.classList;
header.className = 'green';
header.classList.add('large');
header.classList.toggle('green');

const headerEl = document.querySelector('header');
headerEl;
const subHeadline = document.createElement('h1');
subHeadline
subHeadline.textContent = "Another Headline"
subHeadline.style.fontSize = '3.4rem';
subHeadline.style.color = "slategrey";
headerEl.appendChild(subHeadline);

const section = document.querySelector('.logo-container');
section.style.flexWrap = 'warp';
section.style.justifyContent = "center";