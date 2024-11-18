import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetching data from the FastAPI backend
    axios.get("http://127.0.0.1:8000/").then((response) => {
      setMessage(response.data.message);
    });

    axios.get("http://127.0.0.1:8000/items").then((response) => {
      setItems(response.data.items);
    });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
