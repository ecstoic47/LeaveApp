import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Axios from "../../axios/axios";
import "./approve.css";

export default function Approve() {
  let index = 0;
  const { user } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [remarks, setRemarks]= useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await Axios.get(`/leaveInfo/approver/${user.username}`);
        setInfo(res.data);
        console.log(res.data);
      } catch (err) {}
    };

    loadData();
  }, [user.username]);

  const handleAccept = async (id) => {
    try {
      const res = await Axios.put("/leaveInfo/accept/" + id,{
        remarks
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await Axios.put("/leaveInfo/reject/" + id,{
        remarks
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <div className="tableContainer">
        <table>
          <tr>
            <th>Index</th>
            <th>Application Date</th>
            <th>Applicant</th>
            <th>Designation</th>
            <th>Leave Stars </th>
            <th>Leave Ends</th>
            <th>Duration (Days)</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>

          {info.map((item) => (
            <tr>
              <td>{++index}</td>
              <td>{item.createdAt.slice(0, 10)}</td>
              <td>{item.fullname}</td>
              <td>{item.designation}</td>
              <td>{item.startDate.slice(0, 10)}</td>
              <td>{item.endDate.slice(0, 10)}</td>
              <td>{item.duration}</td>
              <td>{item.reason}</td>
              <td>
                <input type="text"
                 className="remarksInput" 
                 placeholder="Enter Remarks"
                 onChange = {(e)=>setRemarks(e.target.value)} />
                <div className="buttons">
                
                  <button
                    className=" actionButton accept"
                    onClick={() => handleAccept(item._id)}
                  >
                    Accept
                  </button>
                  <button
                    className=" actionButton reject"
                    onClick={() => handleReject(item._id)}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
