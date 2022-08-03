import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigator = useNavigate();

  const handleClick = () => {
    navigator("login");
  };

  const handleClickSignIn = () => {
    navigator("signin");
  };

  const handleClickLogout = async () => {
    try {
      const res = await axios.post("/logout");
      dispatch({ type: "LOGOUT", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            {user.username}
            <button className="navButton" onClick={handleClickLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleClickSignIn}>
              Sign In
            </button>
            <button className="navButton" onClick={handleClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
