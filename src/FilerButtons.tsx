import { FilterValuesType } from "./App"
import { Button } from "./Button"

type FilterButtonsPropsType = {
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
    filter: FilterValuesType
}

export const FilterButtons = ({ changeTodolistFilter, filter}: FilterButtonsPropsType) => {
    return (
        <div>
            <Button
                classes={filter === "all" ? "filter-btn-active" : ""}
                title="All"
                onClickHandler={() => { changeTodolistFilter("all") }} />
            <Button
                classes={filter === "active" ? "filter-btn-active" : ""}
                title="Active"
                onClickHandler={() => { changeTodolistFilter("active") }} />
            <Button
                classes={filter === "completed" ? "filter-btn-active" : ""}
                title="Completed"
                onClickHandler={() => { changeTodolistFilter("completed") }} />
        </div>
    )
}