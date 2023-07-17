import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <section id="navbar">
        <div className="container">
          <div className="main">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
              <ul>
                <li>
                    <Link>Featured</Link>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Fasilitses</a>
                </li>
                <li>
                  <a href="#">Find Doctor </a>
                </li>
                <li>
                  <a href="#">Contact </a>
                </li>
                <li>
                  <button className="button">Book Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
