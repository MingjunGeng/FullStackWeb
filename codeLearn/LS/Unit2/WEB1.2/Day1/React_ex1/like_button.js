// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('hello-example')
// );
// const helloMessageContainer = document.querySelector("#HelloMessage_container")

import React from "React";
import ReactDOM from "react-dom";
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
