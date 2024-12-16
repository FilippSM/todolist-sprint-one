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
 
   /*  UI */
    const [filter, setNextFilter] = useState<FilterValuesType>("all")

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

    const removeTask = (taskId: string) => {
        const nextState = task_1.filter(t => t.id !== taskId)
        setTask_1(nextState);
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        const nextState: Array<TaskType> = [newTask, ...task_1]
        setTask_1(nextState)
    }

    return (
        <div className="box">
            <Todolist 
            title={todolistTitle_1} 
            changeTodolistFilter={changeTodolistFilter}
            task={filtredTasks}
            removeTask = {removeTask}
            addTask={addTask}
            />
        </div>
    );
}

export default App;
