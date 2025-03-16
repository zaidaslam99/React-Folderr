import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

// Declarative - where we describe what we want to see.
root.render(
  <div>
    <h1 className="header">Hello, React!</h1> // React is going to figure out
    how to do this step.
    <p>This is my first React application.</p>
  </div>
);

// Imperative - where we tell React what to do.
const h1 = document.createElement("h1");
h1.textContent = "This is imperative coding!";
h1.className = "header";
document.getElementById("root").appendChild(h1);
