import * as React from "react";
import { render } from "react-dom";
import Form from "./components/Form";

const App = () => (
  <div>
    <Form />
  </div>
);

render(<App />, document.getElementById("root"));
