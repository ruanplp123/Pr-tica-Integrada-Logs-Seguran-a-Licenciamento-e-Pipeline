import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodForm from "./FoodForm";
import FoodItem from "./FoodItem";
import { setData } from "../redux/storageSlice";
import { setTotal } from "../redux/consumeSlice";

const DietTable = () => {
	const data = useSelector(state => state.storageData.data);
	const total = useSelector(state => state.consumeTotal.total);
	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem("dietData", JSON.stringify(data));

		const newTotal = data.reduce(
			(acc, item) => {
				const calories = item.checked ? item.calories : 0;
				const protein = item.checked ? item.protein : 0;

				return {
					calories: acc.calories + calories,
					protein: acc.protein + protein,
				};
			},
			{ calories: 0, protein: 0 }
		);

		dispatch(setTotal(newTotal));
	}, [data]);

	const FoodItemMemo = useMemo(() => {
		const deleteFood = index => (
			() => {
				const newData = [...data];
				newData.splice(index, 1);
				dispatch(setData(newData))
			}
		);

		const selectFood = index => (
			() => {
				const newData = [...data];
				const updatedItem = { ...newData[index], checked: !newData[index].checked };
				newData[index] = updatedItem;
				dispatch(setData(newData));
			}
		);

		return data.map((item, index) => (
			<FoodItem
				key={index}
				name={item.name}
				calories={item.calories}
				protein={item.protein}
				checked={item.checked}
				selectFood={selectFood(index)}
				deleteFood={deleteFood(index)}
			/>
		))
	}, [data])

	const FoodFormMemo = useMemo(() => {
		const saveFood = () => {
			const nameInput = document.getElementById("name");
			const caloriesInput = document.getElementById("calories");
			const proteinInput = document.getElementById("protein");

			const name = nameInput.value.trim();
			const calories = caloriesInput.value.trim();
			const protein = proteinInput.value.trim();

			if (!name || !calories || !protein) {
				return;
			}

			dispatch(setData([
				...data,
				{
					name,
					calories: Number(calories),
					protein: Number(protein),
					checked: false
				}
			]));

			nameInput.value = "";
			caloriesInput.value = "";
			proteinInput.value = "";
		};

		return (
			<FoodForm
				total={total}
				saveFood={saveFood}
			/>
		);
	}, [data, total])

	return (
		<>
			<div className="foodTable">
				<table>
					<thead>
						<tr>
							<th>Alimento</th>
							<th>Calorias</th>
							<th>Proteínas</th>
							<th>Consumido</th>
							<th>Deletar</th>
						</tr>
					</thead>
					<tbody>
						{FoodItemMemo}
					</tbody>
				</table>
			</div>
			{FoodFormMemo}
		</>
	);
};

export default DietTable;
