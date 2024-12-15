import { AddForm } from "./AddForm"
import { FilterValuesType, TaskType } from "./App"
import { Button } from "./Button"
import { FilterButtons } from "./FilerButtons"
import { TodolistHeader } from "./TodolistHeader"

type TodoListPropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (taskId: number) => void
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
}


export function Todolist(props: TodoListPropsType) {
    /*  export function Todolist({title, task}: TodoListPropsType)  можно сразу запихнуть */
    /* const {title, task} = props  котокая запись через деструктуризацию*/


    //проверяем пустой ли список условный рендеринг
    const tasksList = props.task.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {
                props.task.map(t => {
                    return (
                        <li key = {t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <Button title="x" onClickHandler={() => { props.removeTask(t.id) }}/>
                        </li>
                    )
                })
            }
        </ul>



    /* const tasksList: Array<JSX.Element> = props.task.map(t => {
        return (
            <li><input type="checkbox" checked={true} /> 
            <span>{t.title}</span></li>
        )
    }) */

    return (
        <div className="App">
            <div>
                <TodolistHeader title={props.title} />
                <AddForm />
                {tasksList}
                <FilterButtons changeTodolistFilter={props.changeTodolistFilter}/>
            </div>
        </div>
    )
}