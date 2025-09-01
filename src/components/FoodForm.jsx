import React from "react"

// Só pra gerar um teste la no site
const handleClick = () => {
  // É pro datadog capturar esse erro
  throw new Error("Erro de teste para o Datadog");git add .
};

const FoodForm = ({ total, saveFood }) => (
    <div className="foodForm">
        <input type="text" id="name" placeholder=" Informe o nome" />
        <input type="number" id="calories" placeholder=" Informe as calorias" />
        <input type="number" id="protein" placeholder=" Informe as proteínas" />
        <button onClick={saveFood}>salvar</button>

        {/* Adicione este novo botão para gerar o erro */}
        <button onClick={handleClick}>Gerar Erro de Teste</button>

        {total.calories ? (
            <div className="foodTotal">
                <h2>Calorias: {total.calories}g</h2>
                <h2>Proteinas: {total.protein}g</h2>
            </div>
        ) : ""}
    </div>
)

export default FoodForm;