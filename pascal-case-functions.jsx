import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <ol>
      <li>React is a popular library</li>
      <li>I am more likely to get a job if i know react</li>
      <li>Its really cool to learn</li>
    </ol>
  );
}

function ReturnHeader() {
  return (
    <div>
      <img src="./react-logo.png" alt="react logo" width="100px" srcset="" />
    </div>
  );
}

function ReturnHone() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <h2>This is my first React application</h2>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>Copyright &copy; 2022 My React App</p>
    </div>
  );
}

root.render(
  <div>
    <ReturnHeader />
    <Page />
    <ReturnHone />
    <Footer />
  </div>
);
