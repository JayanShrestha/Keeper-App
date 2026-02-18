
import './index.css';
import Header from './components/Header';
import InputArea from './components/InputArea';
import Notes from './components/Notes';
import useNote from './Hooks/useNote';


function App() {
  const {notes, setNotes} = useNote();

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = event.target;
    setNotes((prevalue)=>{
        return {
            ...prevalue,
            [name]: value,
        }     
    });

 }
 function handleClick(event:React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
setNotes((prevalue)=>{
    return{
        title:"",
        content:"",
        list:[...prevalue.list,{ title:prevalue.title, content:prevalue.content}]
    }
})
console.log(notes.list);
    
 }
 function deleteNote(id:number){
 setNotes((prevalue)=>{
  return{
    title:'',
    content:"",
    list:[...prevalue.list.filter((_,index)=>{
      return index!=id;
    })]
  }
 })
 }

 return(
    <div>
 <Header/>
  <InputArea handleChange={handleChange} handleClick={handleClick} title={notes.title} content={notes.content}/>   
 
 <div className='flex gap-5'>
  {notes.list.map((item, index)=>{
     if(item.title===""){
      return;
     }
      return <Notes key={index} id={index} title={item.title} content={item.content} delete={deleteNote}/>
    })}
    </div>
    
    
  </div>
  

 )

}

export default App
