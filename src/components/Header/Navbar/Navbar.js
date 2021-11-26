import React from "react";
import { NavLink } from "react-router-dom";
import RightNav from "./RightNav";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className="justify-between hidden py-2 text-sm font-thin border-b-2 xl:flex px-36">
      <div>
        <NavLink className="navbar-item" activeClassName="is-active" to="/">
          Welcome to Worldwide Electronics Store
        </NavLink>
      </div>
      <div className="flex justify-between">
        <RightNav
          icon={<Icon icon="bytesize:location" width="16" height="16" />}
          title={"Store Locator"}
        />
        <RightNav
          icon={<Icon icon="bi:truck" width="16" height="16" />}
          title={"Track Your Order"}
        />
        <RightNav
          icon={<Icon icon="grommet-icons:shop" width="14" height="14" />}
          title={"Shop"}
        />
        <RightNav
          icon={<Icon icon="codicon:account" width="16" height="16" />}
          title={"My Account"}
        />

        <NavLink
          className="px-2 navbar-item"
          activeClassName="is-active"
          to="/"
        >
          Switch to RTL
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
