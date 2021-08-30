import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo} from '../redux/actions';
import {updateTodo} from '../redux/actions'

function TodoItem({ todo }) {
    const [editable, setEditabla] = useState(false);
    const [name, setName] = useState(todo.name);
        
    let dispatch = useDispatch();
    return (
        <div>
            
            <div className="tasknumber">
                <div>#{todo.id.length >  1?todo.id[2]: todo.id}</div>
                <div >
                    {editable ? <input type="text" 
                     value={name}
                     onChange={
                         (e)=>setName(e.target.value)
                     }
                     />: <h4>{todo.name}</h4>}
                     <div>{todo.check}</div>
                    
                 </div>
                 <h4>
                <button className="edit"
                onClick={()=>{
                    dispatch(updateTodo({
                        ...todo,
                        name: name
                    }
                    ));
                    if (editable){
                        setName(todo.name);
                    }
                    setEditabla(!editable);
                    
                }}
                
                >{editable ? "update" : "Edit"}</button>
                <button className="delete"
                onClick={() => dispatch (deleteTodo(todo.id))}
                >
                    Delete</button>
                    </h4>
            </div>
        </div>
    )
}

export default TodoItem
