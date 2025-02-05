import { ChangeEvent, KeyboardEvent, useRef, useState } from "react"
import { AddForm } from "./AddForm"
import { FilterValuesType, TaskType } from "./App"
import { Button } from "./Button"
import { FilterButtons } from "./FilerButtons"
import { TodolistHeader } from "./TodolistHeader"

type TodoListPropsType = {
    title: string
    task: Array<TaskType>
    addTask: (title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    changeTodolistFilter: (todolistId: string, filter: FilterValuesType) => void
    changeTaskStatus: (taskId: string, newStatus: boolean, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
    filter: FilterValuesType
    id: string
}

export function Todolist(props: TodoListPropsType) {
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<boolean>(false)

    const tasksList = props.task.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {
                props.task.map(t => {
                    const changeTaskStatusHandler=(e: ChangeEvent<HTMLInputElement>)=> props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)    

                    return (
                        <li key={t.id}>
                            <input
                                type="checkbox" 
                                checked={t.isDone} 
                                onChange={changeTaskStatusHandler}
                                />
                            <span className={t.isDone ? "task-done" : "task"}>{t.title}</span>
                            <Button title="x" onClickHandler={() => { props.removeTask(t.id, props.id) }} />
                        </li>
                    )
                })
            }
        </ul>

    const isAddTaskPossible = taskTitle.length < 15


    const addTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()
        if(trimmedTitle) {
            props.addTask(trimmedTitle, props.id)
        } else {
            setError(true)
        }
        setTaskTitle("")
    }

    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTaskTitle(e.currentTarget.value)
    }

    const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === "Enter" && isAddTaskPossible && taskTitle.length > 0) && addTaskHandler();
    }


    return (
        <div className="App">
            <div>
                <TodolistHeader title={props.title} removeTodolist={props.removeTodolist} todolistId={props.id}/>
                <div>
                    <input
                        value={taskTitle}
                        onChange={setLocalTitleHandler}
                        onKeyDown={onKeyDownAddTaskHandler}
                        className={error ? "inputError" : ""}
                    />
                    <Button
                        title="+"
                        onClickHandler={addTaskHandler}
                        isBtnDisabled={!taskTitle.length || !isAddTaskPossible}

                    />
                </div>

                {/*                 {taskTitle.length > 15 && <div>Task title is too long</div>}
 */}
                {!isAddTaskPossible && <div>Task title is too long</div>}
                {!taskTitle.length && <div>Enter task title 15 char max</div>}
                {error && <div style={{color: "red"}}>Task title is required</div>}    
                {/* <AddForm /> */}
                {tasksList}
                <FilterButtons 
                changeTodolistFilter={props.changeTodolistFilter} 
                filter={props.filter}
                id={props.id}
                />
            </div>
        </div>
    )
}