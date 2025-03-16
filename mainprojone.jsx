import React from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

root.render(<Page />);

/**
 * So here its important to understand that we create root and we are rendering that node we created a function called page and what we are doing is rendering child element within the parent element whats important is we broke apart three different functions each returning 3 different part of the page of the html in this case header, footer, main and what we did was we created a function called page and then we are calling the different components here.
 
 * The second thing understanding how to use flex item when it comes to the use of the header first we are going use flexbox when it comes to the ul element and then we use flexbox for the header entirely to align the logo with the ul element that was interesting.

 * The third thing we learned was understanding how to comportment the code cool thing is since we are working with different function which are different components we are going to be creating different pages and in those page we send out the code export default the functions and then call the function here and import them the advantage of doing this is that when designing a website what is happening is we can then call that part of the code it makes it more readable and say if u want to fix something or a part of the code somewhere then you can do so. 

 */
