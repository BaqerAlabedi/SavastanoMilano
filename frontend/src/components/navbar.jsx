import { useRef } from "react";
import { FaBars, FaTimes, FaUser, FaDoorOpen } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Login } from "./login";
import { useNavigate, Link } from "react-router-dom";
import { Basket } from "./basket";

import "../Styles/navbar.css";
import { Tshirt } from "./tshirt";
import { Newdrop } from "./newdrop";
import { Sweatshirt } from "./sweatshirt";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("login");

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("login");
    localStorage.removeItem("userID");
    navigate("/");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="logo">Savastano Milano</h3>
      <nav ref={navRef}>
        <Link to={"/Newdrop"} element={<Newdrop />}>
          <a href="/#">New Drop</a>
        </Link>
        <Link to={"/Tshirt"} element={<Tshirt />}>
          <a href="/#">T-Shirt</a>
        </Link>
        <Link to={"/Sweatshirt"} element={<Sweatshirt />}>
          <a href="/#">Sweatshirt</a>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="btn-user-card">
        {isLoggedIn ? (
          <>
            <button className="user" onClick={handleLogout}>
              <FaDoorOpen />
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/Login" element={<Login />}>
              <button className="user">
                <FaUser />
                Log in
              </button>
            </Link>
          </>
        )}

        <Link to={"/Basket"} element={<Basket />}>
          <button className="cart">
            <FiShoppingCart />
          </button>
        </Link>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export { Navbar };
