import React from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <Fragment>
      <header>
        <img src="./react-logo.png" width="100px" alt="react-logo" srcset="" />
      </header>
      <main>
        <h1>Reason I am excited to learn React</h1>
        <ol>
          <li>
            React is a popular library, so I will be able to fit in with all the
            coolest devs out there!
          </li>
          <li>
            I am more likely to get a job as a front end developer if I know
            React
          </li>
        </ol>
      </main>
      <footer>
        <small> @ 2025 Zaid Development All rights reserved</small>
      </footer>
    </Fragment>
  );
}

root.render(<Page />);

/**
 * Fragments are basically bypassing any extra div containers so we dont need to add a lot of unnecessary containers we just create a fragment and work with that.
 * Something else when it comes to fragment is you dont need to import and it and not have to write <Fragment><Fragment/> instead you can write <> </> and this is going to refer to Fragement that is something to take away from here
 */
