type TodolistHeaderPropsType = {
    title: string
    removeTodolist: (todolistId: string) => void
    todolistId: string
}

export const TodolistHeader = ({title, removeTodolist, todolistId}: TodolistHeaderPropsType) => {
    return (
        <h3>{title} <button onClick={() => {removeTodolist(todolistId)}}>x</button></h3>
    )
}