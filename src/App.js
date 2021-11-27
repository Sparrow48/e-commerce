import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Header></Header>
      </Router>
    </div>
  );
}

export default App;
