import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Hello from JSX!</h1>;

console.log(reactElement);
root.render(reactElement);

// Example of a component in JSX format that can be used with React
