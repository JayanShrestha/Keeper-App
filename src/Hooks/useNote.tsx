import { useState } from "react";

const useNote = ()=>{
     const [notes, setNotes] = useState({title:"", content:"", list:[{title:"", content:""}]})
    return {notes,setNotes};
}
export default useNote;