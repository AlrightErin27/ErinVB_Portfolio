import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [local, setLocal] = useState("home");

  function handleHome() {
    setLocal("home");
  }
  function handleResume() {
    setLocal("resume");
  }

  return (
    <nav>
      {local === "home" ? null : (
        <NavLink
          to="/home"
          style={{ textDecoration: "none" }}
          className="nav-link"
          onClick={handleHome}
        >
          Home
        </NavLink>
      )}

      {local === "resume" ? null : (
        <NavLink
          to="/resume"
          style={{ textDecoration: "none" }}
          className="nav-link"
          onClick={handleResume}
        >
          Resume
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
