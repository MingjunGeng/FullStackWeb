// Your code goes here

const bodyL = document.querySelector('body');
// bodyL.style.backgroundColor = 'grey';

const navA = document.querySelectorAll('nav a');
const  navContaine = document.querySelector('.nav-container');
// mouseover
function overNav(){
    navContaine.style.backgroundColor = '#99CCFF';
    navA.forEach(item=>item.style.color = 'green' );
}

navContaine.addEventListener('mouseover', overNav)


const navHome = document.querySelector('.home');
const navAbout = document.querySelector('.about');
const navBlog = document.querySelector('.blog');
const navContact = document.querySelector('.contact');

// click
function clickNav(event){
    //console.log(str)
    if(event.target === navHome){
        navHome.style.color = '#660033';
    }else if(event.target === navAbout){
        navAbout.style.color = '#660033';
    }else if(event.target === navBlog){
        navBlog.style.color = '#660033';
    }else if(event.target === navContact){
        navContact.style.color = '#660033';
    }
}
navHome.addEventListener('click', clickNav)
navAbout.addEventListener('click', clickNav)
navBlog.addEventListener('click', clickNav)
navContact.addEventListener('click', clickNav)

// keydown f5 reload
function reLoad(event){
    if (event.key === 'F5') {
        location.reload()
    }
}
document.addEventListener('keydown', reLoad)

// wheel
function wheelEvent(event){
    bodyL.style.backgroundColor = '#CCFFFF';
} 
bodyL.addEventListener('wheel', wheelEvent);

// disappear modal
const modal = document.querySelector('.modal');
function disappear(){
    modal.style.display = 'none';
}

//disappear();


// focus_event
form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);

// load
const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector('img.preview');
const reader = new FileReader();

function handleEvent(event) {
    if (event.type === "load") {
        preview.src = reader.result;
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleSelected(e) {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);

// resize
function myFunction(){
	var w=window.outerWidth;
	var h=window.outerHeight;
	var txt="Windows size: Width=" + w + ", Height=" + h;
	//document.getElementById("demo").innerHTML=txt;
    console.log(txt);
}
addEventListener('resize', myFunction)




// scroll

// select

// dblclick

// drag / drop



// const bodyL = document.querySelector('body');
// bodyL.style.backgroundColor = 'grey';

// const h2 = document.querySelectorAll('h2');
// h2.forEach(item=>item.style.color = '#CC0000')
// const h1 = document.querySelector('h1');
// const form = document.getElementById('form');


// // const bodyL = document.querySelector('body');
// // bodyL.style.backgroundColor = 'grey';
// const contentPick = document.querySelector('.content-pick');

// contentPick.appendChild('p');