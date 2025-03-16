import React from "react";
import { createRoot } from "react-dom/client";
import { NavbarFunction } from "./components/navbar";
import { MainContent } from "./components/main";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <NavbarFunction />
    <MainContent />
  </div>
);
