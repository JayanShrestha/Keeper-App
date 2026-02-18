interface InputAreaProps {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  content: string;
}

const InputArea = ({handleChange, handleClick, title, content}:InputAreaProps)=>{
    
    return(
  
        
        <div>
            <div className="">
            <form className="bg-slate-200 flex flex-col gap-5 my-20 items-center justify-center w-[480px] mx-auto p-10 drop-shadow-md rounded-lg">
                <input onChange={handleChange}className="w-full rounded-lg p-2" type="text" name="title" placeholder="Input Title" value={title}/>
                <textarea onChange={handleChange} className="w-full rounded-lg p-2"  name="content" placeholder="Take a note..." rows={3} value={content}/>
                <button className="button-effect focus:border-none focus:outline-none" onClick={handleClick}>Add</button>
            </form>
            </div>
        </div>
    )
}
export default InputArea;