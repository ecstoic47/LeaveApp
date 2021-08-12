import React, { useContext, useEffect, useState } from "react";
import Axios from "../../axios/axios";
import { Context } from "../../context/Context";
import "./leaveForm.css";

export default function LeaveForm() {
  const { user } = useContext(Context);
  const [type, setType] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [duration, setDuration] = useState(null);
  const [reason, setReason] = useState(null);
  const [location, setLocation] = useState(null);
  const [contact, setContact] = useState(null);
  const [approver, setApprover] = useState(null);
  const [allUser, setAllUser] = useState([]);
  const [emailTo, setEmailTo] = useState(null);

  const applicant = user.username;
  const fullname = user.fullname;
  const designation = user.designation;
  const department = user.department;
 

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await Axios.get("/users/");
        setAllUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (approver !== null) {
        try {
          const res = await Axios.get(`/users/${approver}`);
          setEmailTo(res.data[0]);
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("See ya!");
      }
    };
    loadData();
  }, [approver]);


  const radioClick = async (e) => {
    // try {
    //   const res = await Axios.get(`/leaveRems/retrieve/${user.username}`);
    //   if (e.target.id === "dot-1") {
    //     alert(res.data[0].annualLeaveRem + " Annual Leaves Remaining.");
    //   } else if (e.target.id === "dot-2") {
    //     alert(res.data[0].casualLeaveRem + " Casual Leaves Remaining");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.post("/users/mail", {
        emailTo,
        
      });

      if (res.status === 200) {
        try {
          const res = await Axios.post("/leaveInfo/", {
            applicant,
            fullname,
            designation,
            department,
            type,
            start,
            end,
            duration,
            reason,
            location,
            contact,
            approver,
          });
          res.status === 200 && window.location.replace("/display");
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="leaveApp">
      <span className="title"> Leave Application Form</span>
      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  className="leave-input"
                  type="text"
                  value={user && user.fullname ? user.fullname : ""}
                />
              </div>

              <div className="input-box">
                <span className="details">Designation</span>
                <input
                  className="leave-input"
                  type="text"
                  value={user && user.designation ? user.designation : ""}
                />
              </div>
              <div className="input-box">
                <span className="details">Department</span>
                <input
                  className="leave-input"
                  type="text"
                  value={user && user.department ? user.department : ""}
                />
              </div>

              <div className="input-box">
                <span className="details">Branch</span>
                <input
                  className="leave-input"
                  type="text"
                  value={user && user.branch ? `${user.branch} Branch` : ""}
                />
              </div>
            </div>
            <div className="leave-details">
              <input
                className="radio"
                type="radio"
                name="leave"
                id="dot-1"
                value="Annual"
                onClick={radioClick}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <input
                className="radio"
                type="radio"
                name="leave"
                id="dot-2"
                value="Casual"
                onClick={radioClick}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <input
                className="radio"
                type="radio"
                name="leave"
                id="dot-3"
                value="Sick"
                onClick={radioClick}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <span className="leave-title">leave Type</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="leave">Annual Leave</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="leave">Casual Leave</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="leave">Sick Leave</span>
                </label>
              </div>
            </div>

            <div className="user-details">
              <div className="input-box">
                <span className="details">Leave Start</span>
                <input
                  className="leave-input"
                  type="date"
                  onChange={(e) => setStart(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Leave Ends</span>
                <input
                  className="leave-input"
                  type="date"
                  onChange={(e) => setEnd(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">No of Days</span>
                <input
                  className="leave-input"
                  type="text"
                  placeholder="Leave Duration..."
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Reason</span>
                <input
                  className="leave-input"
                  type="text"
                  placeholder="Enter Reason"
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </div>
              {type !== "Sick" && (
                <>
                  <div className="input-box">
                    <span className="details">Location</span>
                    <input
                      className="leave-input"
                      type="text"
                      placeholder="Location during Leave"
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Contact</span>
                    <input
                      className="leave-input"
                      type="text"
                      placeholder="Emergency contact no"
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="input-box">
                <span className="details">Approver</span>
                <select
                  className="leave-input"
                  name="dropdown"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setApprover(selected);
                  }}
                >
                  <option value=" default">-Select your approver-</option>
                  {allUser.map((item) => (
                    <option value={item.username}>{item.fullname}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
