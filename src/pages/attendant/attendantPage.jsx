import { useState } from "react";
import './attendantStyles.css';
function Attendant(){
    return (
        <>
        <div className="guiche-container">
        <header className="header">
            <div className="guiche-info">
                <span>Guichê: <strong id="guiche-number">03</strong></span> 
                <span>Atendente: <strong id="attendant-name">rito gomes</strong></span> 
            </div>
            <div className="time-info">
                <span id="current-time">14:40:00</span>
            </div>
        </header>

        <section className="action-panel">
            <h2>Gestão da Fila</h2>
            <button id="call-next-btn" className="main-action-button">
                Chamar Próxima Senha (AS) 
            </button>
            <div className="queue-status">
                <div className="queue-item sp">Prioritária (SP): <strong>5</strong></div>
                <div className="queue-item se">Exames (SE): <strong>2</strong></div>
                <div className="queue-item sg">Geral (SG): <strong>12</strong></div>
            </div>
        </section>

        <section className="service-panel">
            <h2>Serviço de Atendimento (SA)</h2>
            <div className="current-service">
                <p>Senha Atual:</p>
                <p className="service-ticket ticket-sp">251122-SP06</p>
                <div className="service-details">
                    <span>Tipo: <strong> Prioritária (SP)</strong> &nbsp;</span>
                    <span>Início SA: 14:38:00</span>
                    <span>Tempo Médio Esperado (TM): 15 min </span>
                </div>
                <div className="time-tracking">
                    Tempo Decorrido: <span id="elapsed-time">02:30</span> min
                </div>
            </div>

            <div className="service-actions">
                <button className="service-button finish">Finalizar Atendimento (SA)</button>
                <button className="service-button discard">Descartar Senha (AC Ausente)</button>
            </div>
        </section>

        <section className="log-section">
            <h2>Registro de Chamadas</h2>
            <ul>
                <li>14:38: SP06 chamado para Guichê 03.</li>
                <li>14:30: SE05 finalizado em Guichê 03.</li>
                <li>14:25: SG12 descartado.</li>
            </ul>
        </section>
    </div>
       </> 
    )
}
export default Attendant
