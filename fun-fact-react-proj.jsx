import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <body>
      <img src="./react-logo.png" alt="React symbol" srcset="" />
      <h1>Fun facts about React!</h1>
      <h2>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walker</li>
          <li>Has well over 100k stars in Github</li>
          <li>is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </h2>
    </body>
  </div>
);
