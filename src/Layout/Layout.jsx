import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
