import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <p
          className="logo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <Link className="navbar-brand" to="/">
            Bon APPetite
          </Link>
        </p>
        {/* <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColors01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item active navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-controls="navbarColor01"
              // aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <Link className="nav-link" to="/">
                Home<span className="sr-only"></span>
              </Link>
            </li>
            <li
              className="nav-item navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-controls="navbarColor01"
              // aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li
              className="nav-item navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-controls="navbarColor01"
              // aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className="nav-item navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              aria-controls="navbarColor01"
              // aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-clear"></div>
    </div>
  );
};

export default Navbar;
