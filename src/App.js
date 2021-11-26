import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
      </Router>
    </div>
  );
}

export default App;
