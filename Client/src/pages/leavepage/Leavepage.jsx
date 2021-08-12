import React from "react";
import "./leavepage.css";
import { Link } from "react-router-dom";

export default function Leavepage() {
  return (
    <div className="page">
      <div className="leaveItem">
        <ul>
          <li>
            <Link className=" btn btn-info custBtn" to="/form">
              LEAVE APPLICATION FORM
            </Link>
          </li>
          <li>
            <Link className="btn btn-info custBtn" to="/display">
              YOUR APPLICATIONS
            </Link>
          </li>
          <li>
            <Link className="btn btn-info custBtn" to="/approve">
              APPROVE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
