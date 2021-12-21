import React from "react";
import { NavLink } from "react-router-dom";

function RightNav(props) {
  return (
    <div className="px-2 border-r-2">
      <NavLink className="navbar-item" to="/">
        <div className="flex items-center justify-between space-x-2 ">
          <div>{props.icon}</div>
          <div>{props.title}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default RightNav;
