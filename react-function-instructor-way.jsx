import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <ol>
      <li>Reason 1 to learn React!</li>
      <li>Reason 2 to learn React!</li>
      <li>Reason 3 to learn React!</li>
      <li>Reason 4 to learn React!</li>
      <li>Reason 5 to learn React!</li>
    </ol>
  );
}

root.render(<Page />);

/**
 * <Page /> = <Page><Page/>
 */
