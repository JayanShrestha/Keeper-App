import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [note, setNote] = useState({title:"", content:"", list:[{title:"", content:""}]});
  

  function handleChange(event){
    const {name, value} = event.target;
    setNote((prevalue)=>{
      return{
        ...prevalue,
        [name]:value
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
  setNote((prevalue)=>{
    return{
      
      title:"",
      content:"",
      
      list:[
        ...prevalue.list,
        {title:prevalue.title,
        content:prevalue.content},
      ],
    }
  })
  }
  function deleteNote(id){
    setNote((prevalue)=>{
      return{
        item:"",
        content:"",
        list:[
          ...prevalue.list.filter((item,index)=>{
            return index!==id;
          })
        ]
      }
    })
  }
  return (
    <div>
      <Header />
      <CreateArea change={handleChange} click={handleClick} title={note.title} content={note.content} />
      {note.list.map((item,index)=>{
        return(
          <Note key={index} id={index} title={item.title} content={item.content} delete={deleteNote} />
        )
      })}
      
      <Footer />
    </div>
  );
}

export default App;
