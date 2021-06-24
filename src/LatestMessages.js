import React, { useState, useEffect } from "react";
import { API_URL } from "./App";
import DeleteButton from "./DeleteButton";

const LatestMessages = () => {

  
    const latestRefreshRate = 30000;

    const [latest, setLatest] = useState([]);


    const getLatest = async () => {
            await fetch(`${API_URL}/messages/latest`)
              .then((res) => res.json())
              .then((data) => {
                console.log("fired");
                setLatest(data);
              });
            }

    useEffect(() => {
      const interval = setInterval(() => getLatest(), latestRefreshRate);

      return () => clearInterval(interval); // Apparently this represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []);



  return (
    <div>
      <button onClick={getLatest}>Refresh Latest</button>
      <ul>
        <li className="title">
          <h3>Latest Messages</h3>
        </li>
        {latest.map((x, id) => {
          return (
            <li key={x.id}>
              {x.text} - {x.from} <DeleteButton id={x.id} getLatest={getLatest} />
            </li>
          );
        })}
      </ul>
    </div>
  );
  
}


export default LatestMessages;
