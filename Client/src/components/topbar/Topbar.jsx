import React, { useContext } from "react";
import "./topbar.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <img class="topLeftImg" src={logo} alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>

          <li className="topListItem">
            {user && (
              <Link className="link" to="/leave">
                LEAVE
              </Link>
            )}
          </li>

          <li className="topListItem link" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <span className="topList">
            <span className="topListItem" style={{ cursor: "revert" }}>
              {user.username.toUpperCase()}
            </span>
            {user.department === "IT" && (
              <span className="topListItem">
                <Link className="link" to="/register">
                  REGISTRATION
                </Link>
              </span>
            )}
          </span>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
