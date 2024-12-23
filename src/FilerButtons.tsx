import { FilterValuesType } from "./App"
import { Button } from "./Button"

type FilterButtonsPropsType = {
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
    filter: FilterValuesType
}

export const FilterButtons = ({ changeTodolistFilter }: FilterButtonsPropsType) => {
    return (
        <div>
            <Button
                classes="filter-btn-active"
                title="All"
                onClickHandler={() => { changeTodolistFilter("all") }} />
            <Button
                title="Active"
                onClickHandler={() => { changeTodolistFilter("active") }} />
            <Button
                title="Completed"
                onClickHandler={() => { changeTodolistFilter("completed") }} />
        </div>
    )
}