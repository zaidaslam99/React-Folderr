import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function MyAwesomeNavbar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyAwesomeNavbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="./index.html" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <h1 style={{ backgroundColor: "yellow", padding: "10px" }}>
      React is great!
    </h1>
  );
}

/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 *
 * Afterward, render it on the line below MyAwesomeNavbar
 */

root.render(
  <div>
    <MyAwesomeNavbar />
    <Card />
    <MainContent />
  </div>
);
