import { FilterValuesType } from "./App"
import { Button } from "./Button"

type FilterButtonsPropsType = {
    changeTodolistFilter: (todolistId: string, filter: FilterValuesType) => void
    id: string 
    filter: FilterValuesType 
}

export const FilterButtons = ({ changeTodolistFilter, id, filter}: FilterButtonsPropsType) => {
    return (
        <div>
            <Button
                classes={filter === "all" ? "filter-btn-active" : ""}
                title="All"
                onClickHandler={() => { changeTodolistFilter(id, "all") }} />
            <Button
                classes={filter === "active" ? "filter-btn-active" : ""}
                title="Active"
                onClickHandler={() => { changeTodolistFilter(id,"active") }} />
            <Button
                classes={filter === "completed" ? "filter-btn-active" : ""}
                title="Completed"
                onClickHandler={() => { changeTodolistFilter(id,"completed") }} />
        </div>
    )
}