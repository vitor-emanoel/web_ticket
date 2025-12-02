// App.jsx (ou onde você define suas rotas)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Totem from './pages/clientTotem/clientTotemPage.jsx';
import Attendant from './pages/attendant/attendantPage.jsx';
import Panel from './pages/publicPanel/publicPanel.jsx';
import { SenhaProvider } from './components/senhas.jsx';

function App() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/">Totem</Link> | 
            <Link to="/attendant">Atendente</Link> |
            <Link to="/panel">Painel</Link>
        </nav>
        
      
        <Routes>
            
            <Route path="/" element={<Totem />} /> 
            
            <Route path="/attendant" element={<Attendant />} />
            
            <Route path="/panel" element={<Panel />} />

            <Route path="*" element={<h1>Página Não Encontrada</h1>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;