import React, {useEffect} from "react";
import { API_URL } from "./App";

const DeleteButton = (props) => {
const deleteMe = () => {
  fetch(`${API_URL}/messages/${props.id}`, {
    method: "DELETE",
  }).then(() => console.log("Delete successful"))
  .then(() => props.getLatest());
}
return (<button onClick={deleteMe}>Delete</button>)
}

export default DeleteButton;