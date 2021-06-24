import React, {useState} from "react";
import { API_URL } from "./App";
import getLatest from "./LatestMessages";


const PostForm = () =>
{
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  

      const handleSubmit = async (e) => {
        
        e.preventDefault();
        await fetch(`${API_URL}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ from: `${from}`, text: `${text}` }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
          // .then(() => getLatest());
      };

      return (
        <div>
          <h1>CYF Chat</h1>
          <h2>Send a message</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <p>
              Name:{" "}
              <input
                type="text"
                name="from"
                value={from}
                placeholder="Your Name"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />{" "}
              <br />
              Message:{" "}
              <input
                type="text"
                name="text"
                placeholder="The message..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />{" "}
              <br />
            </p>
            <button type="submit">Send</button>
          </form>
        </div>
      );
}

export default PostForm;