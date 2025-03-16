import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(<TemporaryMain />);

function TemporaryMain() {
  return (
    <main>
      <img src="./react-logo.png" width="100px" alt="React logo" srcset="" />
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

/**
 * This is Pascal case where the first letter is capital and to call the function your not supposed to run the function rather you are using the tags. This is react convention of writing.
 *
 *
 */
