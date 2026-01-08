import { useState } from "react";

function gerarSenha(tamanho: number, usarNumeros: boolean, usarSimbolos: boolean) {
  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (usarNumeros) caracteres += "0123456789";
  if (usarSimbolos) caracteres += "!@#$%^&*()_+-=[]{}<>?";

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  return senha;
}

function App() {
  const [tamanho, setTamanho] = useState<number>(12);
  const [numeros, setNumeros] = useState<boolean>(true);
  const [simbolos, setSimbolos] = useState<boolean>(true);
  const [senha, setSenha] = useState<string>("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Gerador de Senhas Empresarial</h1>
        <p style={styles.subtitle}>
          Gere senhas seguras para seus sistemas corporativos
        </p>

        <div style={styles.output}>
          {senha || "Clique em gerar senha"}
        </div>

        <div style={styles.controls}>
          <label>
            Tamanho: <strong>{tamanho}</strong>
          </label>
          <input
            type="range"
            min={8}
            max={32}
            value={tamanho}
            onChange={(e) => setTamanho(Number(e.target.value))}
          />

          <label>
            <input
              type="checkbox"
              checked={numeros}
              onChange={() => setNumeros(!numeros)}
            />
            Usar números
          </label>

          <label>
            <input
              type="checkbox"
              checked={simbolos}
              onChange={() => setSimbolos(!simbolos)}
            />
            Usar símbolos
          </label>
        </div>

        <button
          style={styles.button}
          onClick={() => setSenha(gerarSenha(tamanho, numeros, simbolos))}
        >
          🔐 Gerar Senha
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "white",
    color: "#020617",
    padding: "32px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  title: {
    marginBottom: "4px",
    color: "#0f4c81",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#475569",
    fontSize: "14px",
  },
  output: {
    background: "#f1f5f9",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "20px",
    wordBreak: "break-all",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  button: {
    background: "#f97316",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default App;
