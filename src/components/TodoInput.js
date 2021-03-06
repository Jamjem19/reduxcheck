import React, {useState} from 'react'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch ()
    return (
        <div>
            
            <div >
                <h5>
                <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                type="text" 
                placeholder="Add new Task..."
                 />
                <button className="add"
                onClick={() => {
                    dispatch(addTodo({
                        id: uuid(),
                        name: name
                     

                    }
                    ));
                   
                        setName('');
                   
                }}
                >Add</button>
                </h5>
            </div>
        </div>
    )
}

export default TodoInput;
