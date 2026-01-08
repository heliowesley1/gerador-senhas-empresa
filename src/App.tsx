import { useState } from "react";
import { Card } from "./components/Card";
import { Controls } from "./components/Controls";
import { Output } from "./components/Output";
import { PasswordStrength } from "./components/PasswordStrength";
import { ThemeToggle } from "./components/ThemeToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [historico, setHistorico] = useLocalStorage<string[]>("historicoSenhas", []);

  const gerar = () => {
    const nova = gerarSenha(tamanho, numeros, simbolos);
    setSenha(nova);
    setHistorico([nova, ...historico].slice(0, 10)); // manter últimos 10
  };

  const copiar = () => {
    navigator.clipboard.writeText(senha);
    alert("Senha copiada para o clipboard!");
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme === "dark" ? "linear-gradient(135deg, #0f4c81, #0b3a63)" : "linear-gradient(135deg, #f97316, #fb923c)",
        transition: "0.3s",
      }}
    >
      <Card>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1 style={{ color: theme === "dark" ? "#0f4c81" : "#ffffff" }}>Gerador de Senhas</h1>
        <Output senha={senha} copiar={copiar} />
        <PasswordStrength senha={senha} />
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
            background: theme === "dark" ? "#f97316" : "#0f4c81",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          🔐 Gerar Senha
        </button>

        {historico.length > 0 && (
          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <h3>Histórico</h3>
            <ul>
              {historico.map((s, i) => (
                <li key={i} style={{ fontFamily: "monospace" }}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}

export default App;
