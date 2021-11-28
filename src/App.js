import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Layout from "./Layout/Layout";
import Home from "./views/Home";

import "./App.css";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
