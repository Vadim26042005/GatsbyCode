import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navlinks,
  navlinktext,
  navlinkitem,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navlinks}>
          <li className={navlinkitem}>
            <Link to="/" className={navlinktext}>
              Home
            </Link>
          </li>
          <li className={navlinkitem}>
            <Link to="/about" className={navlinktext}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
