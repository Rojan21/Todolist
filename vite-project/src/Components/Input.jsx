import { useRef } from "react";
import { useState } from "react";
import "./Todo.css"
function Input(){
const inputref = useRef()
const [Todoitems,setTodoItems] = useState([])
const [updateui,setupdateui] = useState(true)
    function HandleInput(){
        Todoitems.push(inputref.current.value)
        setupdateui(pre=>!pre)
    
    }

    

    

return(
   
<>
    <input type="text" className="w-8 bg" ref={inputref} placeholder="Enter your to do list" />
    <button onClick={HandleInput}>Add Item</button>
    <div className="todocontainer">

    <ul>
    {Todoitems.map((e)=><li key={e}>{e}</li>)}
    </ul>
    </div>
   
    
    
</>
)

}

export default Input;