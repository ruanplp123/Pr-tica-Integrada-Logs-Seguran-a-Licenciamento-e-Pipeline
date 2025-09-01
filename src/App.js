import './App.css';
import DietTable from './components/DietTable';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Por enquanto, vamos manter apenas um dos erros de teste.
    setTimeout(() => {
      throw new Error("Erro de teste - deve aparecer nos logs");
    }, 2000);
  }, []);

  return (
    <div className="dietForm">
      <DietTable/>
      <h1>Testando logs </h1> {/* Só para ver visualmente */}
    </div>
  );
}

export default App;