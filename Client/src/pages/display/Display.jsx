import React, { useContext, useEffect, useState } from "react";
import "./display.css";
import { Context } from "../../context/Context";
import Axios from "../../axios/axios";

export default function Display() {
  const { user } = useContext(Context);
  const [info, setInfo] = useState([]);
  let index = 0;

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await Axios.get(`/leaveInfo/user/${user.username}`);
        setInfo(res.data);
        console.log(res.data);
      } catch (err) {}
    };

    loadData();
  }, [user.username]);

  return (
    <div className="page">
      <div className="tableContainer">
        <table>
          <tr>
            <th>Index</th>
            <th>Leave Id</th>
            <th>Application Date</th>
            <th>Approved/Rejected On</th>
            <th>Leave Type</th>
            <th>Leave Stars</th>
            <th>Leave Ends</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
          {info.map((item) => (
            <tr>
              <td>{++index}</td>
              <th>{item._id}</th>
              <td>{item.createdAt.slice(0, 10)}</td>
              <td>{item.status === "In approval"? "Under Process": item.updatedAt.slice(0, 10)}</td>
              <td>{item.leaveType}</td>
              <td>{item.startDate.slice(0, 10)}</td>
              <td>{item.endDate.slice(0, 10)}</td>
              <td>{item.duration}</td>
              <td>{item.status}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
