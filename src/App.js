import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./Css/reset.css";
import "./Css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <List className="Table" />
    </div>
  );
}

export default App;
