import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "react-feather";
import "../styles/nav.css";


const Nav = () => {
  const [state, setState] = useState({
    active: false,
    activeSubNav: false,
    currentPath: false,
    cartCount: 0
  })


  const handleMenuToggle = () => setState({ active: !state.active });
  const { active } = state;
  return (
    <nav className={`Nav ${active ? "Nav-active" : ""}`}>
      <div className="Nav--Container container">
        <Link to="/" aria-label="Navigation" role="button">
          <Logo />
        </Link>
        <div className="Nav--Links">
          <Link className="NavLink" to="/">
            Home
            </Link>
          <Link className="NavLink" to="/courses">
            Courses
            </Link>
          <Link className="NavLink" to="/materials">
            Materials
            </Link>
          <Link className="NavLink" to="/livesessions">
            Live Sessions
            </Link>
          <Link className="NavLink" to="/instructors">
            Instructors
            </Link>
          <Link className="NavLink" to="/contact">
            Contact
            </Link>
          {/* <Link className="NavLink" to="/cart">
            Cart ({count})
            </Link> */}
        </div>
        <button
          className="Button-blank Nav--MenuButton"
          onClick={handleMenuToggle}
          tabIndex={0}
          aria-label="Navigation"
        >
          {active ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
