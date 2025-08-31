import './App.css';
import DietTable from './components/DietTable';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Erro de teste de renderização
    setTimeout(() => {
      throw new Error("Erro de teste - deve aparecer nos logs");
    }, 2000);

    // Promise rejeitada não tratada
    Promise.reject(new Error("Rejeição não tratada de teste"));
  }, []);

  return (
    <div className="dietForm">
      <DietTable/>
      <h1>Testando logs 🚀</h1> {/* Só para ver visualmente */}
    </div>
  );
}

export default App;
