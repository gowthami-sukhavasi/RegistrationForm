import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/Form";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="app">
      <Heading />
      <Form />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
