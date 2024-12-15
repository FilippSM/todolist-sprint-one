import { FilterValuesType } from "./App"
import { Button } from "./Button"

type FilterButtonsPropsType = {
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
}

export const FilterButtons = ({changeTodolistFilter}: FilterButtonsPropsType) => {
    return (
        <div>
            <Button title="All" onClickHandler={() => { changeTodolistFilter("all") }}/>
            <Button title="Active" onClickHandler={() => { changeTodolistFilter("active") }}/>
            <Button title="Completed" onClickHandler={() => { changeTodolistFilter("completed") }}/>
        </div>
    )
}