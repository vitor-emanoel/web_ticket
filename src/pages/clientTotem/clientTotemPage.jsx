import { useState } from "react";
import {useSenha} from '../../components/senhas.jsx';
import './clientTotem.css';

function Totem(){
   const { senhaAtual, tipoSenha, emitirSenha } = useSenha();

   const handleEmitirSenha = (code) => {
       emitirSenha(code);
    };

    return(
        <>
            <div className="totem-container">
                <h1>Laboratório UNINASSAU - Emissão de Senhas</h1>
                <p>Escolha o tipo de atendimento desejado:</p>
                <div className="options-grid">
                    <button 
                        className="ticket-button priority" 
                        onClick={() => handleEmitirSenha('SP')}>
                        <span className="type-code">SP</span>
                        Senha Prioritária
                        <span className="type-desc">(Idosos, Gestantes, PCD)</span>
                    </button>
                    <button 
                        className="ticket-button exams" 
                        onClick={() => handleEmitirSenha('SE')}>
                        <span className="type-code">SE</span>
                        Retirada de Exames
                        <span className="type-desc">(Atendimento Rápido)</span>
                    </button>
                    <button 
                        className="ticket-button general" 
                        onClick={() => handleEmitirSenha('SG')}>
                        <span className="type-code">SG</span>
                        Atendimento Geral
                        <span className="type-desc">(Consultas, Coletas)</span>
                    </button>
                </div>
                
                {senhaAtual && (
                    <div className="confirmation-message">
                        <h2>SUA SENHA É:</h2>
                        <p className="ticket-number">{senhaAtual}</p>
                        <p>Tipo: <strong>{tipoSenha}.</strong></p>
                        <p>Por favor, retire seu comprovante e aguarde ser chamado no painel.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Totem;