import React from "react";
import Header from "./header/Header";
import Routing from "./router/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
