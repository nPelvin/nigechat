import React from "react";

const PostForm = () =>
{
      const handleSubmit = (e) => {
        e.preventDefault();
        // Const message???
        fetch("http://localhost:5000/messages", {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: { text: "random body text" },
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      };

      return (
        <div>
          <h1>CYF Chat</h1>
          <h2>Send a message</h2>
          <form onSubmit={handleSubmit}>
            <p>
              Name: <input type="text" name="from" placeholder="Your Name" />{" "}
              <br />
              Message:{" "}
              <input
                type="text"
                name="text"
                placeholder="The message..."
              />{" "}
              <br />
            </p>
            <button type="submit">Send</button>
          </form>
        </div>
      );
}

export default PostForm;