import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <LearnReact /> // This will render the LearnReact component.
  // The LearnReact component will be rendered as a standalone React element.
);

function LearnReact() {
  return (
    <div>
      <h1>Learn React</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
      <ul>
        <li>Get a job</li>
        <li>Quit my old job!</li>
        <li>Want to do something challenging</li>
        <li>Money</li>
      </ul>

      <button onClick={() => alert("React is Awesome!")}>Click Me</button>
    </div>
  );
}
