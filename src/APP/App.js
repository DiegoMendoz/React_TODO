// Estilos de terceros
import 'reactjs-popup/dist/index.css';

// Componentes
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// Estilos globales
import './App.css';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
