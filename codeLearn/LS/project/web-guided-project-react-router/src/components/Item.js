import React from 'react'
// We'll need quite a few imports from react-router-dom
import { 
  Route, 
  Switch, 
  useRouteMatch, 
  useParams, 
  NavLink 
} from 'react-router-dom';

import ItemDetails from './ItemDetails'

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props
  console.log("items.js: props = ", props, "items = ", items)

  const { id } = useParams();
  console.log("items.js: items = ", id)

  const { url, path } = useRouteMatch();
  console.log("items.js: url = ", url, " path = ", path)
  // 👉 STEP 7 - We need to pull item from items, using a parameter in the URL (:itemID)
  // Beware! The ids are integers, whereas URL parameters are strings.
  // Beware! The JSX is expecting 'item' to exist instantly!
  // we use this hook to grab they dynamic parts of the path (:itemID).
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        {/* 👉 STEP 8 - Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>

      {/* 👉 STEP 9 - Here go the Routes for `<current path>/shipping` and `<current path>/description` */}
      {/* These Routes should render <ItemDetails /> */}

      {/* 👉 STEP 10 - Shorten paths and urls with `useRouteMatch` hook */}
      <Switch>
        <Route path={`${path}/shipping`}>
            <ItemDetails text={item.shipping} />
          </Route>
          <Route path={`${path}/description`}>
            <ItemDetails text={item.description} />
          </Route>
        </Switch>
    </div>
  )
}
