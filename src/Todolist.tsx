import { useRef, useState } from "react"
import { AddForm } from "./AddForm"
import { FilterValuesType, TaskType } from "./App"
import { Button } from "./Button"
import { FilterButtons } from "./FilerButtons"
import { TodolistHeader } from "./TodolistHeader"

type TodoListPropsType = {
    title: string
    task: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
}

export function Todolist(props: TodoListPropsType) {
    /*  export function Todolist({title, task}: TodoListPropsType)  можно сразу запихнуть */
    /* const {title, task} = props  котокая запись через деструктуризацию*/

    //проверяем пустой ли список условный рендеринг

    /*  const taskInputRef = useRef<HTMLInputElement>(null) */

    const [taskTitle, setTaskTitle] = useState("")

    const tasksList = props.task.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {
                props.task.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <Button title="x" onClickHandler={() => { props.removeTask(t.id) }} />
                        </li>
                    )
                })
            }
        </ul>

            const isAddTaskPossible = taskTitle.length < 15 

    return (
        <div className="App">
            <div>
                <TodolistHeader title={props.title} />
                <div>
                    <input
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.currentTarget.value)}

                    />
                    <Button title="+" onClickHandler={() => {
                        props.addTask(taskTitle)
                        setTaskTitle("")
                        
                    }
                   
                    } 
                    isBtnDisabled={!taskTitle.length || !isAddTaskPossible}
                    />
                </div>

                {taskTitle.length > 15 && <div>Task title is too long</div>}
                {/* <AddForm /> */}
                {tasksList}
                <FilterButtons changeTodolistFilter={props.changeTodolistFilter} />
            </div>
        </div>
    )
}