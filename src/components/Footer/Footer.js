import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between px-20 bg-gray-100">
        <div className="py-12">
          <h1 className="pb-3 text-4xl font-bold">
            electro<span className="text-5xl text-yellow-400 ">.</span>
          </h1>
          <div className="flex">
            <div className="">
              <Icon
                icon="whh:headphonesalt"
                color="orange"
                width="40"
                height="40"
                hFlip={true}
              />
            </div>
            <div className="px-5">
              <p className="text-xs">Got Questions ? Call us 24/7!</p>
              <p className="text-lg ">(800) 8001-8588, (0600) 874 548</p>
            </div>
          </div>
          <div className="pt-10 text-sm ">
            <h5 className="font-bold">Contact Info</h5>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="flex pt-4 gap-x-3">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon icon="ci:facebook" color="gray" width="28" height="28" />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon
                icon="bx:bxl-whatsapp"
                color="gray"
                width="28"
                height="28"
              />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon
                icon="bx:bxl-pinterest"
                color="gray"
                width="28"
                height="28"
              />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon
                icon="ant-design:linkedin-filled"
                color="gray"
                width="28"
                height="28"
              />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon
                icon="ant-design:instagram-outlined"
                color="gray"
                width="28"
                height="28"
              />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon
                icon="ant-design:youtube-filled"
                color="gray"
                width="28"
                height="28"
              />
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              <Icon icon="bx:bx-rss" color="gray" width="28" height="28" />
            </NavLink>
          </div>
        </div>
        <div>
          <p>Right Side</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
