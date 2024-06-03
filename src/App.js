import React from "react";

import { greeting, user } from "./data";

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>

    </div>
  );
}

export default App;
