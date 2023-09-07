import React from "react";
import ReactDOM from "react-dom/client";

// #1 This package navigates the browser where we want it to
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// #2 we have to import is the Router component we just finished building.
import Router from "./Router";

// note: the order of imports doesn't make a functional difference

const root = ReactDOM.createRoot(document.getElementById("root"));

// #3 we have to create a component to return the BrowserRouter.
// this is called "wrapping"

const Main = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

// #4 use the "wrap".
// These are Higher Order Components or HOCs
// because they take functions as their arguments and sometimes return functions.
// root.render() takes in Main, which returns BrowserRouter
// which returns Router, which returns one of the Routes
// which returns its appropriate component, which then returns the JSX
// so the render can plug it into the DOM inside an element with the id "root"

// # 8-ish or something
// Links can only be used inside of a "router" which BrowserRouter takes care of for us.

// # 9-ish
// The BrowserRouter pattern is helpful because it will allow you to eventually add components around the router that you want to see on every page. For example, a Header and Footer component, like you see below:

// const Main = () => {
//   <BrowserRouter>
//       {/*You can use basic HTML elements to wrap your custom components so that you are in line with conventional semantic structural practices*/}
//       <header>
//           <HeaderComponent />
//       </header>

//       <main>
//           <Router /> {/* <-- See? Your different routes can be render here while still keeping the Header and Footer the same */}
//       </main>

//       <footer>
//           <FooterComponent />
//       </footer>
//   </BrowserRouter>
// }

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
