//1
// const myParagraph = document.createElement('p');
// console.log(myParagraph);

//2
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p!';
myParagraph.classList.add('special');
console.log(myParagraph);
const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);
const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.appendChild(heading);
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement('afterbegin', list);
const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);
const li1 = li5.cloneNode();
list.insertAdjacentElement('afterbegin', li1);
const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);
const li2 = document.createElement("li");
li2.textContent = "Two";
li1.insertAdjacentElement("afterend", li2);

const item = document.querySelector('.item');
console.log('item.innerHTML');
item.innerHTML = `<h1>Hey How are you?</h1>`;
console.log(item.innerHTML);
