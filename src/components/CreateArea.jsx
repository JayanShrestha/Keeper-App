import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.change} name="title" placeholder="Title" value={props.title} />
        <textarea onChange={props.change} name="content" placeholder="Take a note..." rows="3" value={props.content} />
        <button onClick={props.click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
