import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// function greting(user){
//   return user.firstname +"hi";
// }
// const user={
//   firstname:"prema"
// }
// const element=greting(user)
// const element1=(
//   <div>
//     <h1>i am prema</h1>
//     <h2>
//       {new Date().toLocaleDateString()}

//     </h2>
//   </div>
// )
function tick(){
  const elements=(
    <>
  <h1>hello</h1>
  <h2>it is {new Date().toLocaleTimeString()}</h2>
    </>
  );


root.render(
  elements);
}
setInterval(tick,1000)


  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
