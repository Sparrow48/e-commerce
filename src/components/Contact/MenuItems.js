import React from "react";
import { NavLink } from "react-router-dom";

function MenuItems(props) {
  return (
    <div>
      <div>
        <NavLink to={props.link}>{props.title}</NavLink>
      </div>
    </div>
  );
}

export default MenuItems;
