import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./views/Home";

import "./App.css";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Layout>
          <Home />
          <Contact />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
