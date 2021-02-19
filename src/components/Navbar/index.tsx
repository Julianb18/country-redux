import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../../contexts/ThemeConfig";

import { BucketListCounter } from "../Counters/BucketListCounter";
import { VisitedCounter } from "../Counters/VisitedCounter";
import { ThemeToggle } from "../ThemeToggle";

import "./index.scss";

export const Navbar = () => {
  const themes = useContext(ThemeContext);

  return (
    <nav
      className="nav-container"
      style={{ backgroundColor: themes.theme.nav }}
    >
      <div className="nav-container__logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-container__theme">
        <ul className="nav-links">
          <li>
            <Link to="/">Countries</Link>
          </li>
          <li>
            <Link to="bucketList">Bucket List</Link>
            <BucketListCounter />
          </li>
          <li>
            <Link to="/visited">Visited</Link>
            <VisitedCounter />
          </li>
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
};
