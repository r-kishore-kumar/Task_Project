import React, { useState } from 'react';
import './Xml.css'; 

function Xml() {
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  // Function to simulate error in fetch request
  const fetchError = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
      if (!response.ok) throw new Error('Network response was not ok');
      await response.json();
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to fetch valid data using XMLHttpRequest
  const fetchData = async () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = () => setData(JSON.parse(xhr.responseText));
    xhr.send();
  };

  return (
    <div className="app-container">
      <div className="buttons-container">
        <button className="btn" onClick={fetchError}>Fetch Error</button>
        {error && <p className="error-msg">Error: {error}</p>}
        <button className="btn" onClick={fetchData}>Fetch Data</button>
      </div>
      <div className="data-container">
        {data && data.map((item) => <p key={item.id} className="data-item">{item.title}</p>)}
      </div>
    </div>
  );
}

export default Xml;
