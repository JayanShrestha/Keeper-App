interface props{
    title:string,
    content:string,
    id:number,
    delete:(id:number)=>void,

}


const Notes = (props:props)=>{
return(
<div className="bg-slate-200 w-[240px] p-3 m-4 rounded-lg drop-shadow-lg"   key={props.id}>  
<h2>{props.title}</h2>
<p>{props.content}</p>
<button onClick={()=>{props.delete(props.id)}} className="relative float-right mr-2 bg-yellow-300 h-[36px] w-[36px] cursor-pointer button-effect">X</button>
</div>
);
}
export default Notes;