import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';


const TaskList = ()=>{    

    const todoList = useSelector(store => store.todo.todoList);
 

    return(
        <>
        <div className='m-5'>
            <h1>Your Tasks</h1>
        {
            todoList?.map(todo=>{
                return <p className='m-2 bg-secondary-subtle rounded-pill p-2 text-center'>{todo.task}</p>
            })
        }
        </div>
        </>
    )
}

export default TaskList;