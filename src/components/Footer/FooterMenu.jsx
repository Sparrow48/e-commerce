import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = ({ title, FooterCategory }) => {
  return (
    <div>
      <div className="mb-3">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <ul className="py-5">
        {FooterCategory?.map((category) => (
          <li className="text-sm mb-2 font-medium" key={category?.id}>
            <Link to={category?.path}>{category?.list}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
