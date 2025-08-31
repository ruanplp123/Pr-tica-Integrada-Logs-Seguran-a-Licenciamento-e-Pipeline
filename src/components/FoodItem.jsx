import React from "react"

const FoodItem = ({
    name,
    calories,
    protein,
    checked,
    selectFood,
    deleteFood
}) => (
    <tr>
        <td>{name}</td>
        <td>{calories}</td>
        <td>{protein}</td>
        <td>
            <input
                type="checkbox"
                onChange={selectFood}
                checked={checked}
            />
        </td>
        <td>
            <button onClick={deleteFood}>Excluir</button>
        </td>
    </tr>
)

export default FoodItem;
