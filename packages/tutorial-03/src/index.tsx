import React from "react";
import { render } from "react-dom";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
