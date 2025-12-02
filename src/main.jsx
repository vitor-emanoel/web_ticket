import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Attendant from './pages/attendant/attendantPage.jsx'
import Totem from './pages/clientTotem/clientTotemPage.jsx'
import Panel from './pages/publicPanel/publicPanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
 </StrictMode>,
);
