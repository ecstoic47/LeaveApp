import React, { useContext } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {
  const { user } = useContext(Context);
  return (
    <>
      <Header />
      <div className="home">
        {!user && (
          <Link className="btn btn-info" to="/login">
            Login to Continue
          </Link>
        )}
      </div>
    </>
  );
}
