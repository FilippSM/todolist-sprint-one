import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    //BLL -бизнес логика

    const todolstId_1 = v1()
    const todolstId_2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        { id: todolstId_1, title: 'What to learn', filter: 'all' },
        { id: todolstId_2, title: 'What to buy', filter: 'all' },
    ])


    const [task, setTask] = useState<TasksStateType>({
        [todolstId_1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "REACT", isDone: false },
        ],
        [todolstId_2]: [
            { id: v1(), title: "SSD", isDone: true },
            { id: v1(), title: "Motherboar", isDone: true },
            { id: v1(), title: "Keyboard", isDone: false },

        ],

    })

    //crud logic
    //C
    const addTask = (title: string, todolistId: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTask({
            ...task,
            [todolistId]: [newTask, ...task[todolistId]]
        })
    }
    //U-1
    const changeTaskStatus = (taskId: string, newStatus: boolean, todolistId: string) => {
        setTask({
            ...task,
            [todolistId]: task[todolistId].map(t => t.id === taskId ? { ...t, isDone: newStatus } : t)
        })
    }
    //D
    const removeTask = (taskId: string, todolistId: string) => {
        setTask({
            ...task,
            [todolistId]: task[todolistId].filter(t => t.id !== taskId)
        })
    }

    /*  UI */
    //R


    const changeTodolistFilter = (todolistId: string, filter: FilterValuesType) => {
        setTodolists(todolists.map(todolist => todolist.id === todolistId ? { ...todolist, filter } : todolist))
    }


    let removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(filteredTodolist);

        delete task[todolistId];
        setTask({...task});
    }

    return (
        <div className="box">
            {todolists.map((todolists) => {

              /*   let filtredTasks: Array<TaskType> = task */
                let filteredTasks = task[todolists.id]
                if (todolists.filter === "active") {
                    filteredTasks = filteredTasks.filter(t => t.isDone === false)
                }
                if (todolists.filter === "completed") {
                    filteredTasks = filteredTasks.filter(t => t.isDone === true)
                }

                return (
                    <Todolist
                        key={todolists.id}
                        title={todolists.title}
                        changeTodolistFilter={changeTodolistFilter}
                        task={filteredTasks}
                        removeTask={removeTask}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={todolists.filter}
                        id={todolists.id}
                        removeTodolist={removeTodolist}
                    />
                )
            })}
        </div>
    )
}

export default App;
