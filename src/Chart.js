import React, { useContext, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";
import './Chart.css'

const data = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 500, pv: 2500, amt: 2200 },
    { name: "Apr", uv: 600, pv: 3000, amt: 2600 },
    { name: "May", uv: 700, pv: 3200, amt: 2800 },
    { name: "Jun", uv: 800, pv: 3500, amt: 3100 },
    { name: "Jul", uv: 900, pv: 3700, amt: 3300 },
    { name: "Aug", uv: 1000, pv: 4000, amt: 3600 },
    { name: "Sep", uv: 1100, pv: 4300, amt: 3900 },
    { name: "Oct", uv: 1200, pv: 4600, amt: 4200 },
    { name: "Nov", uv: 1300, pv: 4900, amt: 4500 },
    { name: "Dec", uv: 1400, pv: 5200, amt: 4800 },
  ];

function Chart() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [user] = useState({
    name: "Hello, Michael",
    bio: "Lorem ipsum dolor sit amet.",
  });
  const navigate = useNavigate();

  return (
    <div className="chart-container">
      {isAuthenticated ? (
        <div>
          <h4>{user.name}</h4>
          <h4>{user.bio}</h4>
        </div>
      ) : (
        <></>
      )}
      
      <LineChart className="chart" width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      
      <div>
        <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
        <Link to="/table">Tables</Link>
      </div>
    </div>
  );
}

export default Chart;
