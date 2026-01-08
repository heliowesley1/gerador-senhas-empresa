import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Controls } from "./components/Controls";
import { Output } from "./components/Output";

function gerarSenha(tamanho: number, usarNumeros: boolean, usarSimbolos: boolean) {
  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (usarNumeros) caracteres += "0123456789";
  if (usarSimbolos) caracteres += "!@#$%^&*()_+-=[]{}<>?";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += caracteres[Math.floor(Math.random() * caracteres.length)];
  }
  return senha;
}

function App() {
  const [tamanho, setTamanho] = useState(12);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(true);
  const [senha, setSenha] = useState("");
  const [copiado, setCopiado] = useState(false); // Novo estado para feedback visual

  const gerar = () => {
    const nova = gerarSenha(tamanho, numeros, simbolos);
    setSenha(nova);
    setCopiado(false); // Reseta a mensagem se gerar nova senha
  };

  useEffect(() => {
    gerar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    gerar();
  }, [tamanho, numeros, simbolos]);

  const copiar = () => {
    navigator.clipboard.writeText(senha);
    // Removemos o alert e ativamos o estado visual
    setCopiado(true);
    
    // Faz a mensagem sumir após 2 segundos
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card>
        <h1 style={{ color: "#0f4c81", marginTop: 0, marginBottom: "20px" }}>Gerador de Senhas</h1>
        
        {/* Passamos o estado 'copiado' para o componente Output */}
        <Output senha={senha} copiar={copiar} copiado={copiado} />
        
        <Controls
          tamanho={tamanho}
          setTamanho={setTamanho}
          numeros={numeros}
          setNumeros={setNumeros}
          simbolos={simbolos}
          setSimbolos={setSimbolos}
        />
        
        <button
          onClick={gerar}
          style={{
            background: "#0f4c81",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
            marginTop: "15px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#0b3a63")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#0f4c81")}
        >
          🔄 Gerar Nova Senha
        </button>
      </Card>
    </div>
  );
}

export default App;