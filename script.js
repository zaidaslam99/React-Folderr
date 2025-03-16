import React from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("div", null, "I am Iron- man!");

// 🔹 Log the React element to the console
console.log(reactElement);

root.render(reactElement);
