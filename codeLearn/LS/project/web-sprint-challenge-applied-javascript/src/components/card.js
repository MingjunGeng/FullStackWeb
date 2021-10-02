//import { articles } from "../mocks/data";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // Create Element 
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const authorName = document.createElement('span');

  // Append Element
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.append(cardImg);
  //cardImg.appendChild()
  author.appendChild(authorName);
  // imgContainer.appendChild(cardImg);

  // Add Class
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  // Add Attributes value
  headline.textContent = article.headline
  cardImg.src = article.authorPhoto
  authorName.textContent = article.authorName

  //console.log(card);

  return card;
}


import axios from "axios";
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {
    console.log(resp.data.articles)
    for(let key in resp.data.articles){ 
      //console.log(resp.data.articles[key])
        resp.data.articles[key].forEach(article => {
        document.querySelector(selector).appendChild(Card(article));
      })
    } 
  })
  .catch(err => {
    console.error(err);
  })

  // return articles.articles.javascript.forEach(article => {
  //   document.querySelector(selector).appendChild(Card(article));
  // })
  
}

export { Card, cardAppender }
