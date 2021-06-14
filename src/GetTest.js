import React from "react";

const GetTest=() => {

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:5000/", {
        method: "GET",
       })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };

    return (
      <div>
        <h3 onClick={handleSubmit}>Click Here for Get Test</h3>
      </div>
    );
}

export default GetTest;