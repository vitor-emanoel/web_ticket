// SenhaContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Criação do Contexto
export const SenhaContext = createContext({
  senhaAtual: null,
  tipoSenha: null,
  emitirSenha: () => {}, // Função vazia para autocomplete
});

// 2. Criação do Provedor (Provider)
export const SenhaProvider = ({ children }) => {
  // Estado que será compartilhado
  const [senhaAtual, setSenhaAtual] = useState(null);
  const [tipoSenha, setTipoSenha] = useState(null);

  // A LÓGICA DE GERAÇÃO DA SENHA É MANTIDA AQUI
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

    // ATUALIZA O ESTADO CENTRALIZADO
    setSenhaAtual(novaSenha);
    setTipoSenha(desc);
  };

  const contextValue = {
    senhaAtual,
    tipoSenha,
    emitirSenha,
  };

  return (
    <SenhaContext.Provider value={contextValue}>
      {children}
    </SenhaContext.Provider>
  );
};

// 3. Hook customizado para facilitar o acesso
export const useSenha = () => {
  return useContext(SenhaContext);
};
