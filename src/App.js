import './App.css';
import DietTable from './components/DietTable';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // erro pra testar se o datadog ta funfando.
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