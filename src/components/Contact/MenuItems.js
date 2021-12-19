import React from "react";
import { NavLink } from "react-router-dom";

function MenuItems(props) {
  return (
    <div>
      <div className="pb-2 text-sm ">
        <NavLink to={props.link}>{props.title}</NavLink>
      </div>
    </div>
  );
}

export default MenuItems;
