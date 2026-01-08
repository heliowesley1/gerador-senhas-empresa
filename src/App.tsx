import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Controls } from "./components/Controls";
import { Output } from "./components/Output";

function gerarSenha(
  tamanho: number, 
  usarNumeros: boolean, 
  usarSimbolos: boolean, 
  apenasMaiusculas: boolean, 
  apenasMinusculas: boolean
) {
  let caracteres = "";
  
  // Lógica para definir o conjunto de letras
  if (apenasMaiusculas) {
    caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (apenasMinusculas) {
    caracteres = "abcdefghijklmnopqrstuvwxyz";
  } else {
    // Se nenhuma (ou ambas) estiverem marcadas, usa misto (comportamento padrão)
    caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

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
  
  // Novos estados para controle de caixa (case)
  const [apenasMaiusculas, setApenasMaiusculas] = useState(false);
  const [apenasMinusculas, setApenasMinusculas] = useState(false);
  
  const [senha, setSenha] = useState("");
  const [copiado, setCopiado] = useState(false);

  // Garante que "Apenas Maiúsculas" e "Apenas Minúsculas" não fiquem marcados juntos
  const toggleMaiusculas = () => {
    const novoValor = !apenasMaiusculas;
    setApenasMaiusculas(novoValor);
    if (novoValor) setApenasMinusculas(false);
  };

  const toggleMinusculas = () => {
    const novoValor = !apenasMinusculas;
    setApenasMinusculas(novoValor);
    if (novoValor) setApenasMaiusculas(false);
  };

  const gerar = () => {
    const nova = gerarSenha(tamanho, numeros, simbolos, apenasMaiusculas, apenasMinusculas);
    setSenha(nova);
    setCopiado(false);
  };

  // Atualiza ao carregar
  useEffect(() => {
    gerar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Atualiza ao mudar qualquer controle
  useEffect(() => {
    gerar();
  }, [tamanho, numeros, simbolos, apenasMaiusculas, apenasMinusculas]);

  const copiar = () => {
    navigator.clipboard.writeText(senha);
    setCopiado(true);
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
        
        <Output senha={senha} copiar={copiar} copiado={copiado} />
        
        <Controls
          tamanho={tamanho}
          setTamanho={setTamanho}
          numeros={numeros}
          setNumeros={setNumeros}
          simbolos={simbolos}
          setSimbolos={setSimbolos}
          apenasMaiusculas={apenasMaiusculas}
          toggleMaiusculas={toggleMaiusculas}
          apenasMinusculas={apenasMinusculas}
          toggleMinusculas={toggleMinusculas}
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
            marginTop: "20px",
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