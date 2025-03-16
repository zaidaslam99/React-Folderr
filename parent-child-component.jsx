import React from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));

function Header(params) {
  return (
    <header>
      <img src="./react-logo.png" width="100px" alt="react-logo" srcset="" />
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there!
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small> @ 2025 Zaid Development All rights reserved</small>
    </footer>
  );
}

function Page() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

root.render(<Page />);

/**
 * So here its important to understand that we create root and we are rendering that node we created a function called page and what we are doing is rendering child element within the parent element whats important is we broke apart three different functions each returning 3 different part of the page of the html in this case header, footer, main and what we did was we created a function called page and then we are calling the different components here.
 */
