import React from "react";

function Note(props) {
  if(props.id>0)
  return (
    <div className="note" key={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>props.delete(props.id)}>DELETE</button>
    </div>
  );
  else{
    return <div></div>
  }
}

export default Note;
