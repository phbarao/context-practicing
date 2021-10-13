import React from "react";
import Router from "./routes";

import GlobalContext from "./contexts/index";

export default function App() {
  return (
    <GlobalContext>
      <Router />
    </GlobalContext>
  );
}
