const InputArea = ()=>{
    return(
        <div>
            <div className="">
            <form className="bg-slate-200 flex flex-col gap-5 my-20 items-center justify-center w-[480px] mx-auto p-10 drop-shadow-md rounded-lg">
                <input className="w-full rounded-lg p-2" type="text" name="title" placeholder="Input Title"/>
                <textarea className="w-full rounded-lg p-2"  name="content" placeholder="Take a note..." rows={3}/>
                <button>Add</button>
            </form>
            </div>
        </div>
    )
}
export default InputArea;