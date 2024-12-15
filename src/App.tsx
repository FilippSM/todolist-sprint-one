import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';


export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export type FilterValuesType = "all" | "active" | "completed"




function App() {
    //BLL -бизнес логика

    const todolistTitle_1 = "one"

    useState()

    const [task_1, setTask_1] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
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


    const removeTask = (taskId: number) => {
        const nextState = task_1.filter(t => t.id !== taskId)
        setTask_1(nextState);
    }



    return (
        <div className="box">
            <Todolist 
            title={todolistTitle_1} 
            changeTodolistFilter={changeTodolistFilter}
            task={filtredTasks}
            removeTask = {removeTask}
            />
        </div>
    );
}

export default App;
