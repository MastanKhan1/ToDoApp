import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, removeItem, clearList,updateTodo} from '../utils/todoSlice'


const TaskInput = ()=>{
    
    const [newTask, setNewTask] = useState([]);

    const dispatch = useDispatch();

    const handleAddTodo = (task)=>{
        dispatch(addItem({
            task : task,
            id : Date.now()
        }))
    }

    return(
        <>
        <div className="d-inline">
                <div className="d-inline">
                <SideBar/>
                </div>
                <div className=" ms-5 rounded bg-secondary-subtle py-3 px-5 d-inline">
                <input placeholder="add task" className="text-center rounded-pill ms-3 px-3 py-1" type="text" value={newTask} onChange={(e)=>{
                        setNewTask(e.target.value)
                    }}/>
                    <button className='px-4 py-2 rounded-pill mx-2 border-0 text-primary bg-primary text-white'
                    onClick={()=>{
                            handleAddTodo(newTask);
                            (newTask == "")? alert("add a task") : alert("your task added to the list")
                    }} >Add Task</button>
                    
                    </div>
        </div>


        </>
    )
}


export default TaskInput;