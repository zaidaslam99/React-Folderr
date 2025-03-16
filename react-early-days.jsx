import React from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, "Hello from createElement!");

console.log(reactElement);
root.render(reactElement);

// OUTPUT: {type: h1: null, props: {children: "Hello from createElement!"}, _ownerL null, _store: {}}

/**
 * React Early Days Notes
 * Back in the early days of React, we could use createElement and then within it make an h1 element and specify
 * what will go into the h1 element. The result is going to be an object with the following properties.
 */
