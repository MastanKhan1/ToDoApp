import { createSlice } from "@reduxjs/toolkit"


const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todoList : []
    },
    reducers : {
        addItem : (state, action)=>{
            state.todoList.push({
                task : action.payload.task,
                id : action.payload.id
            });
        },
        updateTodo : (state, action)=>{
            const {id, task} = action.payload;
            const index = state.todoList.findIndex(item => item.id === id);
            state.todoList[index].task = task;
        },
        clearList : (state, action)=>{
            state.todoList = [];
        },
        updateTodo : (state, action)=>{
            const {id, task} = action.payload;
            const index = state.todoList.findIndex(item => item.id === id);
            state.todoList.splice(index, 1);
        }

    }
})

export const {addItem, removeItem, clearList,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;