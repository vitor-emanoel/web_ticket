import './panel.css';
import {useSenha} from '../../components/senhas.jsx';


function Panel(){
    const { senhaAtual } = useSenha(); 
    return(
        <>
        <div className="panel-container">
        <h1>UNINASSAU - Painel de Chamados</h1>

        <div className="call-section">
            <h2 className="section-title">CHAMADA ATUAL</h2>
            <div className="current-call">
                <div className="call-item ">
                    <span className="call-label">Senha:</span>
                    <span id="current-ticket" className="ticket-display ticket-sp">{senhaAtual|| '---'}</span>
                </div>
                <div className="call-item ">
                    <span className="call-label">Guichê:</span>
                    <span id="current-counter" className="counter-display">1</span>
                </div>
            </div>
        </div>
        
        <div className="history-section">
            <h2 className="section-title history-title">ÚLTIMAS 5 CHAMADAS </h2>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Senha</th>
                        <th>Guichê</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody id="history-list">
                    <tr><td className="ticket-se">251122-SE05</td><td>01</td><td>14:35</td></tr>
                    <tr><td className="ticket-sg">251122-SG12</td><td>02</td><td>14:30</td></tr>
                    <tr><td className="ticket-sp">251122-SP04</td><td>03</td><td>14:25</td></tr>
                    <tr><td className="ticket-sg">251122-SG11</td><td>01</td><td>14:20</td></tr>
                    <tr><td className="ticket-se">251122-SE04</td><td>02</td><td>14:15</td></tr>
                </tbody>
            </table>
        </div>
        
        <div className="footer-info">
            Expediente: 07:00h às 17:00h [cite: 52] | Próxima Senha: Aguardando chamado... [cite: 55]
        </div>
    </div>
        </>
    )
}

export default Panel