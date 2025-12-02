import { useState } from "react";
import './clientTotem.css';

function Totem(){
    // 1. UTILIZAÇÃO DO ESTADO para controlar a senha e a exibição
    const [senhaEmitida, setSenhaEmitida] = useState(null);
    const [tipoSenha, setTipoSenha] = useState(null);
    
    // 2. FUNÇÃO DE MANIPULAÇÃO DE EVENTO 
    const emitirSenha = (code) => {
       
        const randomSeq = Math.floor(Math.random() * 99) + 1;
        const date = new Date();
        const yy = date.getFullYear().toString().slice(2);
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const novaSenha = `${yy}${mm}${dd}-${code}${String(randomSeq).padStart(2, '0')}`; // Modelo YYMMDD-PPSQ
        
        // Determina a descrição 
        let desc = '';
        if (code === 'SP') desc = 'Senha Prioritária';
        else if (code === 'SE') desc = 'Retirada de Exames';
        else if (code === 'SG') desc = 'Atendimento Geral';

        // 3. ATUALIZA O ESTADO
        setSenhaEmitida(novaSenha);
        setTipoSenha(desc);
    };

    return(
        <>
            <div className="totem-container">
                <h1>Laboratório UNINASSAU - Emissão de Senhas</h1>
                <p>Escolha o tipo de atendimento desejado:</p>
                <div className="options-grid">
                    <button 
                        className="ticket-button priority" 
                        onClick={() => emitirSenha('SP')}>
                        <span className="type-code">SP</span>
                        Senha Prioritária
                        <span className="type-desc">(Idosos, Gestantes, PCD)</span>
                    </button>
                    <button 
                        className="ticket-button exams" 
                        onClick={() => emitirSenha('SE')}>
                        <span className="type-code">SE</span>
                        Retirada de Exames
                        <span className="type-desc">(Atendimento Rápido)</span>
                    </button>
                    <button 
                        className="ticket-button general" 
                        onClick={() => emitirSenha('SG')}>
                        <span className="type-code">SG</span>
                        Atendimento Geral
                        <span className="type-desc">(Consultas, Coletas)</span>
                    </button>
                </div>
                
                {senhaEmitida && (
                    <div className="confirmation-message">
                        <h2>SUA SENHA É:</h2>
                        <p className="ticket-number">{senhaEmitida}</p>
                        <p>Tipo: <strong>{tipoSenha}.</strong></p>
                        <p>Por favor, retire seu comprovante e aguarde ser chamado no painel.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Totem;