import { topics } from "../mocks/data";
let str = '';
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // Create Element
  
  const tabsTopics = document.createElement('div');
  const tab = [];
  for(let i=0; i< topics.topics.length; i++){
    tab[i] = document.createElement('div');
  }

  // Append Element
  for(let i=0; i< topics.topics.length; i++){
    tabsTopics.appendChild(tab[i]);
  }

  //  Add Class
  tabsTopics.classList.add('topics');
  tab.forEach(element => {
    element.classList.add('tab');
  });

  // Add Attributes value
  for(let i=0; i< topics.topics.length; i++){
    tab[i].textContent = topics.topics[i];
  }

  tab[0].addEventListener('click',function(){
      str = topics.topics[0]
  });
  console.log(str)

  return tabsTopics;
}
//console.log(Tabs(topics))
console.log(str)
import axios from "axios";
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      document.querySelector(selector).appendChild(Tabs(topics));
    }).catch(err => {
      console.error(err);
    })
  // return document.querySelector(selector).appendChild(Tabs(topics));
}

export { Tabs, tabsAppender }
