console.log('HHHHH');

// const butts = document.querySelectorAll('button.buy');
// butts.addEventListener('click', handleClick );
// function handleClick() {
//     console.log('IT GOT CLICKED!!!!!!!!');
//   }
//1
const butts = document.querySelector('.butts');
butts.addEventListener('click', handleClick);
function handleClick() {
    console.log('IT GOT CLICKED!!!!!!!!');
  }
//2
const buyButtons= document.querySelectorAll("button.buy");
// function buyItem() {
//     console.log('BUYING ITEM');
//   }
//   buyButtons.forEach(function(buyButton) {
//     console.log('Binding the buy button');
//     buyButton.addEventListener("click", buyItem);
//   });

  console.log(buyButtons);
  console.dir(butts);
  buyButtons.forEach(function(buyButton) {
    console.log(buyButton);
  });


  
  buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
  });
  function handleBuyButtonClick(event) {
    console.log('You are buying it');
  }
  function handleBuyButtonClick(event) {
    const button = event.target;
    // console.log(button.textContent);
    console.log(event.target);
    // console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
    // console.log('You are buying it!!');
    // console.log(event.target.dataset);
  }

