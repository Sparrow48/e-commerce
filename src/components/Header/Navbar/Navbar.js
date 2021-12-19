import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";

import RightNav from "./RightNav";

function Navbar() {
  return (
    <div className="justify-between hidden py-2 text-xs font-normal border-b xl:flex px-36">
      <div>
        <NavLink className="navbar-item" to="/">
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

        <NavLink className="px-2 navbar-item" to="/">
          Switch to RTL
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
