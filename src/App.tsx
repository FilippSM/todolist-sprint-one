import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    //BLL -бизнес логика

    const todolistTitle_1 = "one"
    
    const [task_1, setTask_1] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])
 
    //crud logic
    //C
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        const nextState: Array<TaskType> = [newTask, ...task_1]
        setTask_1(nextState)
    }
//U-1
    const changeTaskStatus = (taskId: string, newStatus: boolean) => {
        const nextState: Array<TaskType> = task_1.map(t => t.id === taskId ? {...t, isDone: newStatus}: t)
        setTask_1(nextState)
    }
//D
    const removeTask = (taskId: string) => {
        const nextState = task_1.filter(t => t.id !== taskId)
        setTask_1(nextState);
    }

   /*  UI */
    const [filter, setNextFilter] = useState<FilterValuesType>("all")
//R
    const changeTodolistFilter = (nextFilter: FilterValuesType) => {
        setNextFilter(nextFilter)
    }

    let filtredTasks: Array<TaskType> = task_1
    if (filter === "active") {
        filtredTasks = task_1.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        filtredTasks = task_1.filter(t => t.isDone === true)
    }

    
    return (
        <div className="box">
            <Todolist 
            title={todolistTitle_1} 
            changeTodolistFilter={changeTodolistFilter}
            task={filtredTasks}
            removeTask = {removeTask}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
