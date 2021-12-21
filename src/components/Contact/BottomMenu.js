import React from "react";
import MenuItems from "./MenuItems";

function BottomMenu() {
  return (
    <div className="flex ">
      <div className=" xl:pr-24 lg:pr-6">
        <h1 className="pb-4 font-bold ">Find It Fast</h1>
        <MenuItems title="Laptops & Computers" link="/" />
        <MenuItems title="Cameras & Photography" link="/" />
        <MenuItems title="Smart Phones & Tablets" link="/" />
        <MenuItems title="Video Games & Consoles" link="/" />
        <MenuItems title="TV & Audio" link="/" />
        <MenuItems title="Gadgets" link="/" />
        <MenuItems title="Waterproof Headphones" link="/" />
      </div>
      <div className="xl:pr-32 lg:pr-8 ">
        <h1 className="pb-4 font-bold ">&nbsp;</h1>
        <MenuItems title="About" link="/" />
        <MenuItems title="Contact" link="/" />
        <MenuItems title="Wishlist" link="/" />
        <MenuItems title="Compare" link="/" />
        <MenuItems title="FAQ" link="/" />
        <MenuItems title="Store Directory" link="/" />
      </div>
      <div>
        <h1 className="pb-4 font-bold ">Customer Care</h1>
        <MenuItems title="My Account" link="/" />
        <MenuItems title="Track your Order" link="/" />
        <MenuItems title="Customer Service" link="/" />
        <MenuItems title="Returns/Exchange" link="/" />
        <MenuItems title="FAQs" link="/" />
        <MenuItems title="Product Support" link="/" />
      </div>
    </div>
  );
}

export default BottomMenu;
