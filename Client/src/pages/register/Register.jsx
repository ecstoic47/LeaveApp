import "./register.css";
import React, { useState } from "react";
import Axios from "../../axios/axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    setIsError(false);
    e.preventDefault();
    
    
    try {
      
      if(branch === ''){
        alert("Please Select Branch")
      }
      else{
        const res = await Axios.post("auth/register", {
          username,
          fullname,
          department,
          designation,
          branch,
          email,
          password,
        });
  
        res.data && window.location.replace("/login");

      }

      
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter username..."
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Full Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter full name..."
          required
          onChange={(e) => setFullname(e.target.value)}
        />
        <label>Department</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Department..."
          required
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label>Designation</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Designation..."
          required
          onChange={(e) => setDesignation(e.target.value)}
        />
        <label>Branch</label>
        <select
          className="registerInput"
          name="dropdown"
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value=" default">-Select Branch-</option>
          <option value=" CHO ">Corporate Head Office</option>
          <option value="Principal">Principal Branch</option>
          <option value="Gazipur">Gazipur Branch</option>
          <option value="Bogura">Bogura Branch</option>
          <option value="Chattogram">Chattogram Branch</option>
        </select>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter email..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter password..."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        {isError && (
          <span style={{ padding: "10px", color: "red" }}>
            Something went wrong!
          </span>
        )}
      </form>
      {/* <button className="registerLoginButton">Login</button> */}
    </div>
  );
}
